import React, { Component } from 'react';
import { View, Dimensions, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GameLogo, TopBar, GradientButton } from './common';

class GameProfile extends Component {
  render() {
    const { 
      titleContainerStyle, 
      imageStyle, 
      logoStyle, 
      titleStyle, 
      subTitleStyle,
      buttonsStyle,
      linearGradient
    } = styles; 

    return(
      <View style={{ position: 'absolute', alignItems: 'center' }}>
        <TopBar/>
        <Image
          source={require('../assets/images/clashclanscapa.png')}
          style={ imageStyle }
        />
        <GameLogo 
          image={ require('../assets/images/clashclanslogo.png') }
          style={ logoStyle }
        /> 
        <View style={ titleContainerStyle }>
          <Text style={ titleStyle }>Clash Royale</Text>
          <Text style={ subTitleStyle }>
            Nunc venenatis pellentesque consequat. In dictum libero facilisis magna tincidunt, vitae gravida metus aliquam. In mollis luctus mauris, a tempor urna imperdiet id.
          </Text>
          <View style={ buttonsStyle }>
            <GradientButton style={linearGradient} colors={[ '#64c8d2', '#007dc5']} text="Forum" />
            <GradientButton style={linearGradient} colors={[ '#64c8d2', '#007dc5']} text="Cards" />
            <GradientButton style={linearGradient} colors={[ '#64c8d2', '#007dc5']} text="Guides" />
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    height: 36,
    width: Dimensions.get('window').width * 0.70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  imageStyle: {
    resizeMode: 'stretch',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.3
  },
  
  logoStyle: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height * 0.17,
    width: Dimensions.get('window').width * 0.3,
    resizeMode: 'contain',
    bottom: '6%',
    borderRadius: 30,
    borderColor: '#329CB2',
    borderWidth: 3,
  },

  subTitleStyle: {
    fontSize: 13,
    backgroundColor: 'transparent'
  },

  titleContainerStyle: {
    marginLeft: '15%',
    marginBottom: '55%',
    bottom: '5%',
    right: '8%',
    width: Dimensions.get('window').width * 0.70
  },
  
  titleStyle: {
    fontSize: 30,
    backgroundColor: 'transparent',
    fontWeight: 'bold'
  },
  
  buttonsStyle: {
    marginTop: '4%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    height: Dimensions.get('window').height*0.22,
  }
}
export { GameProfile };
