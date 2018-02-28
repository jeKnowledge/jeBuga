import React from 'react';
import { Dimensions } from 'react-native';
import { Image } from 'react-native';

const GameLogo = ({style}) => {
  return (
    <Image
      source={require('../../assets/images/clashclanslogo.png')}
      style={style}
    />
  );
};

const styles = {
  logoStyle: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height * 0.17,
    width: Dimensions.get('window').width * 0.3,
    resizeMode: 'contain',
    bottom: '15%',
    borderRadius: 30,
    borderColor: '#329CB2',
    borderWidth: 3,
  }
};

export { GameLogo };
