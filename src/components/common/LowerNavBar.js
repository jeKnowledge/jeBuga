import React from 'react';
import { View } from 'react-native';

const LowerNavBar = (props) => {
  return(
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
}

export { LowerNavBar };
