import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            style={{
              backgroundColor: '#ccc',
              flex: 1,
              resizeMode: 'stretch',
              position: 'absolute',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
            }}
            source={require('./images/background/background1.jpg')}
          />
        </View>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30%'
        }}>
        <Image
          style={{
            height: 200,
            width: 200
          }}
          source={require('./images/logo.png')}
        />
      </View>
      <LoginForm />
    </View>
    );
  }
}

export default App;
