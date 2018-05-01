import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, SocialIcon, Icon, Header, ListItem } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

class Logo extends Component {
    render(){
        const list = [
            {
              title: 'Appointments',
              icon: 'av-timer'
            },
            {
              title: 'Trips',
              icon: 'flight-takeoff'
            },
            {
              title: 'account',
              icon: 'account-circle'
            },
            {
              title: 'transfer',
              icon: 'account-balance'
            },
            {
                title: 'add to cart',
                icon: 'add-shopping-cart'
            },
            {
                title: 'setting',
                icon: 'build'
            },
           ]
        return (
            <View>
                <ScrollView>    
                        <Header 
                        leftComponent={{icon:'menu', color:'#fff', onPress:()=> this.props.navigation.navigate('DrawerToggle')}} 
                        centerComponent={{text:'fino alla fine', style:{color:'#fff'} }}
                        rightComponent={{icon:'home', color:'#fff'}} />
               
                        <Icon reverse name='add-user' type='entypo' color='#517fa4' />
                        <SocialIcon type='facebook' />
                        <SocialIcon light type='instagram' />
                        <SocialIcon raised={false} type='linkedin' />
                        <SocialIcon light riaised={false} type='twitter' />    
                    <View>
                      {
                        list.map((item, i) => (
                        <ListItem key={i} title={item.title} leftIcon={{ name: item.icon }} />
                        ))
                      }
                    </View>
                </ScrollView>
            </View>
        )
    }
}
export default Logo;