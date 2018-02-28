import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MCIIcon from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';

const Bar = () => {
  return (
    <LinearGradient
      colors={['#007dc5', '#64c8d2']}
      style={{
        position: 'absolute',
        flex: 1,
        width: Dimensions.get('window').width,
        height: 81,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      start={{x: 0.0, y: 0.5}} end={{x: 1, y: 0.5}}
      locations={[0,0.475]}
    >
      <TouchableOpacity onPress={() => Actions.mainMenu()}>
        <MCIIcon name="home" size={50} color="white"
          style={{bottom: 8}}/>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export { Bar };
