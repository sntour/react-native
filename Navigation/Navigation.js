// Navigation/Navigations.js

import React from "react";
import { StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Search from "../Components/Search";
import FilmDetail from "../Components/FilmDetail";
import Favorites from "../Components/Favorites";
import News from "../Components/News";

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: "Rechercher"
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
});

const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: "Favoris"
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
});

const NewsStackNavigator = createStackNavigator({
  News: {
    screen: News,
    navigationOptions: {
      title: "Les Derniers Films"
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
});

const MoviesTabNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: SearchStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return (
            <Ionicons name="md-search" style={styles.icon} color={tintColor} />
          );
        }
      }
    },
    Favorites: {
      screen: FavoritesStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return (
            <Ionicons name="md-heart" style={styles.icon} color={tintColor} />
          );
        }
      }
    },
    News: {
      screen: NewsStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return (
            <MaterialIcons
              name="fiber-new"
              style={styles.icon}
              color={tintColor}
            />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: "#DDDDDD",
      inactiveBackgroundColor: "#FFFFFF",
      activeTintColor: "black",
      inactiveTintColor: "#DDDDDD",
      showLabel: false,
      showIcon: true
    }
  }
);

const styles = StyleSheet.create({
  icon: {
    fontSize: 30
  }
});

export default createAppContainer(MoviesTabNavigator);
