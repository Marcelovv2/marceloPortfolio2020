import React from 'react'
import {Typography} from "@material-ui/core";
import './styles/projectsStyles.css';
import {makeStyles} from "@material-ui/core/styles";
import { Link } from 'components/Router'
import collage from '../assets/PolyLinesCollage.png';
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
            <Typography variant={'h1'} className={'mainName'}>PolyLines Design</Typography>
            <div className={'about-container'}>
                <Paper elevation={2} className={classes.aboutPaper}>
                    <Typography variant={'body1'} color={'primary'}>
                        PolyLines Design is an interior design startup that needed a web app from the ground up.
                        Because of their new status they didn't have anything built but a lot of knowledge of their industry,
                        after a discovery face where we laid out the goals and requirements we build two different apps,
                        one for the admin side that encompasses product and clients management and another app for the store front,
                        the store front is not an eCommerce portal hence the need to build it from scratch.<br/>
                        On this project I worked on:
                    </Typography>
                    <List>
                        <ListItem><Typography variant={'body1'} color={'primary'}>Branding design.</Typography></ListItem>
                        <ListItem><Typography variant={'body1'} color={'primary'}>User Interface design.</Typography></ListItem>
                        <ListItem><Typography variant={'body1'} color={'primary'}>Software design and development.</Typography></ListItem>
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
