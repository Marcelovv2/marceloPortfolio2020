import React, {useEffect} from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import './app.css'
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Particles from 'react-particles-js';

let mediumImportanceHeadings = {
    fontFamily: 'ethnocentric, sans-serif',
    fontWeight: 600,
    fontStyle: 'normal',
    color: '#ECE2D5'
}

let theme = createMuiTheme({

    palette: {
        primary: {
            light: '#343434',
            main: '#0D0D0D',
            dark: '#000000',
            contrastText: '#ECE2D5',
        },
        secondary: {
            light: '#dd5b52',
            main: '#a62929',
            dark: '#700000',
            contrastText: '#ECE2D5',
        },
        danger:{
            main: '#de5800',
        }
    },
    paper:{
        backgroundColor: 'rgba( 255, 255, 255, 0.25 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur(4px)',
        borderRadius: '10px',
    },
    typography: {
        h1:{
            fontFamily: 'ethnocentric, sans-serif',
            fontWeight: 700,
            fontSize: '2.1rem',
            fontStyle: 'italic',
            color: '#A62929',
            padding: '5px 0px 5px 0px',
        },
        h2: mediumImportanceHeadings,
        h3: mediumImportanceHeadings,
        h4: mediumImportanceHeadings,
        h5: mediumImportanceHeadings,
        h6: mediumImportanceHeadings,
        subtitle1:{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
        },
        subtitle2:{
            fontFamily: 'Roboto, serif',
            fontWeight: 700,
            fontStyle: 'italic',
        },
        body1:{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            color: '#ECE2D5',
        },
        body2:{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',

        },
        button:{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            textTransform: "upperCase",
        },
        caption:{
            fontFamily: 'Roboto, serif',
            fontWeight: 700,
            fontStyle: 'italic',
            textDecoration: 'none',
        },
        fontFamily: [
            "azo-sans-web",
            "garamond-premier-pro, serif",
            "garamond-premier-pro-caption, serif",
        ].join(','),
    },

});
theme = responsiveFontSizes(theme);

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
//   useEffect(() => {    
    
//     });
  return (
      <ThemeProvider theme={theme}>
          <Root>
              <NavBar />
              <div className="content">
              <Particles
    params={{
	    particles: {
	        number: {
	            value: 60,
	            density: {
	                enable: true,
	                value_area: 1500
	            }
	        },
	        line_linked: {
	            enable: true,
	            opacity: 0.02
	        },
	        move: {
	            direction: "right",
	            speed: 0.05
	        },
	        size: {
	            value: 1
	        },
	        opacity: {
	            anim: {
	                enable: true,
	                speed: 1,
	                opacity_min: 0.05
	            }
	        }
	    },
	    interactivity: {
	        events: {
	            onclick: {
	                enable: true,
	                mode: "push"
	            }
	        },
	        modes: {
	            push: {
	                particles_nb: 1
	            }
	        }
	    },
	    retina_detect: true
	}} 
    style={{
        width: '100%',
        position: 'absolute',
        top: '10%',
        zIndex: '-5' 
      }}
    />
                  <React.Suspense fallback={<em>Loading...</em>}>
                      <Router>
                          <Dynamic path="dynamic" />
                          <Routes path="*" />
                      </Router>

                  </React.Suspense>
              </div>
          </Root>
      </ThemeProvider>
  )
}

export default App
