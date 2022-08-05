import React, { useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { setOrigin, setDestination } from "../store/navSlice";
import { throttle } from "lodash";
import useApi from "../hooks/useApi";
import locationApi from "../api/locationApi";
import tw from "tailwind-react-native-classnames";

const LocationSearchInput = () => {
  const dispatch = useDispatch();
  const api = useApi(locationApi.search);
  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState([]);

  const fetchData = throttle(async () => {
    const result = await api.request(location);
    setLocations(result.data);
  }, 500);

  const handleSearch = (value) => {
    setLocation(value);
    fetchData();
  };

  const handleSelectLocation = (item) => {
    setLocation(item.name);
    setLocations([]);

    dispatch(
      setOrigin({
        location: {
          lat: item.latitude,
          lng: item.longitude,
        },
        name: item.name,
      })
    );

    dispatch(setDestination(null));
  };

  return (
    <View style={tw`p-2`}>
      <TextInput value={location} onChangeText={(v) => handleSearch(v)} placeholder="Where from?" />
      {locations?.length > 0 && (
        <View style={tw`absolute w-full flex-1 z-10 bg-white top-10 shadow-lg rounded-lg`}>
          <FlatList
            data={locations}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelectLocation(item)}>
                <View style={tw`p-4 flex-1`}>
                  <Text>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default LocationSearchInput;
