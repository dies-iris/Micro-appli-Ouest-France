import React, {Component} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import { Container, Content, Card, CardItem, Icon } from 'native-base';

export default class Liste extends Component {
    constructor(props){
        super(props);
        
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
                                        <TouchableOpacity key={i} onPress={() => this.props.info(adresse)}>
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
                                                <Text><Icon type="AntDesign" name="enviromento" style={{fontSize: 16}}/>{adresse.ville}</Text>

                                            </CardItem>
                                        </Card></TouchableOpacity>
                                    )
                                })
                            } 
                            </View>    
        
        
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}
