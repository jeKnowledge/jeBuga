import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { usernameChanged, passwordChanged } from '../actions';
import { Background, Logo, Button, Card, CardSection, InputSection, Input } from './common';

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
      <Button>
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
          <Text style={styles.textStyle}>
            Don't have an account? Signup
          </Text>
        </Card>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 15,
    backgroundColor: 'transparent'
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
