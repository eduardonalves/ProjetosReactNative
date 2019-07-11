/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { flipX } from 'react-navigation-transitions'

import Home from './public/src/components/atm/home'
import Client from './public/src/components/atm/clients'
import Contact from './public/src/components/atm/contacts'
import Company from './public/src/components/atm/company'
import Service from './public/src/components/atm/services'


const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Client: { screen: Client },
    Contact:{ screen:Contact },
    Company: {screen: Company},
    Service: {screen: Service},
  },
  {
    initialRouteName: "Home",
    /*Transition config não é obrigatório, caso queira a animação padrão remova a linha abaixo*/
    transitionConfig: () => flipX(),
    /*defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    },*/
  }
)

const App = createAppContainer(MainNavigator)
export default App

