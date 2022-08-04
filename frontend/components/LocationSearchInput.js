import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import client from "../api/client";

const LocationSearchInput = () => {
  const [location, setLocation] = useState("");
  return (
    <View>
      <TextInput value={location} onChangeText={setLocation} placeholder="Where from?" />
      
    </View>
  );
};

export default LocationSearchInput;

const styles = StyleSheet.create({});
