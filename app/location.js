import { useRouter } from "expo-router";
import { StyleSheet, View, Pressable } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import MapViewDirections from "react-native-maps-directions";

export default function LocationScreen() {
  const router = useRouter();

  const myLocation = {
    latitude: 37.78825,
    longitude: -122.4324,
  };

  const carLocation = {
    latitude: 37.78525,
    longitude: -122.4224,
  };

  // TODO RESTART HERE 👇

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.back}>
        <Entypo name="chevron-left" size={24} color="white" />
      </Pressable>

      <Pressable onPress={() => router.back()} style={styles.left}>
        <FontAwesome name="location-arrow" size={16} color="white" />
      </Pressable>

      <Pressable onPress={() => router.back()} style={styles.leftBottom}>
        <MaterialCommunityIcons
          name="arrow-right-top"
          size={16}
          color="white"
        />
      </Pressable>

      <Pressable onPress={() => router.back()} style={styles.lastBottom}>
        <MaterialCommunityIcons name="earth" size={17} color="white" />
      </Pressable>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: myLocation.latitude,
          longitude: myLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        // mapType="satellite"
        // showsUserLocation={true}
      >
        <Marker
          coordinate={myLocation}
          image={require("../assets/images/maps.png")}
          title={"My Position"}
        />
        <Marker
          coordinate={carLocation}
          title={"My Model S"}
          image={require("../assets/images/car-s.png")}
          style={styles.carMap}
        />

        {/* <Polyline
          coordinates={[
            { latitude: 37.78825, longitude: -122.4324 },
            { latitude: 37.78525, longitude: -122.4224 },
          ]}
          
          strokeColor={"#000"}
          strokeWidth={2}
        /> */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "auto",
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  back: {
    position: "absolute",
    top: 50,
    left: 25,
    backgroundColor: "#262228",
    padding: 10,
    borderRadius: 5,
    zIndex: 99999,
  },
  left: {
    position: "absolute",
    top: 50,
    right: 25,
    backgroundColor: "#262228",
    padding: 10,
    borderRadius: 5,
    zIndex: 99999,
  },
  leftBottom: {
    position: "absolute",
    top: 100,
    right: 25,
    backgroundColor: "#262228",
    padding: 10,
    borderRadius: 5,
    zIndex: 99999,
  },
  lastBottom: {
    position: "absolute",
    top: 150,
    right: 25,
    backgroundColor: "#262228",
    padding: 10,
    borderRadius: 5,
    zIndex: 99999,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  carMap: {
    width: 10,
  },
});
