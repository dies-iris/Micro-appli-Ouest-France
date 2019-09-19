import React, {Component} from 'react';
import {View, Text, ScrollView, Image, Modal, TouchableHighlight} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail,  Left, Body, Right, Button, Card, CardItem  } from 'native-base';
import Present from './Present';
import DATA from '../consts/data';
import Bubble from './Bubble';

export default class Liste extends Component {
    constructor(props){
        super(props);
        this.state = {
            // Present: false,
            modalVisible : false,
            info: null
        };
        // this.tableau = this.tableau.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    // tableau(adresse) {
    //     let {Present} = this.state
    //     this.setState(
    //         {
    //             Present: (Present) ? false : true,
    //             adresse: adresse
    //         }
    //     )
    // }

    showModal (index){
        this.setState({
            modalVisible: true,
            info: index
        })
    }

    hideModal (){
        this.setState({
            modalVisible: false
        })
    }

    render(){
       
        return(
            <Container>
                <ScrollView>
                    <Content contentContainerStyle={{flex:1, alignContent:"center"}}>
                        <View style={{
                        flex:1, 
                        flexWrap: "wrap", 
                        flexDirection: "row", 
                        justifyContent: "center",
                        marginBottom : 80,
                        marginTop : 40,
                        marginLeft : 20,
                        marginRight : 20}}>
                            {
                                this.props.adresses.map((adresse, i) =>{
                                    return (
                                        <TouchableHighlight key={i} onPress={() => this.showModal(adresse)}>
                                            <Card style={{width: 200, 
                                            marginBottom : 10,
                                            marginTop : 10,
                                            marginLeft : 10,
                                            marginRight : 10,}}
                                            >
                                            
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
                                            
                                                <Text style={{fontWeight:"bold"}}>{adresse.societe}</Text>
                                                <Text>{adresse.typeBatiment}</Text>
                                                <Text>{adresse.ville}</Text>
    {/*                                                     
                                                <Right>
                                                    <Button transparent onPress={() => this.tableau(adresse)} >
                                                        <Text>Voir plus</Text>
                                                    </Button>
                                                </Right> */}
                                            </CardItem>
                                        </Card></TouchableHighlight>
                                    )
                                })
                            } 
                            </View>    
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          >
          <View style={{
              flex:1,
              marginTop: 60,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.7)"
              }}>
            <View style={{
                width: "50%",
                height: "50%",
                backgroundColor: "white",
                paddingHorizontal: 20,
                paddingVertical: 20
            }}>
              <Bubble marker={this.state.info} hide={this.hideModal} fermer={true}/>
              
            </View>
          </View>
        </Modal>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}