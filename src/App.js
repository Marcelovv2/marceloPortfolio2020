import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import './app.css'
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import NavBar from './components/NavBar';

let mediumImportanceHeadings = {
    fontFamily: 'ethnocentric, sans-serif',
    fontWeight: 600,
    fontStyle: 'normal',
    color: '#A62929'
}

let theme = createMuiTheme({
    palette: {
        primary: {
            light: '#343434',
            main: '#0D0D0D',
            dark: '#000000',
            contrastText: '#F2F2F2',
        },
        secondary: {
            light: '#dd5b52',
            main: '#a62929',
            dark: '#700000',
            contrastText: '#F2F2F2',
        },
        danger:{
            main: '#de5800',
        }
    },
    paper:{
        backgroundColor: '#E8E3EC',
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
            color: '#000070',
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
  return (
      <ThemeProvider theme={theme}>
          <Root>
              <NavBar />
              <div className="content">
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
