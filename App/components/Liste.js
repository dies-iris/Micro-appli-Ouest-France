import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail,  Left, Body, Right, Button } from 'native-base';
import Present from './Present';
import DATA from '../consts/data';

export default class Liste extends Component {
    constructor(props){
        super(props);
        this.state = {isPresent: false};
        this.tableau = this.tableau.bind(this);
    }

    tableau(adresses) {
        let {isPresent} = this.state
        this.setState(
            {
                isPresent: true,
                adresses: adresses
            }
        )
    }

    closeTab () {
        this.setState(
            {
                isPresent: false,
            }
        )
    }
    render(){
        return(
            <Container>
                <ScrollView>
                    <Content>
                        <List>
                            
                                <View style={{flex:1}}>
                                    {
                                        this.props.adresses.map((adresse, i) =>{
                                            return (
                                                <View key={i} >
                                                    <ListItem thumbnail  >
                                                        <TouchableOpacity onPress={() => this.tableau(adresse)} style={styles.listStyle} >
                                                            <Left>
                                                                <Thumbnail square source={
                                                                    adresse.logo
                                                                } style = {{
                                                                    width: 60,
                                                                    height: 30,
                                                                    resizeMode: 'contain'
                                                                }}/>
                                                            </Left> 
                                                            <Body>
                                                                <Text>{adresse.societe}</Text>
                                                                <Text note numberOfLines={1}>{adresse.ville}  {adresse.typeBatiment}</Text>
                                                            </Body>
                                                            <Right>
                                                                <Button transparent >
                                                                    <Text>Voir</Text>
                                                                </Button> 
                                                            </Right>
                                                         </TouchableOpacity>  
                                                    </ListItem>
                                
                                                </View>
                                            )
                                        })
                                    } 
                                 </View>    
                           
                        </List>
                    </Content>
                </ScrollView>
                {
                    (this.state.isPresent) &&
                    <Present adresses={this.state.adresses} press={this.closeTab.bind(this)} />
                }

            </Container>
        )
    }
}
const styles = StyleSheet.create({
    listStyle:{
        flex:1,
        flexDirection: 'row',
    },

   
    head:{
      height:100,
    }
  })