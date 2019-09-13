import React, {Component} from 'react';
import {Container, Header, Content, Tab, Tabs, Icon, Right, Button, Card} from 'native-base';
import {View, Text, StyleSheet, Image} from 'react-native';
import DATA from '../consts/data';

export default class Popup extends Component {
  render() {
    let adress = this.props.adress;
    return (
      <Container style={styles.main}>
        <Text>{adress.ville}</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    width : 150,
    height : 90,
  },
  head:{
    height:100,
  }
})