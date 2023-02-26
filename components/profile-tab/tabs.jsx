import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
// import Linking from "expo-linking";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import { Badge, Divider } from "react-native-paper";
import { colors } from "../../colors";

export default function Tabs({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.account}
        onPress={() => navigation.navigate("preferance")}
      >
        <Ionicons
          name="settings"
          size={20}
          color={colors.themeDark}
          style={{
            verticalAlign: "middle",
          }}
        />
        <View style={{ justifyContent: "center", marginLeft: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>Settings</Text>
          <Text style={{ fontSize: 14 }}>
            Choose your desired settings for better reading
          </Text>
        </View>
      </TouchableOpacity>
      <Divider />
      {/* <TouchableOpacity
        style={styles.account}
        onPress={() => Linking.openURL("")}
      >
        <Ionicons
          name="add"
          size={20}
          style={{
            verticalAlign: "middle",
          }}
        />
        <View style={{ justifyContent: "center", marginLeft: 20 }}>
          <Text style={{ fontSize: 14 }}>Go To Anarock</Text>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>aajn</Text>
        </View>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.account}
        onPress={() =>
          Linking.openURL(
            `vnd.youtube://playlist/list` + "PL3Uiy2E5kzzQuhca2hz4sdhmFm1c0nwCk"
          )
        }
      >
        <Ionicons
          name="videocam"
          size={20}
          style={{
            verticalAlign: "middle",
          }}
          color="#CD6155"
        />
        <View style={{ justifyContent: "center", marginLeft: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>Videos</Text>
          <Text style={{ fontSize: 14 }}>
            Related Videos and webinars from Anarock
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.account}
        onPress={() => {
          Linking.openURL(`whatsapp://send?phone=${8210989061}`);
        }}
      >
        <Ionicons
          name="chatbubble"
          size={20}
          style={{
            verticalAlign: "middle",
          }}
          color="#58D68D"
        />
        <View style={{ justifyContent: "center", marginLeft: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            Spread the word
          </Text>
          <Text style={{ fontSize: 14 }}>Share the app with your family</Text>
        </View>
      </TouchableOpacity>
      <Text style={{ textAlign: "center", margin: 40 }}>
        Made with ❤️ at ANAROCK
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  account: {
    flexDirection: "row",
    marginHorizontal: 40,
    marginVertical: 30,
  },
});
