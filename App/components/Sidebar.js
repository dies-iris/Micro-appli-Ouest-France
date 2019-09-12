import React, { Component } from 'react';
import { Drawer } from 'native-base';
import Filtres from './Filtres';

export default class DrawerExample extends Component {
  closeDrawer (){
    this.drawer._root.close()
  };

  openDrawer (){ 
      this.drawer._root.open() 
    };

render() { 
    return ( 
        <Drawer 
        ref={(ref) => { this.drawer = ref; }} 
        content={<Filtres/>} 
        onClose={() => this.closeDrawer()} > // Main View </Drawer> 
    ); 
} }