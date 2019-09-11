import React, {Component} from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text } from 'native-base';
import {View, StyleSheet, Dimensions} from 'react-native';
import DATA from '../consts/data';

export default class Filtres extends Component {
    constructor(props){
        super(props);
        this.state = {
            societe : null,
            filterByGroup : null
        }
    }

    onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }

    filterByGroup(groupe){
        this.setState({
            societe : groupe
        })
        this.props.filterByGroup(groupe)
    }

    render(){
        const filiales = DATA.map(adress => adress.groupeparent);
        const uniqueFilial = filiales.filter(this.onlyUnique);
        const activites = DATA.map(adress => adress.typeBatiment);
        const uniqueActivite = activites.filter(this.onlyUnique);
        return(
            <View style={styles.main}>
                <View style={styles.fragment}>
                    <Body>
                        <Text>Filtres</Text>
                    </Body>
                    
                    <Right>
                        <Button transparent>
                        <Icon type="AntDesign" name="close" onPress={() => this.props.closeDrawer()}/>
                </Button>
                    </Right>
                    
                </View>
                <Text>Groupe</Text>
                <View style={styles.fragment}>
                    {
                        uniqueFilial.map((groupe, i) =>
                            <Button
                            ref={(ref) => { this.button[i] = ref; }} 
                            small 
                            rounded 
                            light
                            key={i} 
                            style={styles.tags} 
                            onPress={() => this.filterByGroup(groupe)}>
                                <Text>{groupe}</Text>
                            </Button> 
                            )
                    }
                </View>
                <Text>Activité</Text>
                <View style={styles.fragment}>
                    {
                        uniqueActivite.map((activite, i) =>
                            <Button small rounded warning key={i} style={styles.tags} onPress={() => this.props.filterByActivity(activite)}>
                                <Text>{activite}</Text>
                            </Button>
                        )
                    }
                </View>

            </View>

        )
    }
}

const styles=StyleSheet.create({
    main : {
        flex: 1,
        backgroundColor: "#F0F0F0"
    },

    fragment : {
        flexDirection : 'row', 
        flexWrap : "wrap"
        
    },

    tags : {
        marginBottom : 5,
        marginTop : 5,
        marginLeft : 5,
        marginRight : 5,
    },


})