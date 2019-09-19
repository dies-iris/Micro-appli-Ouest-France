import React, {Component} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import { Item, Input, Drawer, Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text} from 'native-base';
import Liste from '../components/Liste';
import DATA from '../consts/data';
import Carte from '../components/Carte';
import Filtres from '../components/Filtres';
import Present from '../components/Present';


export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            carte : true,
            adresses : DATA,
            societes : [],
            search: null
        }
        this.showMap = this.showMap.bind(this);
        this.hideMap = this.hideMap.bind(this);
        this.filterByGroup = this.filterByGroup.bind(this);
        this.filterByActivity = this.filterByActivity.bind(this);
        
    }

    showMap(){
        this.setState({
            carte: true
        })
    }
    
    hideMap(){
        this.setState({
            carte: false
        })
    }

    closeDrawer (){
        this.drawer._root.close()
      };
    
    openDrawer (){ 
          this.drawer._root.open() 
        };

    filterByGroup(societes){
        if(societes.length > 0){
            let adr = DATA.filter(adress => societes.includes(adress.groupeParent));
            this.setState({
                adresses : adr,
                societes: societes,
                carte : true
            }); 
        } else {
            this.reset();
        } 
    }

    filterByActivity(activites){
        if (activites.length > 0){
            let pool = this.state.societes.length > 0 ? this.state.adresses : DATA
            let adr = pool.filter(adress => activites.includes(adress.typeBatiment));
            this.setState({
                adresses : adr
            });
        } else if (this.state.societes.length === 0) {
            this.reset();
        }
    }

    reset(){
        this.setState({
            adresses : DATA,
            search : null
        })
    }

    search(text){
        let search = text.trim().toLowerCase().split(' ');
        let data = [];
        for(i of DATA){
            let obj = Object.values(i).toString().toLowerCase();
            if(search.every(el => obj.includes(el))){
                data.push(i);
            }
        }
        this.setState({
            search: text,
            adresses : data
        })
    }

    render(){
        return(
            <Container>
                <Header searchBar rounded style={styles.header}>
               
                        <Image source={require('../images/ouest_france.png')} style = {{
                            flex:1,
                            width: 60,
                            height: 40,
                            resizeMode: 'contain'
                        }}/>
                        <Title style={{flex:2, color : "#333333", textAlign:"center"}}> Groupe SIPA Ouest-France</Title>
                    
                    <Item style={styles.searchbar}>
                        <Icon name="ios-search" style={{color: "#E2001A"}}/>
                        <Input 
                        placeholder="Rechercher" 
                        placeholderTextColor = "#CECECE"
                        onChangeText={text => this.search(text)}
                        value={this.state.search}/>
                        <Icon type="AntDesign" name="close" onPress={this.reset.bind(this)}  style={{color: "#CECECE"}} />
                    </Item>
                    
                </Header>
                <View style={{backgroundColor:"#00000000", flexDirection: "row", justifyContent: "center", position:"relative", top: -20}}>
                    <Button first active={this.state.carte ? true : false} onPress={this.showMap} style={this.state.carte ? styles.leftButtonActif : styles.leftButton}>
                        <Text style={{color : "#FFFFFF", textAlign: "center"}}>Carte</Text>
                    </Button>
                    <Button last active={this.state.carte ? false : true} onPress={this.hideMap} style={this.state.carte ? styles.rightButton : styles.rightButtonActif}>
                        <Text style={{color : "#FFFFFF", textAlign: "center"}}>Liste</Text>
                    </Button>
                </View> 
                <Drawer 
                    side="right"
                    tweenDuration={350}
                    openDrawerOffset={0.5}
                    closedDrawerOffset={40}
                    ref={(ref) => { this.drawer = ref; }} 
                    content={
                            <Filtres 
                            filterByGroup={this.filterByGroup} 
                            filterByActivity={this.filterByActivity} 
                            openDrawer={this.openDrawer.bind(this)} 
                            closeDrawer={this.closeDrawer.bind(this)} 
                            reset={this.reset.bind(this)}/>
                        } 
                    onClose={() => this.closeDrawer()} >
                <Content padder contentContainerStyle={{flex:1}}>
                    <Carte markers={this.state.adresses}/>
                    
                    <View style={this.state.carte ? styles.listHidden : styles.listShown}>
                        {
                        this.state.adresses.length > 0 ?
                        <Liste adresses={this.state.adresses} style={{flex:1}}/>
                        :
                        <Text>Aucun resultat trouvé. </Text>
                        }
                    </View>
                    
                </Content>
                </Drawer> 
                <Button first active={this.state.carte ? true : false} onPress={this.showMap} style={this.state.carte ? styles.leftButtonActif : styles.leftButton}>
                        <Text style={{color : "#FFFFFF"}}>Carte</Text>
                    </Button>
                    <Button last active={this.state.carte ? false : true} onPress={this.hideMap} style={this.state.carte ? styles.rightButton : styles.rightButtonActif}>
                        <Text style={{color : "#FFFFFF"}}>Liste</Text>
                    </Button>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    header : {
        backgroundColor:"white", 
        flexDirection: "row", 
        justifyContent:"space-between", 
        alignItems: "center",
        height : 60,
        borderBottomColor: "#CECECE",
        borderBottomWidth: 2
    },
    searchbar : {
        flex:1, 
        borderBottomColor: "#CECECE",
        borderBottomWidth: 1
    },
    icon : {
        width : 30,
        height : 30
    },
    listHidden : {
        position: "relative",
        left: '-120%'
    },
    listShown : {
        flex:1, 
        position:"absolute", 
        width: '102%', 
        right: 0,
        backgroundColor: 'white'
    },
    leftButton : {
        backgroundColor:"#CECECE",
        color : "#FFFFFF",
        width: 200,
        height : 40,
        justifyContent: "center",
        alignItems : "center",
        borderBottomLeftRadius : 40,
        // borderTopLeftRadius : 20,
        position: "absolute",
        right: "50%",
        top : 60
    },
    leftButtonActif : {
        backgroundColor:"#E2001A",
        color : "#FFFFFF",
        width: 200,
        height : 40,
        justifyContent: "center",
        alignItems : "center",
        borderBottomLeftRadius : 40,
        // borderTopLeftRadius : 20,
        position: "absolute",
        right: "50%",
        top : 60
    },
    rightButton : {
        backgroundColor:"#CECECE",
        color : "#FFFFFF",
        width: 200,
        height : 40,
        justifyContent: "center",
        alignItems : "center",
        borderBottomRightRadius : 40,
        // borderTopRightRadius : 20,
        position: "absolute",
        left: "50%",
        top : 60
    },
    rightButtonActif : {
        backgroundColor:"#E2001A",
        color : "#FFFFFF",
        width: 200,
        height : 40,
        justifyContent: "center",
        alignItems : "center",
        borderBottomRightRadius : 40,
        // borderTopRightRadius : 20,
        position: "absolute",
        left: "50%",
        top : 60
    }

})
