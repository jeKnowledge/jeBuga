import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../common';

const LogButton = ({ onPress }) => {
  const { textStyle, viewStyle, buttonStyle, buttonTextStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        Don't have an account?
      </Text>
      <Button textStyle={buttonTextStyle} buttonStyle={buttonStyle} onPress={onPress}>
        Signup
      </Button>
    </View>

  )
};

const styles = {
  viewStyle: {
    flexDirection: "row",
    marginTop: '2%',
  },

  textStyle: {
    fontSize: 15,
  },

  buttonStyle: {
    marginLeft: '1%'
  },

  buttonTextStyle: {
    fontSize: 15,
    fontWeight: 'bold',
  }
};

export { LogButton };
