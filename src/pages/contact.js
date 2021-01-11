import React from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";
import './styles/contactStyles.css';
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
    }
    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => {
                alert("Success!")
                this.setState({
                    name: ""
                })
                this.setState({
                    email: ""
                })
                this.setState({
                    message: ""
                })

            })
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
        return (
            <div className={'contactContainer'}>
                <Typography variant={'h1'}>Contact me</Typography>
                <form onSubmit={this.handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />
                    <TextField className={'contactInput'} label="Name" type={"text"} name={"name"} value={name} variant={"outlined"} onChange={this.handleChange} color={"secondary"} />
                    <TextField className={'contactInput'} label="Email" type={"text"} name={"email"} value={email} variant={"outlined"} onChange={this.handleChange} color={"secondary"}/>
                    <TextField className={'contactInput'} multiline rows={5} label="Message" name="message" value={message} variant={"outlined"} onChange={this.handleChange} color={"secondary"} />
                    <p>
                        <Button type="submit" variant={"contained"} size={"large"} color={"primary"}>Send</Button>
                    </p>
                </form>
            </div>
        );
    }
}

export default Contact;
