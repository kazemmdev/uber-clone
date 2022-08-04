import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Screen from "../components/Screen";
import Map from "../components/Map";

const MapScreen = () => {
  return (
    <View style={tw`bg-white h-full`}>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}></View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
