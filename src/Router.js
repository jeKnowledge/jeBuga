import React from 'react';
import { Dimensions } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import MCIIcon from 'react-native-vector-icons/Entypo';
import MIIcon from 'react-native-vector-icons/MaterialIcons';
import LoginForm from './components/LoginForm';
import MainMenu from './components/MainMenu';
import SignupForm from './components/SignupForm';

const Title = () => {
  return (
    <LinearGradient
      colors={['#0776B6', '#3BC0C1']}
      style={{
        position: 'absolute',
        flex: 1,
        width: Dimensions.get('window').width,
        height: 81,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      start={{x: 0.0, y: 0.5}} end={{x: 1, y: 0.5}}
    >
      <MCIIcon name="home" size={50} color="white"
        style={{bottom: 8}}/>
    </LinearGradient>
  );
};

const RouterComponent = () => {
  return (
    <Router>
      <Scene >
        <Scene key="login" component={LoginForm} hideNavBar/>
        <Scene key="signup" component={SignupForm}/>
        <Scene
          key="mainMenu"
          component={MainMenu}
          navigationBarStyle={styles.barStyle}
          renderTitle={() => { return <Title />; }}
          renderBackButton={() =>
              <MIIcon name="keyboard-arrow-left" size={55} color="white"
                style={{bottom: 8}}/>
          }

          back
          initial
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
