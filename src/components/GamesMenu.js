import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { TopBar, GameLabel } from './common';
import { Dimensions } from 'react-native';

class GamesMenu extends Component {

  render() {
     
    const { cardStyle } = styles;

    return(
      <View style={{flex: 1}}>
        <TopBar/>
        <ScrollView>
          <View style={ cardStyle }>
            <GameLabel 
              text="Clash Royal" 
              image={ require('../assets/images/clashclanslogo.png') }
            />
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
