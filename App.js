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
import Main from './App/views/Main';
import Prensent from './App/components/Tab';
const {width, height} = Dimensions.get('window');

const App = () => {
  return (
    <Fragment>
      <View style={{width:width, height:height}}>
        <Prensent/>
      </View>
    </Fragment>
  );
};

export default App;
