import React, {Component} from 'react';
import { Col, Grid, Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text } from 'native-base';
import {Animated, Easing, View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import DATA from '../consts/data';

export default class Filtres extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedSociete : null,
            selectedActivity : null,
            societes:[],
            activites:[],
            drawerOpen : true
        }
        this.rotateValue = new Animated.Value(0);
    }

    onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }

    onSelectGroup(groupe){
        this.setState({
            selectedSociete : groupe
        });
        this.filterByGroup();
    }

    filterByGroup(){
        this.setState(state => {
            const societes = state.societes.concat(state.selectedSociete);
            return {
              societes,
              selectedSociete: '',
            };
          });
        
        this.props.filterByGroup(this.state.societes);
    }
    
    onSelectActivity(activite){
        this.setState({
            selectedActivity : activite
        })
        this.filterByActivity();
    }

    filterByActivity(){
        this.setState(state => {
            const activites = state.activites.concat(state.selectedActivity);
            return {
              activites,
              selectedActivity: '',
            };
          });
        
        this.props.filterByActivity(this.state.activites);
    }

    reset(){
        this.setState({
            selectedSociete : null,
            selectedActivity : null,
            societes: [],
            activites: []
        });
        this.props.reset();
    }

    toggleDrawer(){
        if(this.state.drawerOpen){
            this.props.openDrawer();
            Animated.timing(this.rotateValue, {
                toValue: 0,
                duration: 350,
                easing: Easing.linear
              }).start();
            this.setState({
                drawerOpen: false
            })
        } else {
            this.props.closeDrawer();
            Animated.timing(this.rotateValue, {
                toValue: 1,
                duration: 350,
                easing: Easing.linear
              }).start();
            this.setState({
                drawerOpen: true
            })
        }
    }

    render(){
        console.warn(this.state.selectedActivity)
        const { icon, onPress, data } = this.props;

      let rotation = this.rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "180deg"] // degree of rotation
      });
      let transformStyle = { transform: [{ rotate: rotation }] };

        const filiales = DATA.map(adress => adress.groupeparent);
        const uniqueFilial = filiales.filter(this.onlyUnique);
        const activites = DATA.map(adress => adress.typeBatiment);
        const uniqueActivite = activites.filter(this.onlyUnique);
        return(
            <Container style={{flex:1, backgroundColor: "#F0F0F0"}}>
                <Text style={{textAlign:"center", paddingVertical : 20, fontSize: 24}}>Filtres</Text>
                    <Grid >
                    <Col style={{width:40}}>
                        <TouchableOpacity style={{flex:1, justifyContent:"center", alignItems:"center"}} onPress={this.toggleDrawer.bind(this)}>
                            <Animated.View style={transformStyle}>
                                <Icon type="FontAwesome" name="angle-right"/>
                            </Animated.View>
                        </TouchableOpacity>
                    </Col>
                    <Col style={styles.main}>
                        <Text>Groupe</Text>
                        <View style={styles.fragment}>
                            {
                                uniqueFilial.map((groupe, i) =>
                                    <Button
                                    small 
                                    rounded 
                                    warning={this.state.societes.includes(groupe) ? false : true }
                                    primary={this.state.societes.includes(groupe) ? true : false }
                                    key={i} 
                                    style={styles.tags} 
                                    onPress={() => this.onSelectGroup(groupe)}>
                                        <Text>{groupe}</Text>
                                    </Button> 
                                    )
                            }
                        </View>
                        <Text>Activité</Text>
                        <View style={styles.fragment}>
                            {
                                uniqueActivite.map((activite, i) =>
                                    <Button 
                                    small 
                                    rounded
                                    warning={this.state.activites.includes(activite) ? false : true }
                                    primary={this.state.activites.includes(activite) ? true : false } 
                                    key={i} 
                                    style={styles.tags} 
                                    onPress={() => this.onSelectActivity(activite)}>
                                        <Text>{activite}</Text>
                                    </Button>
                                )
                            }
                        </View>
                        <Button block primary style={styles.tags}  onPress={() => this.props.closeDrawer()}><Text>Valider</Text></Button>
                        <Button transparent danger style={styles.tags}  onPress={this.reset.bind(this)}><Text>Réinitialiser</Text></Button>
                      </Col></Grid>  
                
                
            </Container>
        )
    }
}

const styles=StyleSheet.create({
    main : {
        flex: 1,
        backgroundColor: "#F0F0F0",
        paddingHorizontal: 20,
        paddingVertical : 10
    },

    fragment : {
        flexDirection : 'row', 
        flexWrap : "wrap",
        marginBottom : 10,
        marginTop : 10,
    },

    tags : {
        marginBottom : 5,
        marginTop : 5,
        marginLeft : 5,
        marginRight : 5,
    },


})