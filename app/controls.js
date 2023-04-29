import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import carControl from "../assets/images/car-controls.png";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function ControlsScreen() {
  const router = useRouter();

  const [temperature, setTemperature] = useState(28);
  const [on, setOn] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={carControl} style={styles.image} resizeMode="contain" />

      <Pressable onPress={() => router.back()} style={styles.back}>
        <Entypo name="chevron-left" size={24} color="white" />
      </Pressable>

      <View style={styles.footer}>
        <View style={styles.controlTemp}>
          <Pressable
            onPress={() => setOn(!on)}
            style={styles.iconButtonContainer}
          >
            <MaterialCommunityIcons
              name="car-light-high"
              size={30}
              color={on ? "white" : "gray"}
            />
            <Text style={styles.iconButtonText}>{on ? "on" : "off"}</Text>
          </Pressable>

          <MaterialCommunityIcons
            name="trumpet"
            size={30}
            color={on ? "white" : "gray"}
          />
          <MaterialCommunityIcons
            name="remote"
            size={30}
            color={on ? "white" : "gray"}
          />
          <FontAwesome5
            name="house-damage"
            size={26}
            color={on ? "white" : "gray"}
          />

          <View style={styles.temperatureContainer}>
            {/* <Entypo
              onPress={() => setTemperature(temperature - 1)}
              name="chevron-left"
              size={34}
              color="gray"
              />
              <Text style={styles.temperatureText}>{temperature}°</Text>
              <Entypo
              onPress={() => setTemperature(temperature + 1)}
              name="chevron-right"
              size={34}
              color="gray"
            /> */}
          </View>
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
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
});
