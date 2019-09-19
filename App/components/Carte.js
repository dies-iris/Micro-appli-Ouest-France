import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground, Modal  } from 'react-native'
import MapView, {Marker, Callout} from 'react-native-maps'
import DATA from '../consts/data'
import { Icon, Card, CardItem, Spinner, } from 'native-base';
import Bubble from './Bubble';

export default class Carte extends Component {
  constructor(props){
    super(props);
    this.state={
      ficheOuverte: false,
      mapLoading : true
    }
    
  }
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

  onCalloutPress(marker){
    this.setState({ficheOuverte: marker})
  }

  mapReady(){
    this.setState({
      mapLoading : false
    })
  }

  render() {
    
    return (
      <View style= {styles.container}>
        <MapView style={styles.map} 
        minZoomLevel={3} 
        onMapReady={this.mapReady.bind(this)} 
        onRegionChangeComplete={this.onRegionChangeComplete.bind(this)} 
        tracksViewChanges={false} 
        initialRegion={{latitude:48.235034, longitude:  -2.024200, latitudeDelta:5.5, longitudeDelta: 5.5}}>
          {
            this.props.markers.map((marker, i) => {
              return <Marker key={i} coordinate={{latitude:Number(marker.latitude), longitude:Number(marker.longitude)}}>
                <Callout style={{flex: 1, position: "absolute"}}>
                 <Bubble marker={marker} map={true}/>
                </Callout>
              </Marker>
            })
          }

          
          
        </MapView>
        {
          (this.state.mapLoading) &&
            <Modal
            animationType="none"
            transparent={true}
            visible={this.state.modalVisible}
            >
            <View style={{
                flex:1,
                marginTop: 60,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.7)"
                }}>
              <Spinner color="red"/>
              
            </View>
          </Modal>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  popup: {
    flex: 1,
    width: 300
  },
  container: {
      ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  button: {
    flex: 1,
    backgroundColor: '#ff3d57',
    height: 50,
    width: 200,
  },
  text : {
    paddingVertical: 10
  }
  
});

