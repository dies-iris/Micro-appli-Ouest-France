import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet, Dimensions} from 'react-native';
import Liste from '../components/Liste';
import DATA from '../consts/data';
import Carte from '../components/Carte';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            carte : false
        }
        this.changeContext = this.changeContext.bind(this);
    }

    changeContext(){
        this.setState(prevState => ({
            carte: !prevState.carte
        }))
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
                <View style={styles.container}>
                {
                    this.state.carte ?
                    
                    <Carte/>
                    
                    :
                    <Liste adresses={DATA} style={{flex:1}}/>
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