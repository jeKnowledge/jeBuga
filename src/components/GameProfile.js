import React, { Component } from 'react';
import { View, Dimensions, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TopBar, GradientButton } from './common';

class GameProfile extends Component {
  render() {
    return(
      <View style={{ position: 'absolute', alignItems: 'center' }}>
        <TopBar/>
        <Image
          source={require('../assets/images/clash_royale.jpg')}
          style={styles.imageStyle}
        />
        <Image
          source={require('../assets/images/clash_royale_thumbnail.png')}
          style={{
            backgroundColor: 'white',
            height: Dimensions.get('window').height * 0.17,
            width: Dimensions.get('window').width * 0.3,
            resizeMode: 'contain',
            bottom: '15%',
            borderRadius: 30,
            borderColor: '#329CB2',
            borderWidth: 3
          }}
        />
        <View style={styles.titleContainerStyle}>
          <Text style={styles.titleStyle}>Clash Royale</Text>
          <Text style={styles.subTitleStyle}>
            Nunc venenatis pellentesque consequat. In dictum libero facilisis magna tincidunt, vitae gravida metus aliquam. In mollis luctus mauris, a tempor urna imperdiet id.
          </Text>
          <GradientButton colors={[ '#3BC0C1', '#0776B6']} text="Forum" />
          <GradientButton colors={[ '#3BC0C1', '#0776B6']} text="Cards" />
          <GradientButton colors={[ '#3BC0C1', '#0776B6']} text="Guides" />
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
  subTitleStyle: {
    fontSize: 15,
      backgroundColor: 'transparent',
  },
  titleContainerStyle: {
    marginLeft: '15%',
    marginBottom: '55%',
    bottom: '10%',
    right: '8%',
    width: Dimensions.get('window').width * 0.85,
  },
  titleStyle: {
    fontSize: 30,
      backgroundColor: 'transparent',
      fontWeight: 'bold',
  },
}
export default GameProfile;
