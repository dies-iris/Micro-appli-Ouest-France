import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet, Dimensions} from 'react-native';
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

    render(){
        const filiales = DATA.map(adress => adress.groupeparent);
        const uniqueFilial = filiales.filter(this.onlyUnique);
        const activites = DATA.map(adress => adress.typeBatiment);
        const uniqueActivite = activites.filter(this.onlyUnique);
        return(
            <View>
                <View style={styles.main}>
                    {
                        uniqueFilial.map((groupe, i) =>
                            <TouchableHighlight key={i} style={{width:200}} onPress={() => this.props.filterByGroup(groupe)}>
                                <Text style={styles.tag}>{groupe}</Text>
                            </TouchableHighlight> 
                            )
                    }
                </View>
                <View>
                    {
                        uniqueActivite.map((activite, i) =>
                            <TouchableHighlight key={i} style={{width:200}} onPress={() => this.props.filterByActivity(activite)}>
                                <Text style={styles.tagActivite}>{activite}</Text>
                            </TouchableHighlight>
                        )
                    }
                </View>
            </View>

        )
    }
}

const styles=StyleSheet.create({
    main : {
        flexDirection : 'row', 
        flexWrap : "wrap"
    },
    tag : {
        backgroundColor : "red", 
        color : 'white', 
        borderRadius : 15, 
        textAlign : "center", 
        padding : 5, 
        margin : 10
    },
    tagActivite : {
        backgroundColor : "blue", 
        color : 'white', 
        borderRadius : 15, 
        textAlign : "center", 
        padding : 5, 
        margin : 10
    }
})