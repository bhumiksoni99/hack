import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { StatusBar as Status } from "expo-status-bar";
import { Appbar, DataTable } from "react-native-paper";
import { colors } from "../../colors";

const HeaderDescription = ({ item }) => (
  <View style={{ padding: 20 }}>
    <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
      {item.header}
    </Text>
    <Text style={{ lineHeight: 20, fontSize: 14 }}>{item.explanantion}</Text>
  </View>
);

export default function Module({ route }) {
  let path;
  if (route.params.heading === "Knowing your requirements") {
    path = require("../../Knowing-your-requirements.jpg");
  }
  if (route.params.heading === "Navigating the property market") {
    path = require("../../Navigating-the-property-market.jpg");
  }
  if (route.params.heading === "Finalizing your dream home") {
    path = require("../../Finalising-your-dream-home.jpg");
  }
  if (route.params.heading === "Getting the funds you need - Pt.1") {
    path = require("../../Getting-the-funds-you-need.jpg");
  }
  const width = Dimensions.get("screen").width;
  return (
    <View style={styles.container}>
      <Status />
      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          color: colors.subtitle,
          padding: 20,
        }}
      >
        {route.params.item.title}{" "}
      </Text>
      <Text style={{ textAlign: "center", fontSize: 20, paddingBottom: 20 }}>
        {route.params.heading}
      </Text>
      {/* <Text>Module</Text> */}
      <ScrollView>
        <Image
          source={path}
          style={{ width: width, height: 200, marginTop: 10 }}
        />

        <Text style={{ padding: 20, lineHeight: 20, marginBottom: -10 }}>
          {route.params.sub}
        </Text>

        <FlatList
          data={route.params.body}
          renderItem={({ item }) => <HeaderDescription item={item} />}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
