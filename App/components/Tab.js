import React, {Component} from 'react';
import {Container, Header,
  Content, Tab,
  Tabs, Icon,
  Right, Button,
  Card} from 'native-base';
import {View, Text,
  StyleSheet, Image} from 'react-native';
import DATA from '../consts/data';

export default class Present extends Component() { 
  constructor(props){
    super(props);
    this.state={}
  }
  
  render() {
    let adress = this.props.adress;
  
    return (

      <Container style={styles.centre}>
         <Card style={styles.card}> 
          <Header hasTabs style={styles.head}>
            <Right>
              <Button icon rounded bordered danger style={styles.close}>
                <Icon name='close' />
              </Button>
        </Right>
          </Header> 
          <Tabs >
            <Tab heading = "Infos" >
                <View style={styles.text} >
                  <Image source = {adress.logo} style = {{
                    width: 200,
                    height: 100,
                    resizeMode: 'contain'
                  }}/> 
                  <Text >{adress.groupeparent}</Text> 
                  <Text>{adress.societe}</Text> 
                  <Text>{adress.typeBatiment}</Text>
                  <Text>{adress.description}</Text>
                </View>
            </Tab>
            <Tab heading = "Coordonnées Responsable">
              <View style={styles.text} >
                <Text>{adress.photo}</Text>
                <Text>{adress.prenom}</Text>
                <Text>{adress.nom}</Text> 
                
              </View>
            </Tab>
            <Tab heading = "Coordonnées Entreprise">
              <View style={styles.text}>
                <Text>{adress.tel}</Text>
                <Text>{adress.ville}</Text>
                <Text>{adress.rue}</Text>
                <Text>{adress.societe}</Text>
                <Text>{adress.cp}</Text>
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