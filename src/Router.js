import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import MIIcon from 'react-native-vector-icons/MaterialIcons';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import { MainMenu, GameProfile, GamesMenu, NewComment, Forum } from './components';
import { Bar } from './components/common';

const RouterComponent = () => {
  return (
    <Router>
      <Scene >
        <Scene key="login" component={LoginForm} hideNavBar/>
        <Scene key="signup" component={SignupForm} hideNavBar/>
        <Scene
          initial
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
        >
          <Scene
            key="mainMenu"
            component={MainMenu}
          />

        <Scene
          key="gameProfile"
          component={GameProfile}
        />

      <Scene
        key="gamesMenu"
        component={GamesMenu}
      />

    <Scene
      key="newComment"
      component={NewComment}
    />

  <Scene
    initial
    key="forum"
    component={Forum}
  />
    </Scene>
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
