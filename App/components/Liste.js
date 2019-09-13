import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail,  Left, Body, Right, Button } from 'native-base';
 

export default class Liste extends Component {
    constructor(props){
        super(props);

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
                                        this.props.adress.map((adress, i) =>{
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
                                                            <Button transparent>
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
        
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}


/*
        
          
            
              
              
              
            
          
      
    );
  }
}*/