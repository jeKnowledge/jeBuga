import React, { Component } from 'react';
import {
  TouchableOpacity,
  Dimensions,
  Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class GradientButton extends Component {

  render() {
    const { children, onPress, colors, text, style } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          start={{x: 0.0, y: 0.5}} end={{x: 1, y: 0.5}}
          colors={colors}
          style={[styles.linearGradient, style]}>
          <Text style={styles.buttonText}>
            {text}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

var styles = {
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    height: 35,
    //width: 300,
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
}

export { GradientButton };
