import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
  return(
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    borderWidth: 1,
    position: 'relative',
    height: 55,
    width: 50
  }
}
export { CardSection };
