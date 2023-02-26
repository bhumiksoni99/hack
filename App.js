import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/home";
import Bookmark from "./components/bookmark";
import Settings from "./components/settings";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { cardNavigator } from "./components/homeNavigator";
import Search from "./components/search";
import { settingsNavigator } from "./components/settingsNavigator";
import { LogBox } from "react-native";

// Ignore log notification by message
LogBox.ignoreLogs(["Warning: ..."]);

//Ignore all log notifications
LogBox.ignoreAllLogs();

console.disableYellowBox = true;

const Tab = createBottomTabNavigator();

const createScreenOptions = ({ route }) => {
  let iconName;
  if (route.name === "Home") {
    iconName = "home";
  }
  if (route.name === "Profile") {
    iconName = "person";
  }
  if (route.name === "Search") {
    iconName = "search";
  }
  if (route.name === "Newsletter") {
    iconName = "newspaper";
  }
  return {
    tabBarIcon: ({ size, color }) => <Ionicons name={iconName} size={20} />,
    headerShown: false,
  };
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={cardNavigator} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Newsletter" component={Bookmark} />
        <Tab.Screen name="Profile" component={settingsNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
