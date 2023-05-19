import { useRouter } from "expo-router";
import {
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  Modal,
  Text,
  Image,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { useState } from "react";

export default function LocationScreen() {
  const [mapType, setMapType] = useState("standard");

  const [modalVisible, setModalVisible] = useState(false);

  const handleMarkerPress = () => {
    setModalVisible(true);
  };

  const router = useRouter();

  const myLocation = {
    latitude: 37.78825,
    longitude: -122.4324,
  };

  const carLocation = {
    latitude: 37.78659,
    longitude: -122.4294,
  };

  // TODO RESTART HERE 👇

  //+ FINISH BUTTON ACTIONS
  //: FIND IMAGE OF TESLA CARD
  //: CREATE IMAGE CONTAINER WITH PART OF CAR = FIND RESSOURCES
  //: CREATE SUBSCRIPTIONS PAGE WITH OPTIONS = FIND RESSOURCES

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.back}>
        <Entypo name="chevron-left" size={24} color="white" />
      </Pressable>

      <Pressable onPress={handleMarkerPress} style={styles.left}>
        <FontAwesome name="location-arrow" size={16} color="white" />
      </Pressable>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: myLocation.latitude,
              longitude: myLocation.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            mapType={mapType}
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
              style={styles.carMap}
              pinColor="#1985fa"
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
          <TouchableOpacity
            style={{ paddingTop: 560 }}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.btnModal}>Hide Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Pressable onPress={() => router.back()} style={styles.leftBottom}>
        <MaterialCommunityIcons
          name="arrow-right-top"
          size={16}
          color="white"
        />
      </Pressable>

      <Pressable onPress={() => router.back()} style={styles.lastBottom}>
        <MaterialCommunityIcons
          name="earth"
          size={17}
          color="white"
          onPress={() =>
            setMapType(mapType === "standard" ? "satellite" : "standard")
          }
        />
      </Pressable>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: myLocation.latitude,
          longitude: myLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType={mapType}
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
  image: {
    width: 200,
    height: 200,
  },
  btnModal: {
    padding: 10,
    backgroundColor: "#5bc267",
    color: "#FFFFFF",
    position: "relative",
    right: -110,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  carMap: {
    width: 10,
  },
});
