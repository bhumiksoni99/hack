// import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Divider, List } from "react-native-paper";
import { colors } from "../../colors";
import { StatusBar as Status } from "expo-status-bar";
import { cardDetailsData } from "../../data/cardDetailsData";

const ListItem = ({ navigation, heading, sub, item, body }) => {
  const text = sub.substring(0, 100);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("module", { item, heading, sub, body })
      }
      style={{ margin: 20, marginBottom: 0 }}
    >
      <View style={styles.account}>
        <View>
          <Ionicons name="ellipse" color={colors.themeDark} />
          <Divider
            style={{
              width: 1,
              height: 100,
              alignSelf: "center",
              marginTop: 10,
            }}
          />
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>{heading}</Text>
          <Text style={{ fontSize: 14, color: colors.subtitle }}>{text}</Text>
          <Text
            style={{ fontSize: 14, color: colors.themeDark, marginTop: 10 }}
          >
            Read More
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function CardDetails({ route, navigation }) {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const width = Dimensions.get("screen").width;
  const id = route.params.id - 1;
  const data = cardDetailsData[0];
  return (
    <>
      <Status backgroundColor="white" />
      <Text
        style={{
          marginTop: StatusBar.currentHeight,
          fontWeight: "bold",
          fontSize: 20,
          paddingTop: 10,
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        {route.params.title}
      </Text>
      <ScrollView style={styles.container}>
        <Image
          source={require("../../Group.jpg")}
          style={{ width: width, height: 150, marginVertical: 10 }}
        />
        <Text
          style={{
            color: colors.subtitle,
            paddingTop: 20,
            paddingHorizontal: 30,
          }}
        >
          {data.sub}
        </Text>
        <View style={{ margin: 10, flex: 1 }}>
          <FlatList
            data={data.timeline}
            renderItem={({ item }) => (
              <ListItem
                navigation={navigation}
                item={route.params}
                heading={item.heading}
                sub={item.sub}
                body={item.body}
              />
            )}
            horizontal={false}
            scrollEnabled={false}
            style={{}}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  account: {
    flexDirection: "row",
  },
});
