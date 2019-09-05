/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Router from './App/routes/Router';

const App = () => {
  return (
    <Fragment>
      <View>
        <Router/>
      </View>
    </Fragment>
  );
};

export default App;
