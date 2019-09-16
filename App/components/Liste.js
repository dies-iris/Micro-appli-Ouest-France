import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail,  Left, Body, Right, Button } from 'native-base';
import Present from './Tab';
import DATA from '../consts/data';

export default class Liste extends Component {
    constructor(props){
        super(props);
        this.state = {Present: false};
        this.tableau = this.tableau.bind(this);
    }

    tableau(adress) {
        let {Present} = this.state
        this.setState(
            {
                Present: (Present) ? false : true,
                adress: adress
            }
        )
    }
    render(){
       
        return(
            <Container>
                <ScrollView>
                    <Content>
                        <Header />
                        <List>
                            
                                <View style={{flex:1}}>
                                    {
                                        this.props.adresses.map((adress, i) =>{
                                            return (
                                                <View key={i}>
                                                    <ListItem thumbnail>
                                                        <Left>
                                                            <Thumbnail square source={
                                                                adress.logo
                                                            } style = {{
                                                                width: 60,
                                                                height: 30,
                                                                resizeMode: 'contain'
                                                            }}/>
                                                        </Left> 
                                                    <Body>
                                                    
                                                        <Text>{adress.societe}</Text>
                                                        <Text note numberOfLines={1}>{adress.ville}  {adress.typeBatiment}</Text>
                                                    </Body>
                                                        <Right>
                                                            <Button transparent onPress={() => this.tableau(adress)} >
                                                                <Text>Voir</Text>
                                                            </Button>
                                                        </Right>
                                                    
                                                    </ListItem>   
                                
                                                </View>
                                            )
                                        })
                                    } 
                                 </View>    
                           
                        </List>
                                    {
                                        (this.state.Present) &&
                                        <Present adress={this.state.adress}/>
                                    }
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}