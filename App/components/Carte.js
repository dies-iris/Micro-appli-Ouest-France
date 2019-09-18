import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MapView, {Marker, Callout} from 'react-native-maps'
import DATA from '../consts/data'
import { Button } from 'native-base';
import Popup from './Popup';
import Present from './Present';

export default class Carte extends Component {
  
  onRegionChangeComplete (e) {
    let {latitudeDelta, longitudeDelta} = e;
    calvados = []
    cotes_d_armor = []
    finistere = []
    ille_et_vilaine = []
    loire_atlantique = []
    maine_et_loire = []
    manche = []
    mayenne = []
    morbihan = []
    orne = []
    sarthe = []
    seine = []
    vendee = []
    for (i in DATA) {
      if ((DATA[i]["cp"]<15000) && (DATA[i]["cp"]>13999)) {
        calvados.push(DATA[i]["cp"]) 
      }
      if ((DATA[i]["cp"]<23000) && (DATA[i]["cp"]>21999)) {
        cotes_d_armor.push(DATA[i]["cp"]) 
      }
      if ((DATA[i]["cp"]<30000) && (DATA[i]["cp"]>28999)) {
        finistere.push(DATA[i]["cp"]) 
      }
      if ((DATA[i]["cp"]<36000) && (DATA[i]["cp"]>34999)) {
        ille_et_vilaine.push(DATA[i]["cp"]) 
      }
      if ((DATA[i]["cp"]<45000) && (DATA[i]["cp"]>43999)) {
        loire_atlantique.push(DATA[i]["cp"]) 
      }
      if ((DATA[i]["cp"]<50000) && (DATA[i]["cp"]>48999)) {
        maine_et_loire.push(DATA[i]["cp"]) 
      }
      if ((DATA[i]["cp"]<51000) && (DATA[i]["cp"]>49999)) {
        manche.push(DATA[i]["cp"]) 
      }
      if ((DATA[i]["cp"]<54000) && (DATA[i]["cp"]>52999)) {
        mayenne.push(DATA[i]["cp"]) 
      }
      if ((DATA[i]["cp"]<57000) && (DATA[i]["cp"]>55999)) {
        morbihan.push(DATA[i]["cp"]) 
      }
      if ((DATA[i]["cp"]<62000) && (DATA[i]["cp"]>60999)) {
        orne.push(DATA[i]["cp"]) 
      }
      if ((DATA[i]["cp"]<73000) && (DATA[i]["cp"]>71999)) {
        sarthe.push(DATA[i]["cp"]) 
      }
      if ((DATA[i]["cp"]<76000) && (DATA[i]["cp"]>74999)) {
        seine.push(DATA[i]["cp"]) 
      }
      if ((DATA[i]["cp"]<86000) && (DATA[i]["cp"]>84999)) {
        vendee.push(DATA[i]["cp"]) 
      }
    }
  }



  render() {
    
    return (
      <View style= {styles.container}>
        <MapView style={styles.map} minZoomLevel={3} onRegionChangeComplete={this.onRegionChangeComplete.bind(this)} tracksViewChanges={false} initialRegion={{latitude:48.235034, longitude:  -2.024200, latitudeDelta:5.5, longitudeDelta: 5.5}}>
          {
            this.props.markers.map((marker, i) => {
              return <Marker key={i} coordinate={{latitude:Number(marker.latitude), longitude:Number(marker.longitude)}}>
                <Callout>
                  <View style={styles.popup}>
                    
                  </View>
                </Callout>
              </Marker>
            })
          }

          
          
        </MapView>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  popup: {
    flex: 1,
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
  button: {
    flex: 1,
    backgroundColor: '#ff3d57',
    height: 50,
    width: 200,
  },
  
});

