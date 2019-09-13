import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MapView, {Marker, Callout} from 'react-native-maps'
import DATA from '../consts/data'
import { Button } from 'native-base';
import Popup from './Popup';
import Present from './Present';

export default class Carte extends Component {
  constructor(props){
    super(props);
    this.state={
      ficheOuverte: false,

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

    
    
    

    // console.warn("calvados : "+calvados)
    // console.warn("cotes_d_armor : "+cotes_d_armor)
    // console.warn("finistere : "+finistere)
    // console.warn("ille_et_vilaine : "+ille_et_vilaine)
    // console.warn("loire_atlantique : "+loire_atlantique)
    // console.warn("maine_et_loire : "+maine_et_loire)
    // console.warn("manche : "+manche)
    // console.warn("mayenne : "+mayenne)
    // console.warn("morbihan : "+morbihan)
    // console.warn("orne : "+orne)
    // console.warn("sarthe : "+sarthe)
    // console.warn("seine : "+seine)
    // console.warn("vendee : "+vendee)

  }

  popup (e) {
  }

  onCalloutPress(marker){
    this.setState({ficheOuverte: marker})
  }

  render() {
    
    return (
      <View style= {styles.container}>
        <MapView style={styles.map} minZoomLevel={7.5} onRegionChangeComplete={this.onRegionChangeComplete.bind(this)} tracksViewChanges={false} initialRegion={{latitude:48.235034, longitude:  -2.024200, latitudeDelta:5.5, longitudeDelta: 5.5}}>
          {
            this.props.markers.map((marker, i) => {
              return <Marker key={i} coordinate={{latitude:Number(marker.latitude), longitude:Number(marker.longitude)}}>
                <Callout onPress={()=> this.onCalloutPress(marker)}>
                  <View style={styles.popup}>
                    <Text>{marker.societe}</Text>
                    <Text>{marker.rue}</Text>
                    <Text>{marker.ville}</Text>
                    <Text>{marker.cp}</Text>
                  </View>
                </Callout>
              </Marker>
            })
          }

          
          
        </MapView>
        {
          this.state.ficheOuverte && 
          <Present adresse={this.state.ficheOuverte}/>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  popup: {
    flex: 1,
    // width: 90,
    height: 90,
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
  }
});

