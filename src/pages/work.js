import React from 'react'
import {Typography} from "@material-ui/core";
import './styles/workStyles.css';
import {makeStyles} from "@material-ui/core/styles";
import { Link } from 'components/Router'
import glassesImg from '../assets/withShadesNoGlassPop.png';
import Paper from "@material-ui/core/Paper";
import {List, ListItem, Button} from "@material-ui/core";
import polyLines from '../assets/projectPolyLines.png';
import reachOut from '../assets/projectReachOut.png';
import teladoc from '../assets/projectTeladoc.png';

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
}));

export default () => (
    <div className={'about-container'}>
        <Typography variant={'h1'} className={'mainName'}>Some Projects</Typography>
        <div className={'project-container'}>
            <div className={'project-frame-container'}>
                <img src={polyLines} className={'project-img'}/>
            </div>
            <Link to={'/polyLines'}>
                <Typography variant={'h6'} className={'project-title'} color={'secondary'}>
                    PolyLines Design
                </Typography>
            </Link>
        </div>
        <div className={'project-container'}>
            <div className={'project-frame-container'}>
                <img src={reachOut} className={'project-img'}/>
            </div>
            <Link to={'/ReachOut'}>
                <Typography variant={'h6'} className={'project-title'} color={'secondary'}>
                    Reach Out
                </Typography>
            </Link>
        </div>
        <div className={'project-container'}>
            <div className={'project-frame-container'}>
                <img src={teladoc} className={'project-img'}/>
            </div>
            <Link to={'/teladoc'}>
                <Typography variant={'h6'} className={'project-title'} color={'secondary'}>
                    Teladoc Internal Portal
                </Typography>
            </Link>
        </div>
    </div>
)
