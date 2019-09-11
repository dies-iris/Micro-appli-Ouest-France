import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import { Drawer, Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text } from 'native-base';
import Liste from '../components/Liste';
import DATA from '../consts/data';
import Carte from '../components/Carte';
import Filtres from '../components/Filtres';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            carte : false,
            adresses : DATA
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
            <Container>
                <Header hasSegment>
                    <Left>
                        <Button transparent>
                        <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>SIPA Ouest-France</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                        <Icon type="FontAwesome" name="filter" onPress={this.openDrawer.bind(this)}/>
                        </Button>
                    </Right>
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
                    ref={(ref) => { this.drawer = ref; }} 
                    content={<Filtres filterByGroup={this.filterByGroup} filterByActivity={this.filterByActivity} closeDrawer={this.closeDrawer.bind(this)}/>} 
                    onClose={() => this.closeDrawer()} >
                <Content padder>
                    {
                    this.state.carte ?
                    
                    null
                     
                    :
                    <Liste adresses={this.state.adresses} style={{flex:1}}/>
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