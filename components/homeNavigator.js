import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./home";
import { Text } from "react-native-paper";
import CardDetails from "./profile-tab/cardDetails";
import Module from "./profile-tab/module";

const CardStack = createStackNavigator();

export const cardNavigator = () => {
  return (
    <CardStack.Navigator headerMode="none">
      <CardStack.Screen name="Home" component={Home} />
      <CardStack.Screen name="cardDetails" component={CardDetails} />
      <CardStack.Screen name="module" component={Module} />
    </CardStack.Navigator>
  );
};
