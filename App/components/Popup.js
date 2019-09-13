import React, {Component} from 'react';
import {Container, Header, Content, Tab, Tabs, Icon, Right, Button, Card, CardItem} from 'native-base';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Popup extends Component {
  render() {
    let adress = this.props.adress;
    return (
      <Container style={styles.main}>
        <Content>
          <Text>{adress.groupeparent}</Text>
          <Text>{adress.rue}</Text>
          <Text>{adress.ville}</Text>
          <Text>{adress.cp}</Text>
        </Content>
      </Container>
       );
      }
    }

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // width: 90,
    height: 130
  }
})