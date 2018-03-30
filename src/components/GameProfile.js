import React, { Component } from 'react';
import { View, Dimensions, Image, Text } from 'react-native';
import { GameLogo, TopBar, GradientButton, ScaledImage } from './common';
import Icon from 'react-native-vector-icons/Entypo';

class GameProfile extends Component {
  render() {
    return(
      <View style={styles.Container}>
        <TopBar/>

        <View style={styles.ImageContainer}>
        </View>

        <View style={styles.ThumbnailFavoritesContainer}>
          <View style={styles.ThumbnailStyle}>
          </View>
          <View style={styles.FavoritesStyle}>
            <Icon name='star' size={30} color='white'/>
          </View>
        </View>

        <View style={{flex: 5, alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.TextButtonsContainer}>

            <View style={styles.TextContainer}>
              <View style={styles.TitleContainer}>
                <Text style = {styles.TitleStyle}>
                  Clash Royale
                </Text>
              </View>
              <View style={styles.DescriptionStyle}>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </Text>
              </View>
            </View>

            <View style={styles.ButtonsContainer}>
              <GradientButton colors={[ '#64c8d2', '#007dc5']} text="Forum" />
              <GradientButton colors={[ '#64c8d2', '#007dc5']} text="Cards" />
              <GradientButton colors={[ '#64c8d2', '#007dc5']} text="Guides" />
            </View>
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
    height: windowHeight * 0.91,
    alignItems: 'center',
  },
  ImageContainer: {
    flex: 2,
    backgroundColor: 'grey',
    width: windowWidth,
  },
  TextButtonsContainer: {
    flex: 1,
    width: windowWidth * 0.8,
  },
  TextContainer: {
    flex: 1,
  },
  TitleContainer: {
    paddingTop: 10,
    paddingBottom: 10
  },
  TitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  ButtonsContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  ThumbnailFavoritesContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth * 0.35,
    position: 'absolute',
  },
  ThumbnailStyle: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor:  '#2489a0',
    borderWidth: 3,
    height: '100%',
    width: '55%'
  },
  FavoritesStyle: {
    backgroundColor: '#00C2CB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: '50%',
    marginLeft: 10,
  },
}

export { GameProfile };
