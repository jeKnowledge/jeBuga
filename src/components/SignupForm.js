import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Background, Button, Card, CardSection, InputSection, Input, LogButton } from './common';
import { Actions } from 'react-native-router-flux';

class SignupForm extends Component {
  render() {
    return (
      <View style = {{flex: 1, backgroundColor: '#eee'}}>
        <Background
          source={require('../assets/images/background/background2.jpg')}
        />
        <View style={styles.titleContainerStyle}>
          <Text style={styles.titleStyle}>New</Text>
          <Text style={styles.titleStyle}>Account</Text>
        </View>
        <Card>
          <InputSection>
            <Input
              placeholder="Username"
            />
          </InputSection>
           <InputSection>
            <Input
              placeholder="Email"
            />
          </InputSection>


          <InputSection>
            <Input
              secureTextEntry
              placeholder="Password"
            />
          </InputSection>
          <CardSection>
            <Button onPress={Actions.mainMenu} textStyle={styles.signInButtonTextStyle} buttonStyle={styles.signInButtonStyle}>
              Create Account
            </Button>
          </CardSection>
          <LogButton text="Not the first time here?" buttonText="Log in" onPress={Actions.login}/> 
        </Card>
      </View>
   );
  }
}

const styles = {
  titleStyle: {
    color: '#fff',
    fontSize: 30,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },

  titleContainerStyle: {
    marginLeft: '15%',
    marginTop: '35%',
    marginBottom: '5%'
  },
  
  signInButtonTextStyle: {
    color: '#2489a0', 
    fontSize: 22, 
    backgroundColor: 'transparent'
  },

  signInButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default SignupForm;
