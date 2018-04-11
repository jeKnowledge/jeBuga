import React, { Component } from 'react';
import { View, Dimensions, Image, Text } from 'react-native';
import { ForumPost } from '../components'

class Forum extends Component {
  render() {
    return (
      <View>
        <ForumPost/>
        <ForumPost/>
      </View>
    )
  }
}

export { Forum };
