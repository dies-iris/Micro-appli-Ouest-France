import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Liste extends Component {
    constructor(props){
        super(props);

    }

    render(){
       
        return(
            <View style={{flex:1}}>
                {
                    this.props.adresses.map((adress, i) =>{
                        return <Text key={i}>{adress.societe}</Text>
                    })
                }    
            </View>
            
        )
    }
}