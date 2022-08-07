import React, { useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { throttle } from "lodash";
import useApi from "../hooks/useApi";
import locationApi from "../api/locationApi";
import tw from "twrnc";

const LocationSearchInput = ({ handleSelectLocation, inputStyle = null }) => {
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

  const handleSelected = (item) => {
    setLocation(item.name);
    setLocations([]);

    handleSelectLocation({
      location: {
        lat: item.latitude,
        lng: item.longitude,
      },
      name: item.name,
    });
  };

  return (
    <View>
      <TextInput
        value={location}
        onChangeText={(v) => handleSearch(v)}
        placeholder="Where from?"
        style={[tw`p-2`, inputStyle]}
      />
      {locations?.length > 0 && (
        <FlatList
          data={locations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelected(item)}>
              <View style={tw`p-4 flex-1 bg-white`}>
                <Text>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default LocationSearchInput;
