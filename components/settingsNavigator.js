import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Preferance from "./preference";
import Settings from "./settings";

const SettingsStack = createStackNavigator();

export const settingsNavigator = () => {
  return (
    <SettingsStack.Navigator headerMode="none">
      <SettingsStack.Screen name="Profile" component={Settings} />
      <SettingsStack.Screen name="preferance" component={Preferance} />
    </SettingsStack.Navigator>
  );
};
