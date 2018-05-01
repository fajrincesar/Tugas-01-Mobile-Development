import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, ListItem, Button, Header } from 'react-native-elements';

class ContentCard extends Component {
   
    render(){
        const users = [
            {
               name: 'buffon',
               avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
            },
            {
                name: 'chiellini',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
             },
             {
                name: 'pjanic',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
             }
           ]
        
        return (
            <View>    
                    <Header 
                    leftComponent={{icon:'menu', color:'#fff', onPress:()=> this.props.navigation.navigate('DrawerToggle')}} 
                    centerComponent={{text:'fino alla fine', style:{color:'#fff'} }}
                    rightComponent={{icon:'home', color:'#fff'}} />
                <ScrollView>
                    <Card title='Hello Allianz Stadium' image={require('../images/j.jpg')}>
                        <Text style={{marginBottom: 10}}>
                            The idea with React Native Elements is more about component structure than actual design.
                        </Text>
                        <Button
                            icon={{name: 'home'}}
                            backgroundColor='#03A9F4'
                            fontFamily='Lato'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='VISIT NOW' />
                    </Card>
                    <Card containerStyle={{padding: 0}} >
                       {
                        users.map((user, index) => {
                        return (
                            <ListItem key={index} roundAvatar title={user.name} avatar={{uri:user.avatar}}/>
                            );
                        })
                       }
                    </Card>
                </ScrollView>
            </View>
        )
    }
}
export default ContentCard;