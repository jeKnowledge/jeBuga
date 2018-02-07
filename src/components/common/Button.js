import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  )
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textStyle: {
    color: '#2489a0',
    //color: 'transparent',
    fontSize: 22,
      //lineHeight: 55 * 0.75,
      //paddingTop: 55 - (55 * 0.75),
    backgroundColor: 'transparent'
  }
};

export { Button };
