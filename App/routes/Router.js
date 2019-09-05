import React, {Component} from 'react'; 
import myDataset from '../consts/Classeur1.csv';
import {Text, View, TouchableHighlight, StyleSheet, Dimensions, Button, ScrollView, BackHandler, Alert} from 'react-native';
import Papa from 'papaparse';
var RNFS = require('react-native-fs');
var mainBundlePath = RNFS.DocumentDirectoryPath;
var path = '/consts/Classeur1.csv';



export default class Router extends Component {
  
  constructor () {
    super();
    this.state = {
      page: false
    }
    this.getData()
  }

  getData() {
    let t = this;
    console.warn('toto')
    // BackHandler.addEventListener('hardwareBackPress', () => {
    //   if (t.state.page) {
    //     t.setState({page: false});
    //     return true;
    //   }

    RNFS.readDir(mainBundlePath+path)
  .then((result) => {
    console.warn('GOT RESULT', result);
  })
    Papa.parse(myDataset, {
      // download: true,
      delimiter: ';',
      header : true,
      complete: function(results) {
          console.warn(results);
      }
    });
  }


  render () {
    const keys = [
      'societe',	
      'rue',
      'code',
      'postal',
      'ville',
      'latitude',
      'longitude',
      'type_batiment',
      'photo_bâtiment',
      'nom_groupe',
      'nom_responsable',
      'prénom_responsable',
      'photo_responsable',
      'description'


    ]
    return (
      <View><Text>Hello</Text></View>
    )
  }
}



const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  
});