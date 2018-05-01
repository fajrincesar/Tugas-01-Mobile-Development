import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

class Head extends Component {
    render(){
        return (
            <View>    
                <Header 
                leftComponent={{icon:'menu', color:'#fff', onPress:()=> this.props.navigation.navigate('DrawerToggle')}} 
                centerComponent={{text:'fino alla fine', style:{color:'#fff'} }}
                rightComponent={{icon:'home', color:'#fff'}} />
            </View>
        )
    }
}
export default Head;