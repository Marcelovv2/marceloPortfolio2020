import React from 'react'
import {Typography} from "@material-ui/core";
import './styles/homeStyles.css';
import './styles/responsiveGlasses.css';
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
}));

export default () => (
  <div className={'homeContainer'}>
      <Typography variant={'h1'} className={'mainName'}>Marcelo Velasquez</Typography>
      <Typography variant={'caption'} className="caption">Web Development, UI design</Typography>
      <div className={'links-container'}>
          <Link to={'/about'}>About</Link>
          <Link to={'/work'}>Work</Link>
          <Link to={'/contact'}>Contact</Link>
      </div>
      <div className={'mini-about-container'}>
          <Paper className={'about-paper'}>
              <Typography variant={'body1'} color={'primary'}>
                  Hello <span role="img" aria-label="hello">👋🏼</span>,
                  <br/><br/>
                  If you need a website or something to complement your web project I can help you.
                  My focus is on user interface design and front end development.
                  <br/><br/>
                  Main skills:
              </Typography>
              <List>
                      <ListItem>
                          UI design
                      </ListItem>
                      <ListItem>
                          Front-end development
                      </ListItem>
                      <ListItem>
                          Bilingual English/Spanish
                      </ListItem>
                  </List>
              <Link to={"/contact"} style={{alignSelf: 'center'}}>
                  <Button
                      variant={'contained'}
                      color={'primary'}
                  >Contact Me</Button>
              </Link>
          </Paper>
          <div className={'img-background'}></div>
          <img src={glassesImg} className={'glasses-img'} alt=""/>
      </div>
  </div>
)
