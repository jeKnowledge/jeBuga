import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const TopBar = () => {
  return(
    <LinearGradient
      colors={['#007dc5', '#64c8d2']}
      style={{
        width: Dimensions.get('window').width,
        height: '10%',
      }}
      start={{x: 0.0, y: 0.5}} end={{x:1, y:0.5}}
      locations={[0,0.475]}
    />
  )
}

export { TopBar };
