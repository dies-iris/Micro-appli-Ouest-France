import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import { Item, Input, Drawer, Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text } from 'native-base';
import Liste from '../components/Liste';
import DATA from '../consts/data';
import Carte from '../components/Carte';
import Filtres from '../components/Filtres';
import Present from '../components/Present';

const backGrnd = React.createContext(styles.backGrndClr);


export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            carte : false,
            adresses : DATA,
            societes : [],
            search: null,
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
            let adr = DATA.filter(adress => societes.includes(adress.groupeparent));
            this.setState({
                adresses : adr,
                societes: societes
            }); 
        } else {
            this.reset();
        } 
    }

    filterByActivity(activites){
        console.warn(activites);
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
                <backGrnd.Provider value={this.state.styles}>
                    <Header searchBar rounded>
                    
                        <Left style={{flex:2,textAlign:"center"}}>
                            <Title style={{}}>SIPA Ouest-France</Title>
                        </Left>
                        
                        <Item style={{flex:1}}>
                                <Icon name="ios-search" />
                                <Input 
                                placeholder="Rechercher" 
                                onChangeText={text => this.search(text)}
                                value={this.state.search}/>
                                <Icon type="AntDesign" name="close" onPress={this.reset.bind(this)}/>
                            </Item>
                            <Button transparent>
                                <Text >OK</Text>
                            </Button>
                        
                    </Header>
                    
                    <Segment>
                        <Button first active={this.state.carte ? true : false} onPress={this.showMap}>
                            <Text>Carte</Text>
                        </Button>
                        <Button last active={this.state.carte ? false : true} onPress={this.hideMap}>
                            <Text>Liste</Text>
                        </Button>
                    </Segment> 
                    <Drawer 
                        side="right"
                        tweenDuration={350}
                        openDrawerOffset={0.5}
                        closedDrawerOffset={40}

                        tapToClose={true}
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
                        {
                        this.state.carte ?
                        
                        <Carte markers={this.state.adresses}/>
                        
                        :
                        this.state.adresses.length > 0 ?
                        <Liste adresses={this.state.adresses} style={{flex:1}}/>
                        :
                        <Text>Aucun resultat trouvé. </Text>
                        }
                    </Content>
                    </Drawer> 
                    {
                        (this.state.backGrnd)
                    }
                </backGrnd.Provider>
            </Container>
        )
    }
}

const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create({
    container : {
        width: width,
        height : height
    },
    icon : {
        width : 30,
        height : 30
    },
    backGrndClr:{
        backgroundColor: '#80808066' ,
      }

})