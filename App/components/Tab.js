import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import {View, Text, StyleSheet} from 'react-native';
import DATA from '../consts/data';

export default class Present extends Component {
  render() {
      let adress = this.props.adress;
    return (
      
        <Container>
          <Header hasTabs />
          <Tabs>
            <Tab heading="Infos">
              <View >           
                        
                              <View>
                                  <Text >{adress.groupeparent}</Text>
                                  <Text >{adress.societe}</Text>
                                  <Text >{adress.typeBatiment}</Text>
                                  <Text >{adress.description}</Text>
                              </View>
                        
                        
                  </View>
              
            </Tab>
            <Tab heading="Coordonées Responsables">
              
                  <View>
                      
                              <View>
                                  <Text >{adress.prenom}</Text>
                                  <Text >{adress.nom}</Text>
                                  {/* <Text >{adress.}</Text> */}
                              </View>
                        
                  </View>
              
            </Tab>
            <Tab heading="Coordonées Entreprise">
              
              <View>
                    
                              <View>
                                  <Text >{adress.tel}</Text>
                                  <Text >{adress.ville}</Text>
                                  <Text >{adress.rue}</Text>
                                  <Text >{adress.societe}</Text>
                              </View>
                        
                  </View>
              
            </Tab>
          </Tabs>
        </Container>
      
      
    );
  }
}

const style = StyleSheet {
  
}