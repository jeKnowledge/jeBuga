import React from 'react';
import { Dimensions } from 'react-native';
import { Image } from 'react-native';

const GameLogo = ({ style, image }) => {
  return (
    <Image
      source={ image }
      style={ style }
    />
  );
};

export { GameLogo };
