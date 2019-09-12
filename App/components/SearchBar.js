import React, {Component} from 'react';
import {Item, Icon, Input, Button, Text} from 'native-base';
import { View } from 'react-native';

export default class SearchBar extends Component {
    constructor(props){
        super(props);

    }

    render (){
        return(
            <View>
            <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
                <Icon name="ios-people" />
            </Item>
            <Button transparent>
                <Text>Rechercher</Text>
            </Button>
            </View>
        )
    }
}