import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const TopBar = () => {
  return(
    <LinearGradient
      colors={['#0776B6', '#3BC0C1']}
      style={{
        width: Dimensions.get('window').width,
        height: '10%',
      }}
      start={{x: 0.0, y: 0.5}} end={{x:1, y:0.5}}
    />
  )
}

export { TopBar };
