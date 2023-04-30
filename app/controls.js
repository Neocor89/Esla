import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import carControl from "../assets/images/controls-car.png";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function ControlsScreen() {
  const router = useRouter();

  const [toggle, setToggle] = useState(false);

  const toggleIcon = () => {
    setToggle(!toggle);
  };
  const [on, setOn] = useState(false);
  const [honk, setHonk] = useState(false);
  const [remote, setRemote] = useState(false);
  const [homeLink, setHomeLink] = useState(false);

  //+ RESTART HERE 👇
  // TODO - LAYOUT FOR ICONS | CHANGE ONPRESS METHODE AND USESTATE

  return (
    <View style={styles.container}>
      <Image source={carControl} style={styles.image} resizeMode="contain" />

      <Pressable onPress={() => router.back()} style={styles.back}>
        <AntDesign name="left" size={24} color="white" />
      </Pressable>

      <View style={styles.footer}>
        <View style={styles.controlTemp}>
          {/* CAR LIGHT */}
          <Pressable
            onPress={() => setOn(!on) && toggleIcon}
            style={styles.iconButtonContainer}
          >
            <MaterialCommunityIcons
              name="car-light-high"
              size={30}
              color={on ? "white" : "gray"}
            />
            <Text style={toggle ? styles.iconButtonText : styles.iconButton}>
              flash
            </Text>
          </Pressable>

          {/* CAR HONK */}
          <Pressable
            onPress={() => setHonk(!honk)}
            style={styles.iconButtonContainer}
          >
            <MaterialCommunityIcons
              name="trumpet"
              size={30}
              color={honk ? "white" : "gray"}
            />
            <Text style={styles.iconButtonText}>Honk</Text>
          </Pressable>

          {/* CAR REMOTE */}
          <Pressable
            onPress={() => setRemote(!remote)}
            style={styles.iconButtonContainer}
          >
            <MaterialCommunityIcons
              name="remote"
              size={30}
              color={remote ? "white" : "gray"}
            />
            <Text style={styles.iconButtonText}>01:45</Text>
          </Pressable>

          {/* CAR HOMELINK */}
          <Pressable
            onPress={() => setHomeLink(!homeLink)}
            style={styles.iconButtonContainer}
          >
            <FontAwesome5
              name="house-damage"
              size={26}
              color={homeLink ? "white" : "gray"}
            />
            <Text style={styles.iconButtonText}>Homelink</Text>
          </Pressable>

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
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
});
