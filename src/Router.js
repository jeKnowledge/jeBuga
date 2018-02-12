import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import MainMenu from './components/MainMenu';
import SignupForm from './components/SignupForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene hideNavBar>
        <Scene key="login" component={LoginForm}/>
        <Scene key="signup" component={SignupForm}/>
        <Scene key="mainMenu" component={MainMenu}/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
