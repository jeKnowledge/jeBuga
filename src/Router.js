import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import MainMenu from './components/MainMenu';
import SignupForm from './components/SignupForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene>
        <Scene key="login" component={LoginForm} hideNavBar/>
        <Scene key="signup" component={SignupForm} initial hideNavBar/>
        <Scene key="mainMenu" component={MainMenu} hideNavBar/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
