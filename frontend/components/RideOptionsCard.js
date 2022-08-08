import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon, Image } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const data = [
  // {
  //   id: "uber-x-123",
  //   title: "Uber X",
  //   multiplier: 1,
  //   image:
  //     "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
  // },
  {
    id: "uber-xl-123",
    title: "Uber XL",
    multiplier: 1.2,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png",
  },
  {
    id: "uber-lux-123",
    title: "Uber LUX",
    multiplier: 1.5,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png",
  },
];

const SURGE_CHARGE_RATE = 1.5;

const currencyFormat = (num) => {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  return (
    <View style={tw`bg-white flex-grow`}>
      <View style={tw`py-4`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigationCard")}
          style={tw`absolute top-2 left-5 p-3 rounded-full z-50`}
        >
          <Icon name="left" type="antdesign" />
        </TouchableOpacity>
        <Text style={tw`text-center text-lg font-semibold`}>Select a Ride</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item, item: { id, image, multiplier, title } }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex flex-row items-center justify-between px-10 ${id === selected?.id && "bg-gray-200"}`}
          >
            <Image
              style={{
                height: 100,
                width: 100,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>Traveling time</Text>
            </View>
            <Text style={tw`text-lg font-semibold`}>
              {currencyFormat((1000 * SURGE_CHARGE_RATE * multiplier) / 100)}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
          <Text style={tw`text-center text-xl text-white`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RideOptionsCard;
