import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import DATA from '../consts/data';

export default class Present extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Infos">
            <View >
                    {
                        DATA.map((adress, i) =>{
                            return (
                            <View key={i}>
                                <Text >{adress.groupeparent}</Text>
                                <Text >{adress.societe}</Text>
                                <Text >{adress.typeBatiment}</Text>
                                <Text >{adress.description}</Text>
                            </View>
                        )})
                    }    
                </View>
            
          </Tab>
          <Tab heading="Coordonées Responsables">
            
                <View>
                    {
                        DATA.map((adress, i) =>{
                            return (
                            <View key={i}>
                                <Text >{adress.prenom}</Text>
                                <Text >{adress.nom}</Text>
                                <Text >{adress.}</Text>
                            </View>
                        )})
                    }    
                </View>
            
          </Tab>
          <Tab heading="Coordonées Entreprise">
            
            <View>
                    {
                        DATA.map((adress, i) =>{
                            return (
                            <View key={i}>
                                <Text >{adress.tel}</Text>
                                <Text >{adress.ville}</Text>
                                <Text >{adress.rue}</Text>
                                <Text >{adress.societe}</Text>
                            </View>
                        )})
                    }    
                </View>
            
          </Tab>
        </Tabs>
      </Container>
    );
  }
}