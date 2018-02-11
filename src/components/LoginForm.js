import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { usernameChanged, passwordChanged } from '../actions';
import { Background, Logo, Button, Card, CardSection, InputSection, Input, LogButton } from './common';
import { Actions } from 'react-native-router-flux';

class LoginForm extends Component {
  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

/*
  onButtonSubmit() {
    console.log('Submitted: ', `${this.props.username} ${this.props.password}`);
    const { username, password } = this.props;
    this.props.loginUser({ username, password });
  }

  renderError(){
    if (this.props.error) {
      return (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            color: '#cc3333'
          }}
        >Sorry authentication failed!</Text>
      );
    }
    return null;
  }
*/

  renderButton() {
    /*   if (this.props.spinner) {
      return (
        <ActivityIndicator
          style={{ height: 80 }}
          size="large"
        />
      );
    }
    */
    return (
      <Button onPress={Actions.mainMenu} textStyle={styles.signInButtonTextStyle} buttonStyle={styles.signInButtonStyle}>
        Sign in
      </Button>
    );
  }

  render() {
    return (
      <View style = {{flex: 1, backgroundColor: '#eee'}}>
        <Background
          source={require('../assets/images/background/background1.jpg')}
        />
        <Logo/>  
        <Card>
          <InputSection>
            <Input
              placeholder="Username"
              value={this.props.username}
              onChangeText={this.onUsernameChange.bind(this)}
            />
          </InputSection>
          <InputSection>
            <Input
              secureTextEntry
              placeholder="Password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </InputSection>

          <CardSection>
            {this.renderButton()}
          </CardSection>
          <LogButton text="Don't have and account?" buttonText="Signup" onPress={Actions.signup}/>
        </Card>
      </View>
    );
  }
}

const styles = {
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

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    password: state.auth.password,
    //error: state.auth.errorFlag,
    //spinner: state.auth.spinner
  };
};

//export default connect(mapStateToProps, { usernameChanged, passwordChanged, loginUser } )(LoginForm);
export default connect(mapStateToProps, { usernameChanged, passwordChanged } )(LoginForm);
