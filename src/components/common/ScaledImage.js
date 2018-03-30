import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';

const ScaledImage = ({ source, parentHeight }) => {
  return (
    <Image source={source} style= {{ width: Dimensions.get('window').width, height: parentHeight}} />
  )
}

export { ScaledImage };
