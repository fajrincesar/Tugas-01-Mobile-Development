import React, { Component } from 'react';
import { View } from 'react-native';
import { Tile, Header } from 'react-native-elements';


class Ads extends Component {
    render(){
        return (
            <View>    
                <Header 
                    leftComponent={{icon:'menu', color:'#fff', onPress:()=> this.props.navigation.navigate('DrawerToggle')}} 
                    centerComponent={{text:'fino alla fine', style:{color:'#fff'} }}
                    rightComponent={{icon:'home', color:'#fff'}} />
                <Tile
                    imageSrc={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6CO4WLDHbe0plMqRyx-NTKe18ISLrI46CwUeWDiSY4OzLCbg' }}
                    title=""
                    featured
                    caption="world is about black n' white"/>
               
            </View>
        )
    }
}
export default Ads;