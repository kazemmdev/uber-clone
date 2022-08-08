import MapView, { Marker, MapViewDirections } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../store/navSlice";
import { GOOGLE_KEY } from "@env";
import { useEffect, useRef } from "react";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;

    // Zoom and fit
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: parseFloat(origin.location.lat),
        longitude: parseFloat(origin.location.lng),
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {/* {origin && destination && <MapViewDirections origin={origin} destination={destination} key={GOOGLE_KEY} />} */}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: parseFloat(origin.location.lat),
            longitude: parseFloat(origin.location.lng),
          }}
        />
      )}
    </MapView>
  );
};

export default Map;
