import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationCard from "../components/NavigationCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <View style={tw`bg-white h-full`}>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-2 rounded-full shadow-lg`}
      >
        <Icon name="menu" />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
          <Stack.Screen name="NavigationCard" component={NavigationCard} options={{ headerShown: false }} />
          <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} options={{ headerShown: false }} />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
