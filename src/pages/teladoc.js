import React from 'react'
import {Typography} from "@material-ui/core";
import './styles/projectsStyles.css';
import {makeStyles} from "@material-ui/core/styles";
import { Link } from 'components/Router'
import collage from '../assets/projectTeladoc.png';
import Paper from "@material-ui/core/Paper";
import {List, ListItem, Button} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: theme.palette.primary.contrastText,
    },
    title: {
        flexGrow: 1,
    },
    aboutPaper:{
        padding:'5%',
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <div className={'project-container'}>
            <Typography variant={'h1'} className={'mainName'}>ReachOut</Typography>
            <div className={'about-container'}>
                <Paper elevation={2} className={classes.aboutPaper}>
                    <Typography variant={'body1'} color={'primary'}>
                        This project was done through a contract for Vision Inc, Teladoc needed a re-branding of their internal engagement
                        portal this was use by their associates to get communications materials like printed and email, the portal was built
                        on a .NET stack with a generic look, they hired a separate agency to do a web design and our job consisted of
                        translating the web design to the source code of Vision plus some additional features.
                    </Typography>
                    <List>
                        <ListItem><Typography variant={'body1'} color={'primary'}>Front end development.</Typography></ListItem>
                        <ListItem><Typography variant={'body1'} color={'primary'}>Team collaboration.</Typography></ListItem>
                    </List>
                    <img src={collage} className={'project-image'}/>
                </Paper>
                <div className={'buttons-container'}>
                    <Link to={"/work"} style={{alignSelf: 'center'}}>
                        <Button
                            variant={'contained'}
                            color={'primary'}
                        >My Work</Button>
                    </Link>
                    <Link to={"/contact"} style={{alignSelf: 'center'}}>
                        <Button
                            variant={'contained'}
                            color={'primary'}
                        >Contact Me</Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
