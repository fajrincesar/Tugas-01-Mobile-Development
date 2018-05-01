import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Head from './compont/Head';
import Logo from './compont/Logo';
import ContentCard from './compont/ContentCard';
import Ads from './compont/Ads';
import Rates from './compont/Rates';
import Anime from './compont/Anime';


const Navigator = DrawerNavigator(
  {
    Home: {screen: Ads},
    Content: {screen: ContentCard},
    Akun: {screen: Logo },
    Rating: {screen: Rates},
    Animation: {screen: Anime},
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
componentWillMount(){
  console.disableYellowBox = true;
}
  render() {
    return <Navigator />;
  }
}

