import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {TopBar, Logo, GradientButton, Card, CardSection, InputSection, Input, LogButton } from './common';
import { Actions } from 'react-native-router-flux';

class MainMenu extends Component {
  render() {
    return (
      <View>
        <TopBar/>
        <View>
          <View style={styles.titleContainerStyle}>
            <Text style={styles.titleStyle}>Welcome to</Text>
            <Text style={styles.subTitleStyle}>jeBuga</Text>
          </View>
          <Card style={{
            justifyContent: 'space-around',
            height: 300,
          }}>
          <GradientButton style={styles.linearGradient} onPress={Actions.gamesMenu} colors={[ '#64c8d2', '#007dc5']} text="Games"/>
          <GradientButton style={styles.linearGradient} colors={[ '#64c8d2', '#007dc5']} text="Favorites"/>
          <GradientButton style={styles.linearGradient} colors={[ '#64c8d2', '#007dc5']} text="Favorite Guides"/>
          <GradientButton style={styles.linearGradient} colors={[ '#64c8d2', '#007dc5']} text="Feed"/>
        </Card>
      </View>
    </View>
    );
  }
}

const styles = {
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    height: 45,
    width: 300,
    justifyContent: 'center',
    alignItems: 'baseline',
  },
 
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
        height: '82%'
    },

    titleContainerStyle: {
      marginLeft: '15%',
        marginTop: '20%',
        marginBottom: '5%'
    },
}

export { MainMenu };
