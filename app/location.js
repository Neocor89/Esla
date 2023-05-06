import { useRouter } from "expo-router";
import { StyleSheet, View, Pressable } from "react-native";
import MapView, { Marker } from "react-native-maps";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function LocationScreen() {
  const router = useRouter();

  const location = {
    latitude: 37.78825,
    longitude: -122.4324,
  };

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
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // mapType="satellite"
        // showsUserLocation={true}
      >
        <View>
          <Marker
            coordinate={location}
            image={require("../assets/images/maps.png")}
          />
        </View>
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
});
