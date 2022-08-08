import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import { setDestination } from "../store/navSlice";
import { useNavigation } from "@react-navigation/native";
import LocationSearchInput from "./LocationSearchInput";
import NavFavorite from "./NavFavorite";
import tw from "twrnc";

const NavigationCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={tw`bg-white flex-1 flex-shrink px-2 py-4`}>
      <Text style={tw`text-center text-black font-bold text-lg pb-4`}>Good Morning, Kazem!</Text>
      <LocationSearchInput
        inputStyle={tw`bg-gray-100 px-3`}
        handleSelectLocation={(item) => {
          dispatch(setDestination(item));
          navigation.navigate("RideOptionsCard");
        }}
      />
      <NavFavorite />
      <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
          onPress={() => navigation.navigate("RideOptionsCard")}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
          <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigationCard;

const styles = StyleSheet.create({});
