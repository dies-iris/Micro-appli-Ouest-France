import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail,  Left, Body, Right, Button } from 'native-base';


export default class Liste extends Component {
    constructor(props){
        super(props);

    }

    render(){
       
        return(
            <ScrollView>
                <View style={{flex:1}}>
                    {
                        this.props.adress.map((adress, i) =>{
                            return (
                            <View key={i}>
                                <Text>{adress.societe}</Text>
                            </View>
                        )})
                    }    
                </View>
                
            </ScrollView>
        )
    }
}


