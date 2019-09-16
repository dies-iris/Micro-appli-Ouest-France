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
    let {adresses, press} = this.props;
  
    return (

      <Container style={styles.centre}>
         <Card style={styles.card}> 
          <Header hasTabs style={styles.head}>
            <Right>
              <Button icon rounded bordered danger onPress={() => (press) ? press() : null} style={styles.close}>
                <Icon name='close' />
              </Button>
        </Right>
          </Header> 
          <Tabs >
            <Tab heading = "Infos" >
                <View style={styles.text} >
                  <Image source={adresses.logo} style = {{
                    width: 200,
                    height: 100,
                    resizeMode: 'contain'
                  }}/> 
                  <Text >{adresses.groupeparent}</Text> 
                  <Text>{adresses.societe}</Text> 
                  <Text>{adresses.typeBatiment}</Text>
                  <Text>{adresses.description}</Text>
                </View>
            </Tab>
            <Tab heading = "Coordonnées Responsable">
              <View style={styles.text} >
                <Text>{adresses.photo}</Text>
                <Text>{adresses.prenom}</Text>
                <Text>{adresses.nom}</Text> 
                
              </View>
            </Tab>
            <Tab heading = "Coordonnées Entreprise">
              <View style={styles.text}>
                <Text>{adresses.tel}</Text>
                <Text>{adresses.ville}</Text>
                <Text>{adresses.rue}</Text>
                <Text>{adresses.societe}</Text>
                <Text>{adresses.cp}</Text>
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
    position:'absolute',
    top:0,
    left:0,
    width: '100%',
    height:'100%',
    backgroundColor: '#80808066' ,
  },
  head:{
    height:100,
  }
})