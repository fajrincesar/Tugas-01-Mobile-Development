import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Header } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

export default class Anime extends Component {
    render(){
        return (
            <View>
                <Header 
                    leftComponent={{icon:'menu', color:'#fff', onPress:()=> this.props.navigation.navigate('DrawerToggle')}} 
                    centerComponent={{text:'fino alla fine', style:{color:'#fff'} }}
                    rightComponent={{icon:'home', color:'#fff'}} />
                <Animatable.Text animation="rubberBand" delay={3000} duration={1000} direction="normal" easing="ease-in"
                    iterationCount="infinite" style={{fontSize:50, textAlign:'center'}}>
                    <Image style={{width:1080, height:1080}}
                    source={require('../images/j.jpg')}/>                        
                </Animatable.Text>
            </View>
        );
    }
}