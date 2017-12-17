import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}  
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor:'transparent',
    elevation: 1,
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '1%',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export { Card };
