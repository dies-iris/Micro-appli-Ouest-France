import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import { Icon} from 'native-base';


export default class Bubble extends React.Component {

  render() {
    let {marker}=this.props;
    return(
      <View style={{flex : 1}}>
        {
          (this.props.map === true) ?
          <View style={{paddingVertical:20, paddingHorizontal:20}}>
            <View style={{paddingBottom: 20}}>
              <Text style={{fontWeight:"bold"}}>{marker.societe.toUpperCase()}</Text> 
              <Text >{marker.typeBatiment}</Text>
            </View>
            <View style={{flexDirection : "row", justifyContent: "flex-start", alignItems:"center"}}>
              <Icon type="AntDesign" name="enviromento"/>
              <View style={{paddingLeft: 10}}>
                <Text >{marker.rue}</Text>
                <Text >{marker.cp} {marker.ville}</Text>
              </View>
            </View>
            <Text style={styles.text}><Icon type="AntDesign" name="user"/> {marker.prenom} {marker.nom}</Text>
            <Text style={styles.text}><Icon type="AntDesign" name="phone"/> {marker.tel}</Text>
          </View>
        :
        <View style={{flex: 1}}>
        <ScrollView>
        <View style={{paddingVertical:20, paddingHorizontal:20}}>
        <View style={{flexDirection : "row", justifyContent: "center", alignItems: "center"}}>
            <Image source = {marker.logo} resizeMode='contain' style = {{
              width: 200,
              height: 200,
              resizeMode: "contain"
            }}/> 
          <View style={{paddingBottom: 20, paddingLeft: 10}}>
            <Text style={{fontWeight:"bold"}}>{marker.societe.toUpperCase()}</Text> 
            <Text >{marker.typeBatiment}</Text>
          </View>
        </View>
        <View style={{flexDirection : "row", justifyContent: "center", alignItems:"center"}}>
          <Icon type="AntDesign" name="enviromento"/>
          <View style={{paddingLeft: 10}}>
            <Text >{marker.rue}</Text>
            <Text >{marker.cp} {marker.ville}</Text>
          </View>
        </View>
        <Text style={styles.text}>{marker.description}</Text> 
                          
        <View style={{flexDirection : "row", justifyContent: "center", alignItems:"center"}}>
          <Image source={require('../images/anonyme.jpg')} style={{width: 100, height: 200, resizeMode: "contain"}}/>
          <View style={{paddingLeft: 10}}>
            <Text style={styles.text}><Icon type="AntDesign" name="user"/> {marker.prenom} {marker.nom}</Text>
            <Text style={styles.text}><Icon type="AntDesign" name="phone"/> {marker.tel}</Text>
          </View>
        </View>
        
        </View>
        </ScrollView>
        {
          (this.props.fermer)&&
          <TouchableOpacity onPress={() => this.props.hide()} style={styles.fermer}>
            <Text style={styles.fermerText}>FERMER</Text>
          </TouchableOpacity>
        }
        </View>
      }
    </View>
    )
  }
}

const styles = StyleSheet.create({
  
  text : {
    paddingVertical: 10,
  },
  fermer : {
    // borderTopColor:"#CECECE", 
    // borderTopWidth : 2,
    backgroundColor: "#CECECE",
    borderBottomLeftRadius : 40,
    borderBottomRightRadius : 40,
    height: 40, 
    width:"100%", 
    justifyContent: "center", 
    alignItems: "center"
    },
    fermerText : {
      color:"#FFFFFF", 
      textAlign: "center",
    },
  
});

