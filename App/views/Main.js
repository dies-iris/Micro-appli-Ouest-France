import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import { Item, Input, Drawer, Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text } from 'native-base';
import Liste from '../components/Liste';
import DATA from '../consts/data';
import Carte from '../components/Carte';
import Filtres from '../components/Filtres';
import Present from '../components/Present';


export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            carte : false,
            adress : DATA,
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

    filterByGroup(societe){
        let adr = DATA.filter(adress => adress.groupeparent === societe);
        this.setState(prevState => ({
            adresses : adr
        }));
    }

    filterByActivity(activite){
        let adr = this.state.adresses.filter(adress => adress.typeBatiment == activite);
        this.setState(prevState => ({
            adresses : adr
        }));
    }

    reset(){
        this.setState({
            adresses : DATA
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
            adresses : data
        })
    }

    render(){
        return(
            <Container>
                <Header searchBar rounded>
                    
                    <Left>
                        <Title>SIPA Ouest-France</Title>
                    </Left>
                    
                    <Item >
                            <Icon name="ios-search" />
                            <Input 
                            placeholder="Rechercher" 
                            onChangeText={text => this.search(text)}/>
                            <Icon type="AntDesign" name="close"/>
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
                    open={true}
                    tapToClose={true}
                    onOpenStart={() => {}}
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
                    
                    <Carte markers={this.state.adress}/>
                     
                    :
                    <Liste adress={this.state.adress} style={{flex:1}}/>
                    }
                </Content>
                </Drawer> 
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
    }

})