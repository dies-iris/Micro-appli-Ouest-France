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
            drawerOpen : true
        }
        this.rotateValue = new Animated.Value(0);
    }

    onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }

    filterByGroup(groupe){
        this.setState({
            selectedSociete : groupe
        })
        this.props.filterByGroup(groupe);
    }
    
    filterByActivity(activity){
        this.setState({
            selectedActivity : activity
        })
        this.props.filterByActivity(activity);
    }

    reset(){
        this.setState({
            selectedSociete : null,
            selectedActivity : null
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
            <Container>
                
                    <Header style={{backgroundColor: "#F0F0F0", borderLeftColor: "#F0F0F0"}}>
                    <Body>
                        
                            <Text>Filtres</Text>
                        </Body>
                        </Header>
                    <Content style={styles.main}>
                    <Grid>
                    <Col style={{width:40, backgroundColor: "#F0F0F0"}}>
                        <TouchableOpacity style={{flex:1, justifyContent:"center", alignItems:"center"}} onPress={this.toggleDrawer.bind(this)}>
                            <Animated.View style={transformStyle}>
                                <Icon type="FontAwesome" name="angle-right"/>
                            </Animated.View>
                        </TouchableOpacity>
                    </Col>
                    <Col>
                        <Text>Groupe</Text>
                        <View style={styles.fragment}>
                            {
                                uniqueFilial.map((groupe, i) =>
                                    <Button
                                    small 
                                    rounded 
                                    warning={this.state.selectedSociete === groupe ? false : true }
                                    primary={this.state.selectedSociete === groupe ? true : false }
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
                                    <Button 
                                    small 
                                    rounded
                                    warning={this.state.selectedActivity === activite ? false : true }
                                    primary={this.state.selectedActivity === activite ? true : false } 
                                    key={i} 
                                    style={styles.tags} 
                                    onPress={() => this.filterByActivity(activite)}>
                                        <Text>{activite}</Text>
                                    </Button>
                                )
                            }
                        </View>
                        <Button block primary style={styles.tags}  onPress={() => this.props.closeDrawer()}><Text>Valider</Text></Button>
                        <Button transparent danger style={styles.tags}  onPress={this.reset.bind(this)}><Text>Réinitialiser</Text></Button>
                      </Col></Grid>  
                    </Content>
                
                
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