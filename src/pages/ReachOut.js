import React from 'react'
import {Typography} from "@material-ui/core";
import './styles/projectsStyles.css';
import {makeStyles} from "@material-ui/core/styles";
import { Link } from 'components/Router'
import collage from '../assets/ReachOutCollage.jpg';
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
        <div className={'project-container'}>
            <Typography variant={'h1'} className={'mainName'}>ReachOut</Typography>
            <div className={'about-container'}>
                <Paper elevation={2} className={classes.aboutPaper}>
                    <Typography variant={'body1'} color={'primary'}>
                        ReachOut is a technology company, they where in need of their visual branding and a presentation website.
                        They provide me with a clear vision of what the brand is and what the core message should be.
                        I presented them with different looks through the use of mood boards and then provided them with the source code for their responsive website.<br/>
                        On this project I worked on:
                    </Typography>
                    <List>
                        <ListItem><Typography variant={'body1'} color={'primary'}>Branding design.</Typography></ListItem>
                        <ListItem><Typography variant={'body1'} color={'primary'}>Web design.</Typography></ListItem>
                        <ListItem><Typography variant={'body1'} color={'primary'}>Front end development.</Typography></ListItem>
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
