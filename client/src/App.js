import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './components/navbar/NavBar';
import SignUp from './components/signup/SignUp';
import SignIn from './components/signup/SignIn';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#e57373',
        contrastText: '#fff'
      },
      secondary: {
        main: '#43a047'
      },
      error: red,
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Router>
        <Route exact path="/" component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
