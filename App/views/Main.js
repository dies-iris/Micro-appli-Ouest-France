import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet, Dimensions} from 'react-native';
import Liste from '../components/Liste';
import DATA from '../consts/data';
import Carte from '../components/Carte';
import Filtres from '../components/Filtres';
import Prensent from '../components/Tab';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            carte : false,
            adresses : DATA
        }
        this.changeContext = this.changeContext.bind(this);
        this.filterByGroup = this.filterByGroup.bind(this);
        this.filterByActivity = this.filterByActivity.bind(this);
    }

    changeContext(){
        this.setState(prevState => ({
            carte: !prevState.carte
        }))
    }

    filterByGroup(societe){
        let adr = DATA.filter(adress => adress.groupeparent === societe);
        this.setState(prevState => ({
            adresses : adr
        }));
        console.warn(societe);
    }

    filterByActivity(activite){
        let adr = this.state.adresses.filter(adress => adress.typeBatiment == activite);
        this.setState(prevState => ({
            adresses : adr
        }));
        console.warn(activite);
    }

    render(){
        return(
            <View>
                <View>
                    <TouchableHighlight onPress={this.changeContext}>
                        <Text>Carte</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <TouchableHighlight onPress={this.changeContext}>
                    <Text>Liste</Text>
                    </TouchableHighlight>
                </View>
                <Filtres filterByGroup={this.filterByGroup} filterByActivity={this.filterByActivity}/>
                <View style={styles.container}>
                {
                    this.state.carte ?
                    
                    null
                    
                    :
                    <Liste adresses={this.state.adresses} style={{flex:1}}/>
                }
                </View>
            </View>
        )
    }
}

const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create({
    container : {
        width: width,
        height : height
    },

})