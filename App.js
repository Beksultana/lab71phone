import React from 'react';
import { StyleSheet, View } from 'react-native';

import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import getDishReducer from './src/store/reducers/rootReducer';
import orderReducer from './src/store/reducers/order-reducer';

const rootReducer = combineReducers({
    getDishesReducer: getDishReducer,
    orderReducer: orderReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

import MainContainer from "./src/containers/MainContainer/MainContainer";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <View style={styles.container}>
              <MainContainer/>
          </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
