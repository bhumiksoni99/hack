import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Searchbar, Chip } from "react-native-paper";
import { colors } from "../colors";

export default function Search() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <StatusBar />
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Text style={{ marginTop: 20, color: colors.subtitle }}>
        Recent Search
      </Text>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Chip
          mode="outlined"
          onPress={() => console.log("Pressed")}
          style={{ marginRight: 10 }}
        >
          Example Chip
        </Chip>
        <Chip mode="outlined" onPress={() => console.log("Pressed")}>
          Example Chip
        </Chip>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
});
