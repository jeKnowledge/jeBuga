import React from 'react';
import { View, Text, TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { GameLogo } from './GameLogo';

const GameLabel = ({style}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Actions.gameProfile()}>
      <View style={ styles.viewStyle }>
        <LinearGradient
          start={{x: 0.0, y: 0.5}} end={{x: 1, y: 0.5}}
          colors={[ '#64c8d2', '#007dc5']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>
            Clash Royal
          </Text>
        </LinearGradient>
        <GameLogo style={styles.logoStyle}/>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  viewStyle: {
    flexDirection: 'row',
    height: Dimensions.get('window').height * 0.14, 
    marginLeft: '7%',
    marginRight: '7%',
    marginTop: '10%',
    alignItems: 'center'
  },

  logoStyle: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height * 0.14,
    width: Dimensions.get('window').width * 0.25,
    resizeMode: 'contain',
    borderRadius: 30,
    borderColor: '#329CB2',
    borderWidth: 3,
    position: 'absolute'
  },

  linearGradient: {
    borderRadius: 30,
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'baseline'
  },

  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    color: '#ffffff',
    backgroundColor: 'transparent',
    marginLeft: 100
  }
};

export { GameLabel };
