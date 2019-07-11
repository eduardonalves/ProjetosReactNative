import React from 'react'
import { createAppContainer, createBottomTabNavigator } from "react-navigation"
import Icon from '../components/Icon'

import {
  HomeScreen,
  SearchScreen,
  FavoritesScreen,
  ProfileScreen
} from "../screens"

const TabNavigator = createBottomTabNavigator({
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />
      }
    },
    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="search" color={tintColor} />
      }
    },
    FavoritesScreen: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="favorites" color={tintColor} />
      }
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="profile" color={tintColor} />
      }
    }
  });
  

export default createAppContainer(TabNavigator);