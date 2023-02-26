import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Card } from "react-native-paper";
import Carousel from "react-native-snap-carousel";
import { colors } from "../colors";
import { carosuelData } from "../data/carosuelData";
import { cardData } from "../data/cardData";

const CardComponent = ({ navigation, item }) => (
  <Card
    style={styles.card}
    onPress={() =>
      navigation.navigate("cardDetails", {
        title: item.title,
        subtitle: item.subtitle,
        id: item.id,
      })
    }
    mode="elevated"
  >
    <Ionicons
      name={item.iconName}
      style={{ paddingLeft: 20, paddingTop: 20 }}
      size={24}
      color={item.iconColor}
    />
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}
    <Card.Content
      style={{
        marginTop: 6,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 4 }}>
        {item.title}
      </Text>
      <Text style={{ color: colors.subtitle, fontSize: 14 }}>
        {item.subtitle}
      </Text>
    </Card.Content>
  </Card>
);

export default function Home({ navigation }) {
  const width = Dimensions.get("window").width;

  return (
    <ScrollView style={styles.container} scrollEnabled={true}>
      <StatusBar />
      <View>
        <Text
          style={{
            fontSize: 18,
            paddingHorizontal: 25,
            paddingVertical: 12,
            paddingTop: 0,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Welcome Bhumik 😁
        </Text>
        <Text
          style={{
            fontSize: 14,
            paddingHorizontal: 25,
            color: "grey",
            marginTop: -8,
            marginBottom: 12,
          }}
        >
          <Ionicons
            name="trending-up-outline"
            size={16}
            style={{ marginRight: 200 }}
          />{" "}
          Trending newsletter
        </Text>
      </View>
      <Carousel
        layout="tinder"
        data={carosuelData}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.main}
            onPress={() => Linking.openURL(item.articleUrl)}
          >
            <Image source={{ uri: item.imgUrl }} style={styles.image} />
            <View
              style={{
                position: "absolute",
                padding: 20,
                bottom: 0,
              }}
            >
              <Text style={styles.header}>{item.title}</Text>
              <Text style={styles.body}>2 Hours ago</Text>
              <Text style={{ textAlign: "center", marginBottom: -10 }}>
                <Ionicons name="ellipse" color={"white"} />{" "}
                <Ionicons name="ellipse-outline" color={"white"} />{" "}
                <Ionicons name="ellipse-outline" color={"white"} />
              </Text>
            </View>
          </TouchableOpacity>
        )}
        sliderWidth={width}
        itemWidth={width}
        inactiveSlideShift={0}
        useScrollView={true}
      />
      <View style={{ marginLeft: 16, marginTop: 30, marginBottom: 12 }}>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 12,
            color: colors.subtitle,
            fontWeight: "bold",
          }}
        >
          <Ionicons name="hourglass" size={16} /> Modules
        </Text>
        <Text style={{ fontSize: 14, lineHeight: 16, color: colors.subtitle }}>
          These are organized collections of educational content. They keep you
          focused on the lesson or concept you are learning.
        </Text>
      </View>
      <FlatList
        data={cardData}
        renderItem={({ item }) => (
          <CardComponent navigation={navigation} item={item} />
        )}
        numColumns={2}
        horizontal={false}
        scrollEnabled={true}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    flexDirection: "row",
    backgroundColor: "#fff",
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
  },
  card: {
    margin: 10,
    flex: 1,
    backgroundColor: "white",
  },
  main: {
    backgroundColor: "white",
    borderRadius: 8,
    width: Dimensions.get("screen").width,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    // shadowOpacity: 0.29,
    height: 200,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: Dimensions.get("screen").width,
    height: 400,
    opacity: 0.8,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  body: {
    color: "#222",
    fontSize: 12,
    color: "white",
  },
});
