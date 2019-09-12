import React, {Component} from 'react'; 
// import myDataset from '../consts/Classeur1.csv';
import {Text, View, TouchableHighlight, StyleSheet, Dimensions, Button, ScrollView, BackHandler, Alert} from 'react-native';
const csvFilePath='Classeur1.csv'
const csv=require('csvtojson')

export default class Router extends Component {
  
  constructor () {
    super();
    this.state = {
      page: false
    }
    this.getData()
  }

  getData() { 
    
  }


  render () {
   
    return (
      <View><Text>Hello</Text></View>
    )
  }
}



const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  
});