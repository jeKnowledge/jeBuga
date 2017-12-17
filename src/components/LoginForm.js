import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Button, Card, CardSection, InputSection, Input} from './common';

class LoginForm extends Component {
  state = { username: '' , password: ''};

  render() {
    return (
      <Card>
        <InputSection>
          <Input
            placeholder="username"
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />
        </InputSection>
        <InputSection>
          <Input
            secureTextEntry
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </InputSection>

        <CardSection>
          <Button>
            +
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
