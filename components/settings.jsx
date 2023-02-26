import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Badge, Divider } from "react-native-paper";
import Tabs from "./profile-tab/tabs";

// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   //   statusCodes,
// } from "@react-native-google-signin/google-signin";

export default function Settings({ navigation }) {
  const [user, setUser] = useState("");

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId: "",
  //     offlineAccess: true,
  //     forceCodeForRefreshToken: true,
  //   });
  // });

  // const sigin = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const info = GoogleSignin.signIn();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.account}>
        <Badge style={{ justifyContent: "flex-start" }} size={80}>
          BS
        </Badge>
        <View style={{ justifyContent: "center", marginLeft: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>
            bhumiksoni009@gmail.com
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>Bhumik Soni</Text>
        </View>
      </View>

      <Divider />
      <Tabs navigation={navigation} />
      {/* <GoogleSigninButton
        style={{ width: 200, height: 100 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={sigin}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  account: {
    flexDirection: "row",
    margin: 40,
  },
});
