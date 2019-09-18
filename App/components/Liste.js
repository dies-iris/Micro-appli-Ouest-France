import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail,  Left, Body, Right, Button, Card, CardItem  } from 'native-base';
import Present from './Present';
import DATA from '../consts/data';

export default class Liste extends Component {
    constructor(props){
        super(props);
        this.state = {Present: false};
        this.tableau = this.tableau.bind(this);
    }

    tableau(adresse) {
        let {Present} = this.state
        this.setState(
            {
                Present: (Present) ? false : true,
                adresse: adresse
            }
        )
    }
    render(){
       
        return(
            <Container>
                <ScrollView>
                    <Content contentContainerStyle={{justifyContent:"center"}}>
                        {/* <List> */}
{/*                             
                                <View style={{flex:1}}>
                                    {
                                        this.props.adressees.map((adresse, i) =>{
                                            return (
                                                <View key={i}>
                                                    <ListItem thumbnail>
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
                                                            <Button transparent onPress={() => this.tableau(adresse)} >
                                                                <Text>Voir</Text>
                                                            </Button>
                                                        </Right>
                                                    
                                                    </ListItem>   
                                
                                                </View>
                                            )
                                        })
                                    } 
                                 </View> 
                                 </List>    */}
                                <View style={{flex:1, flexWrap: "wrap", flexDirection: "row",           marginBottom : 80,
        marginTop : 40,
        marginLeft : 20,
        marginRight : 20,}}>
                                    {
                                        this.props.adresses.map((adresse, i) =>{
                                            return (
                                                <Card style={{width: 200, marginBottom : 10,
                                                    marginTop : 10,
                                                    marginLeft : 10,
                                                    marginRight : 10,}}>
                                                    <CardItem cardBody style={{paddingHorizontal:10}}>
                                                            <Image source={
                                                                adresse.logo
                                                            } style = {{
                                                                width: 180,
                                                                height: 100,
                                                                resizeMode: 'contain'
                                                            }}/>
                                                     </CardItem>   
                                                    <CardItem style={{flexDirection: "column"}}>
                                                    
                                                        <Text>{adresse.societe}</Text>
                                                        <Text note numberOfLines={1}>{adresse.ville}  {adresse.typeBatiment}</Text>
                                                    
                                                        <Right>
                                                            <Button transparent onPress={() => this.tableau(adresse)} >
                                                                <Text>Voir plus</Text>
                                                            </Button>
                                                        </Right>
                                                    </CardItem>
                                                </Card>
                                            )
                                        })
                                    } 
                                 </View>    
                           
                        
                                    {
                                        (this.state.Present) &&
                                        <Present adresse={this.state.adresse}/>
                                    }
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}