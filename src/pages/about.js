import React from 'react'
import {Typography} from "@material-ui/core";
import './styles/aboutStyles.css';
import {makeStyles} from "@material-ui/core/styles";
import { Link } from 'components/Router'
import glassesImg from '../assets/withShadesNoGlassPop.png';
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
        backgroundColor: 'rgba( 255, 255, 255, 0.25 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur(4px)',
        borderRadius: '10px',
    }
}));

export default () => {
    const classes = useStyles();
    return (
    <div className={'about-container'}>
        <Typography variant={'h1'} className={'mainName'}>About Me</Typography>
        <div className={'about-container'}>
            <Paper elevation={2} className={classes.aboutPaper}>
                <Typography variant={'caption'} className={'project-title'} color={'primary'}>
                    I believe that creation is the essence of life, that the win-win is the most important part in a
                    relationship, and that if we combine our creative powers we can make great things happen.
                </Typography>
                <Typography variant={'body1'} color={'primary'}>
                    I create for the web and specialize in what you can see and interact with, user interface design is my trade. 
                    I can make a landing page, presentation website or a web component. 
                    I can adapt and work with your current technologies and collaborate with teams. 
                </Typography>
                <br/><br/>
                <Typography variant={'h6'} color={'primary'}>
                    Programming and markup
                </Typography>
                <ul>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                </ul>
                <Typography variant={'h6'} color={'primary'}>
                    Design and Prototyping
                </Typography>
                <ul>
                    <li>Adobe XD</li>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                </ul>
                <Typography variant={'h6'} color={'primary'}>
                    Experience with:
                </Typography>
                <ul>
                    <li>Redux</li>
                    <li>AWS</li>
                    <li>.Net</li>
                    <li>Node</li>
                    <li>Email Development</li>
                </ul>
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
