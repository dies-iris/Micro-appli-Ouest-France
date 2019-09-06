/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Router from './App/routes/Router';
import Carte from './App/views/Carte';

const {width, height} = Dimensions.get('window');

const App = () => {
  return (
    <Fragment>
      <View style={{width:width, height:height}}>
        <Carte/>
      </View>
    </Fragment>
  );
};

export default App;
