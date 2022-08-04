import tw from "tailwind-react-native-classnames";

import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import NavOptions from "../components/NavOptions";
import LocationSearchInput from "../components/LocationSearchInput";

const HomeScreen = () => {
  return (
    <Screen style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={styles.iconStyle}
          source={{ uri: "https://1000logos.net/wp-content/uploads/2021/04/Uber-logo.png" }}
        />
        <LocationSearchInput />
        <NavOptions />
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  iconStyle: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
