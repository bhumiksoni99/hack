import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../colors";

export default function Preferance() {
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <Text style={{ fontSize: 24 }}>Settings</Text>
        <Text style={{ fontSize: 20, marginTop: 20 }}>Display Settings</Text>
        <Text style={{ fontSize: 14, color: colors.subtitle, marginTop: 10 }}>
          These settings are applied for the content across the app
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 40,
            paddingHorizontal: 40,
          }}
        >
          <Text style={{ fontSize: 20 }}>Font Size</Text>
          <Text style={{ fontSize: 20 }}>- A +</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 40,
            paddingHorizontal: 40,
          }}
        >
          <Text style={{ fontSize: 20, textAlignVertical: "center" }}>
            Display
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="ellipse"
              color={"white"}
              size={40}
              style={{ marginRight: 10 }}
            />
            <Ionicons name="ellipse" color={"black"} size={40} />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    padding: 30,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
