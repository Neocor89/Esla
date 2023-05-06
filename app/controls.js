import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import carControl from "../assets/images/controls-car.png";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";

import IconOptions from "../components/IconOptions";

export default function ControlsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={carControl} style={styles.image} resizeMode="contain" />

      <Pressable onPress={() => router.back()} style={styles.back}>
        <AntDesign name="left" size={24} color="white" />
      </Pressable>

      <View style={styles.footer}>
        <View style={styles.controlTemp}>
          {/* CAR LIGHT */}
          <IconOptions iconType={"car-light-high"} text={"flash"} />

          {/* CAR HONK */}
          <IconOptions iconType={"trumpet"} text={"Honk"} />

          {/* CAR REMOTE */}
          <IconOptions iconType={"remote"} text={"01:45"} />

          {/* CAR HOMELINK */}
          <IconOptions iconType={"greenhouse"} text={"Homelink"} />

          <View style={styles.temperatureContainer}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161818",
  },
  image: {
    width: "100%",
    height: "95%",
  },
  back: {
    position: "absolute",
    top: 50,
    left: 25,
    backgroundColor: "#2f3030",
    padding: 10,
    borderRadius: 5,
  },
  footer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: "auto",
    // backgroundColor: "green",
    flexDirection: "row",
  },
  labelTemp: {
    color: "gray",
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 20,
  },
  controlTemp: {
    flexDirection: "row",
    width: "100%",
    marginLeft: 28,
    justifyContent: "space-between",
  },
  iconButtonContainer: {
    alignItems: "center",
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: "300",
    color: "white",
    marginHorizontal: 20,
  },
  temperatureContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButtonText: {
    color: "#bfcede",
    fontSize: 15,
    fontWeight: "600",
    marginTop: 10,
  },
});
