import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Background, Logo, Button, Card, CardSection, InputSection, Input, LogButton } from './common';
import { Actions } from 'react-native-router-flux';

class MainMenu extends Component {
  render() {
    return (
      <View style = {{flex: 1, backgroundColor: '#eee'}}>
        <Background
          source={require('../assets/images/background/background1.jpg')}
        />
        <View style={styles.containerStyle}>
          <View style={styles.titleContainerStyle}>
            <Text style={styles.titleStyle}>Welcome to</Text>
            <Text style={styles.subTitleStyle}>jeBuga</Text>
          </View>
          <Card>
            <Button onPress={() => Actions.gamesMenu()}>
              Games
            </Button>
            <Button>
              Favorites
            </Button>
            <Button>
              Favorite Guides
            </Button>
            <Button>
              Feed
            </Button>
          </Card>
        </View>
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 30,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },

  subTitleStyle: {
    fontSize: 30,
    backgroundColor: 'transparent',
  },

  containerStyle: {
    backgroundColor: '#fff',
    marginTop: '15%',
    height: '100%'
  },

  titleContainerStyle: {
    marginLeft: '15%',
    marginTop: '20%',
    marginBottom: '5%'
  },
 }

export { MainMenu };
