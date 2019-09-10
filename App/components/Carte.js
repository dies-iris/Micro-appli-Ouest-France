import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import DATA from '../consts/data'

export default class Carte extends Component {

  onRegionChangeComplete (e) {
    let {latitudeDelta, longitudeDelta} = e;
    if (latitudeDelta > 8 || longitudeDelta > 8) {
      
    } 
  }
  render() {
    return (
      <View style= {styles.container}>
        <MapView style={styles.map} onRegionChangeComplete={this.onRegionChangeComplete.bind(this)} tracksViewChanges={false} initialRegion={{latitude:48.235034, longitude:  -2.024200, latitudeDelta:5.5, longitudeDelta: 5.5}}>
          {
            this.props.markers.map((marker, i) => {
              // console.warn(marker.longitude)
              return <Marker key={i} coordinate={{latitude:Number(marker.latitude), longitude:Number(marker.longitude)}} />
            })
          }

          
          
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});