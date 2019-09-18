import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Icon} from 'native-base';


export default class Bubble extends React.Component {

  render() {
    let {marker}=this.props;
    return(
      <View style={{flex : 1}}>
        <View style={{flexDirection : "row"}}>
          <Text><Image source = {marker.logo} resizeMode='contain' style = {{
            width: 200,
            height: 100,
            resizeMode: "contain"
          }}/></Text> 
          <View >
            <Text style={{fontWeight:"bold"}}>{marker.societe}</Text> 
            <Text >{marker.typeBatiment}</Text>
          </View>
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
        
        <Text style={styles.text}><Icon type="AntDesign" name="enviromento"/>{marker.rue} {marker.cp} {marker.ville}</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  
  text : {
    paddingVertical: 10
  }
  
});

