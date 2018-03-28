import React, { Component } from 'react';
import { View, Text, TextInput, Dimensions } from 'react-native';
import { TopBar } from './common';
import { GradientButton } from './common';

class NewComment extends Component {
  constructor(props) {
    super(props)
    this.state = { text: "HERE" };
  }
  render() {
    return(
      <View style={{alignItems: "center"}}>
        <TopBar/>

        <View style={styles.Container}>

          <View style={styles.TextContainer}>
            <Text style={styles.TextStyle}>
              Write a comment
            </Text>
          </View>

          <View style={styles.InputContainer}>
            <TextInput style={styles.TextInputStyle} placeholder="HERE"/>
          </View>

          <View style={styles.ButtonContainer}>
            <GradientButton style={styles.ButtonStyle}colors={[ '#64c8d2', '#007dc5']} text='Send' />
          </View>

        </View>
      </View>
    )
  }
}

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = {
  Container: {
    width: windowWidth * 0.9,
  },
  TextContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  TextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  InputContainer: {
    backgroundColor: 'white',
    height: windowHeight * 0.4
  },
  TextInputStyle: {
    padding: 10,
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    width: windowWidth * 0.9,
    marginTop: windowHeight * 0.44,
    marginLeft: windowWidth * 0.04
  },
  ButtonStyle: {
    width: '100%',
  }
}

export { NewComment };
