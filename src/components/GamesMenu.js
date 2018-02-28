import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { TopBar, GameLabel } from './common';
import { Dimensions } from 'react-native';

class GamesMenu extends Component {
  render() {
    return(
      <View style={{flex: 1}}>
        <TopBar/>
        <ScrollView>
          <View style={ styles.cardStyle}>
            <GameLabel/>
            <GameLabel/>
            <GameLabel/>
            <GameLabel/>
            <GameLabel/>
            <GameLabel/>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  cardStyle: {
    backgroundColor:'transparent',
    elevation: 1,
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '20%',
    marginRight: '20%',
    paddingBottom: 80
  }
}

export { GamesMenu };
