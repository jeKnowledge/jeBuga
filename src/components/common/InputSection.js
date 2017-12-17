import React from 'react';
import { View } from 'react-native';

const InputSection = (props) => {
  return(
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    borderRadius: 10,
    marginTop: '1%',
    position: 'relative'
  }
}
export { InputSection };
