import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { Icon} from 'native-base';


export default class Bubble extends React.Component {

  render() {
    let {marker}=this.props;
    return(
      <View style={{flex : 1}}>
        <View style={{flexDirection : "row"}}>
          {
            (this.props.map === true) ?
            <Text style = {{
              width: 200,
              height: 100,
            }}>
                <Image source = {marker.logo} resizeMode='cover' style = {{
                  width: 200,
                  height: 100,
                  resizeMode: "cover"
                }}/>
            </Text>
            :
            <Image source = {marker.logo} resizeMode='contain' style = {{
              width: 200,
              height: 100,
              resizeMode: "contain"
            }}/> 
          }
          <View >
            <Text style={{fontWeight:"bold"}}>{marker.societe}</Text> 
            <Text >{marker.typeBatiment}</Text>
          </View>
        </View>
        <View>
          <Icon type="AntDesign" name="enviromento"/>
          <Text style={styles.text}>{marker.rue}</Text>
          <Text style={styles.text}>{marker.cp} {marker.ville}</Text>
        </View>
        {
          (marker.description !== "") &&
          <Text style={styles.text}>{marker.description}</Text> 
        }
                          
        <Text style={styles.text}><Icon type="AntDesign" name="user"/> {marker.prenom} {marker.nom}</Text>
        {
          (marker.tel !== "") &&
          <Text style={styles.text}><Icon type="AntDesign" name="phone"/> {marker.tel}</Text>
        }
        {
          (this.props.fermer)&&
          <TouchableOpacity onPress={() => this.props.hide()} 
          style={{
            backgroundColor:"#CECECE", 
            height: 40, 
            width:"100%", 
            justifyContent: "center", 
            alignItems: "center"
            }}>
            <Text style={{color:"#FFFFFF", flex: 1, textAlign: "center"}}>Fermer</Text>
          </TouchableOpacity>
        }
    </View>
    )
  }
}

const styles = StyleSheet.create({
  
  text : {
    paddingVertical: 10
  }
  
});

