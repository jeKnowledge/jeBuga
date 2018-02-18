import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import MIIcon from 'react-native-vector-icons/MaterialIcons';
import LoginForm from './components/LoginForm';
import MainMenu from './components/MainMenu';
import SignupForm from './components/SignupForm';
import { Bar } from './components/common';

const RouterComponent = () => {
  return (
    <Router>
      <Scene >
        <Scene key="login" initial component={LoginForm} hideNavBar/>
        <Scene
          key="signup"
          component={SignupForm}
          navigationBarStyle={styles.barStyle}
          renderTitle={() => { return <Bar/>; }}
          renderBackButton={() =>
              <TouchableOpacity onPress={() => Actions.pop()}>
                <MIIcon
                  name="keyboard-arrow-left"
                  size={55}
                  color="white"
                  style={{bottom: 8}}/>
              </TouchableOpacity>
          }
          back
        />
        <Scene
          key="mainMenu"
          component={MainMenu}
          navigationBarStyle={styles.barStyle}
          renderTitle={() => { return <Bar/>; }}
          renderBackButton={() =>
              <TouchableOpacity onPress={() => Actions.pop()}>
                <MIIcon
                  name="keyboard-arrow-left"
                  size={55}
                  color="white"
                  style={{bottom: 8}}/>
              </TouchableOpacity>
          }
          back
        />
      </Scene>
    </Router>
  );
};

var styles = {
  barStyle: {
    position: 'absolute',
    alignSelf: 'center',
    top: Dimensions.get('window').height*0.91,
    width: Dimensions.get('window').width,
  },
}

export default RouterComponent;
