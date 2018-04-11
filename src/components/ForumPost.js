import React, { Component } from 'react';
import { View, Dimensions, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { GradientButton } from './common';

class ForumPost extends Component {
  render() {
    return (
      <View style={styles.Container}>

        <View style={styles.userButton}>
          <GradientButton colors={[ '#64c8d2', '#007dc5']} text="Forum" />
        </View>

        <View style={styles.infoContainer}>

          <View style={styles.textContainer}>
            <Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45
            </Text>
          </View>

          <View style={styles.bottomContainer}>
            <View style={styles.buttonsContainer}>
              <Icon name='comment' size={30} />
              <Icon name='heart' size={30} />
            </View>
          </View>

        </View>

      </View>
    )
  }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = {
  Container: {
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: 'white',
    width: windowWidth * 0.93,
    alignItems: 'center',
    //height: windowHeight * 0.5,
  },
  bottomContainer: {
    width: windowWidth * 0.93,
    //backgroundColor: 'grey',
    alignItems: 'flex-end',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  userButton: {
    width: windowWidth,
    flexDirection: 'row',
  }
}

export { ForumPost };
