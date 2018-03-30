import React, { Component } from 'react';
import { View, Dimensions, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GameLogo, TopBar, GradientButton } from './common';
import Entypo from 'react-native-vector-icons/Entypo';

class GameProfile extends Component {
  render() {
    return(
      <View style={{ position: 'absolute', alignItems: 'center' }}>
        <TopBar/>
        <Image
          source={require('../assets/images/clashclanscapa.png')}
          style={styles.imageStyle}
        />
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: 200,
          marginLeft: 80,
        }}>
        <View style={{alignItems: "flex-end", position: "relative", marginTop: -20}}>
          <GameLogo style={styles.logoStyle}/>
        </View>
        <View style={{height:10, marginTop: 10, marginRight: 25}}>
          <Entypo.Button
            name="star"
            size={30}
            color="white"
            backgroundColor="#03BFD2"
            iconStyle={{
              height: 55,
              width: 26,
              marginBottom:-20,
              marginRight: 5,
            }}
          />
        </View>
      </View>
      <View style={styles.titleContainerStyle}>
        <Text style={styles.titleStyle}>Clash Royale</Text>
        <Text style={styles.subTitleStyle}>
          Nunc venenatis pellentesque consequat. In dictum libero facilisis magna tincidunt, vitae gravida metus aliquam. In mollis luctus mauris, a tempor urna imperdiet id.
        </Text>
        <View style={{
          flexDirection: 'column',
          paddingTop: 10,
          flex: 1,
          justifyContent: 'space-between',
          height: 130,
        }}>
        <GradientButton colors={[ '#64c8d2', '#007dc5']} text="Forum" />
        <GradientButton colors={[ '#64c8d2', '#007dc5']} text="Cards" />
        <GradientButton colors={[ '#64c8d2', '#007dc5']} text="Guides" />
      </View>
    </View>
  </View>
    )
  }
}

const styles = {
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
    bottom: '7%',
    borderRadius: 30,
    borderColor: '#329CB2',
    borderWidth: 3,
  },

  subTitleStyle: {
    fontSize: 10,
      backgroundColor: 'transparent'
  },

  titleContainerStyle: {
    marginLeft: '15%',
    marginBottom: '55%',
    bottom: '5%',
    right: '8%',
    width: Dimensions.get('window').width * 0.85,
    marginTop: 30
  },

  titleStyle: {
    fontSize: 20,
      backgroundColor: 'transparent',
      fontWeight: 'bold'
  }
}

export { GameProfile };
