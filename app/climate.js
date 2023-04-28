import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import climateImage from "../assets/images/climate.png";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ClimateScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={climateImage} style={styles.image} resizeMode="cover" />

      <Pressable onPress={() => router.back()} style={styles.back}>
        <Entypo name="chevron-left" size={24} color="white" />
      </Pressable>

      <View style={styles.footer}>
        <Text style={styles.labelTemp}>Exterior 34° - Interior 24°</Text>

        <View style={styles.controlTemp}>
          <View style={styles.iconButtonContainer}>
            <MaterialCommunityIcons name="power" size={40} color="white" />
            <Text style={styles.iconButtonText}>On</Text>
          </View>

          <View style={styles.temperatureContainer}>
            <Entypo name="chevron-left" size={34} color="gray" />
            <Text style={styles.temperatureText}>28</Text>
          </View>
          <View style={styles.iconButtonContainer}>
            <MaterialCommunityIcons name="car-door" size={42} color="gray" />
            <Text style={styles.iconButtonText}>Vent</Text>
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
    height: "70%",
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
    padding: 12,
    marginBottom: 20,
    marginTop: "auto",
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
    justifyContent: "space-around",
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
