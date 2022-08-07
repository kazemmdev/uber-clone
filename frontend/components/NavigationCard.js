import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationSearchInput from "./LocationSearchInput";
import tw from "twrnc";
import { useDispatch } from "react-redux";
import { setDestination } from "../store/navSlice";
import { useNavigation } from "@react-navigation/native";

const NavigationCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1 flex-shrink p-2`}>
      <Text style={tw`text-center text-black font-bold text-lg pb-4`}>Good Morning, Kazem!</Text>
      <LocationSearchInput
        inputStyle={tw`bg-gray-100 px-3`}
        handleSelectLocation={(item) => {
          dispatch(setDestination(item));
          navigation.navigate("RideOptionsCard");
        }}
      />
    </SafeAreaView>
  );
};

export default NavigationCard;

const styles = StyleSheet.create({});
