import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Linking,
} from "react-native";
import { carosuelData } from "../data/carosuelData";

const Links = ({ item }) => (
  <TouchableOpacity onPress={() => Linking.openURL(item.articleUrl)}>
    <View style={styles.account}>
      <Image
        source={{ uri: item.imgUrl }}
        style={{ height: 100, width: 100, borderRadius: 25 }}
      />
      <View style={{ marginLeft: 20, justifyContent: "center" }}>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>{item.title}</Text>
        <Text style={{ fontSize: 14, overflow: "scroll" }}>
          Choose your desired settings for better reading
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default function Bookmark() {
  return (
    <View style={styles.container}>
      <FlatList
        data={carosuelData}
        renderItem={({ item }) => <Links item={item} />}
        style={{ padding: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  account: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginHorizontal: 40,
    marginVertical: 30,
  },
});
