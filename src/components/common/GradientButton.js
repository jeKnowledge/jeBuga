import React, { Component } from 'react';
import {
  TouchableOpacity,
  Dimensions,
  Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class GradientButton extends Component {

  render() {
    const { style, children, onPress, colors, text } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          start={{x: 0.0, y: 0.5}} end={{x: 1, y: 0.5}}    
          locations={[0.5,1]}
          colors={colors}
          style={style}>
          <Text style={styles.buttonText}>
            {text}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

var styles = {
  
  buttonText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
}

export { GradientButton };
