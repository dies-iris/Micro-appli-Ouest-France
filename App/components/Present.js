import React, {Component} from 'react';
import {Container, Header,
  Content, Tab,
  Tabs, Icon,
  Right, Button,
  Card} from 'native-base';
import {View, Text,
  StyleSheet, Image} from 'react-native';
import DATA from '../consts/data';

export default class Present extends Component { 
  constructor(props){
    super(props);
    // this.state={}
  }
  
  render() {
    let adresse = this.props.adresse;
  
    return (

      <Container style={styles.centre}>
         <Card style={styles.card}> 
          <Header hasTabs style={styles.head}>
            <Right>
              <Button icon rounded bordered danger tapToClose={true} style={styles.close}>
                 <Icon name='close'/> 
              </Button>
        </Right>
          </Header> 
          <Tabs >
            <Tab heading = "Infos" >
                <View style={styles.text} >
                  <Image source = {adresse.logo} style = {{
                    width: 200,
                    height: 100,
                    resizeMode: 'contain'
                  }}/> 
                  <Text >{adresse.groupeparent}</Text> 
                  <Text>{adresse.societe}</Text> 
                  <Text>{adresse.typeBatiment}</Text>
                  <Text>{adresse.description}</Text>
                </View>
            </Tab>
            <Tab heading = "Coordonnées Responsable">
              <View style={styles.text} >
                <Text>{adresse.photo}</Text>
                <Text>{adresse.prenom}</Text>
                <Text>{adresse.nom}</Text> 
                
              </View>
            </Tab>
            <Tab heading = "Coordonnées Entreprise">
              <View style={styles.text}>
                <Text>{adresse.tel}</Text>
                <Text>{adresse.ville}</Text>
                <Text>{adresse.rue}</Text>
                <Text>{adresse.societe}</Text>
                <Text>{adresse.cp}</Text>
              </View>
            </Tab>
          </Tabs>
        </Card>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Tab: {
    height: 400,
    width: 400,
    
  },
  card: {
    height: 600,
    width: 600,
    margin: 150,
  },
  close: {
    height: 60,
    width: 60,
    
  },
  text:{
    textAlign:'center',
    alignItems: 'center',
  
  }, 
  centre: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  head:{
    height:100,
  }
})