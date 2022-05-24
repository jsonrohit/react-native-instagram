import { SafeAreaView, StyleSheet, Text, View,StatusBar } from 'react-native';

import { createStore } from 'redux'
import { rootReducer } from './src/stores/reducers'
import { Provider, useSelector } from 'react-redux'
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import React from 'react';
import Navigation from './src/navigation/Navigation';



const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware()
    // other store enhancers if any
  )
)


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar> */}
      <Provider store={store}>
        <Navigation />
      </Provider>
      {/* </StatusBar> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})