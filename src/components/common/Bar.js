import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MCIIcon from 'react-native-vector-icons/Entypo';

const Bar = () => {
  return (
    <LinearGradient
      colors={['#0776B6', '#3BC0C1']}
      style={{
        position: 'absolute',
        flex: 1,
        width: Dimensions.get('window').width,
        height: 81,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      start={{x: 0.0, y: 0.5}} end={{x: 1, y: 0.5}}
    >
      <MCIIcon name="home" size={50} color="white"
        style={{bottom: 8}}/>
    </LinearGradient>
  );
};

export { Bar };
