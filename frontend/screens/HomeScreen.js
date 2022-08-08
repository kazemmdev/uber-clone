import { Image, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../store/navSlice";
import tw from "tailwind-react-native-classnames";
import Screen from "../components/Screen";
import NavOptions from "../components/NavOptions";
import LocationSearchInput from "../components/LocationSearchInput";
import NavFavorite from "../components/NavFavorite";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const selectLocation = (item) => {
    dispatch(setOrigin(item));
    dispatch(setDestination(null));
  };

  return (
    <Screen style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={styles.iconStyle}
          source={{ uri: "https://1000logos.net/wp-content/uploads/2021/04/Uber-logo.png" }}
        />
        <LocationSearchInput handleSelectLocation={selectLocation} />
        <NavOptions />
        <NavFavorite />
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
