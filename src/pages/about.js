import React from 'react'
import {Typography} from "@material-ui/core";
import './styles/aboutStyles.css';
import {makeStyles} from "@material-ui/core/styles";
import { Link } from 'components/Router'
import glassesImg from '../assets/withShadesNoGlassPop.png';
import Paper from "@material-ui/core/Paper";
import {List, ListItem, Button} from "@material-ui/core";
import polyLines from '../assets/projectPolyLines.png';

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
    <div className={'about-container'}>
        <Typography variant={'h1'} className={'mainName'}>About Me</Typography>
        <div className={'about-container'}>
            <Paper elevation={2} className={classes.aboutPaper}>
                <Typography variant={'caption'} className={'project-title'} color={'primary'}>
                    I believe that creation is the essence of life, that the win-win is the most important part in a
                    relationship, and that if we combine our creative powers we can make great things happen.
                </Typography>
                <Typography variant={'body1'} color={'primary'}>
                    I specialize in creating User Interfaces and developing web sites and web applications. My career
                    started when I was a salesman for an education company and decided that I wanted to be able to
                    create something by myself. This lead me in a discovery phase that took me to lose my fear of
                    creating technology, from there I have been studying the art and science of design and the information
                    technologies, now I can confidently navigate the process from idea, conceptualization, requirements
                    elicitation, prototype design, graphic design, programming, team management to final delivery and
                    maintenance, of course this depends on the size of the project but gratefully I been involved in all
                    the stages.
                </Typography>
                <br/><br/>
                <Typography variant={'body1'} color={'primary'}>
                    I love problem solving and learning new things.<br/>
                    I also love family and friends 👨‍👩‍👦‍👦🧍⛹️, good food🍲, good wine🍷, good beer🍻, good laughs🤣, killer workouts🏋️‍♂️and
                    interesting stuff🌋.
                </Typography>
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
