import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import car from "../assets/images/car.png";
import menuOptions from "../assets/menuOptions";
import MenuOption from "../components/MenuOption";
import { useState } from "react";

const Controls = () => {
  const [charging, setCharging] = useState(false);
  const [locking, setLocking] = useState(false);
  const [fresh, setFresh] = useState(false);
  const [drive, setDrive] = useState(false);

  const [toggle, setToggle] = useState(false);

  const toggleIcon = () => {
    setToggle(!toggle);
  };
  // <Ionicons name="car-sport" size={24} color="black" />
  return (
    <View style={styles.controls}>
      <Pressable onPress={() => setLocking(!locking && toggleIcon)}>
        <Entypo
          name={toggle ? "lock-open" : "lock"}
          size={26}
          color={locking ? "white" : "gray" && toggle ? "white" : "gray"}
        />
      </Pressable>

      <Pressable onPress={() => setFresh(!fresh)}>
        <MaterialCommunityIcons
          name="fan"
          size={26}
          color={fresh ? "white" : "gray"}
        />
      </Pressable>

      <Pressable onPress={() => setCharging(!charging)}>
        <FontAwesome5
          name="bolt"
          size={26}
          color={charging ? "#01de7c" : "gray"}
        />
      </Pressable>

      <Pressable onPress={() => setDrive(!drive)}>
        <Ionicons
          name="car-sport-sharp"
          size={26}
          color={drive ? "white" : "gray"}
        />
      </Pressable>
    </View>
  );
};
//
export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My Model S</Text>
          <View style={styles.batteryContainer}>
            <FontAwesome name="battery-3" size={24} color="gray" />
            <Text style={styles.percent}>80%</Text>
          </View>
          <Text style={styles.subtitle}>Parked</Text>
        </View>

        <FontAwesome name="user-circle" size={30} color="gray" />
      </View>

      <Image style={styles.image} source={car} resizeMode="contain" />

      {/* <Controls /> */}

      {/* Render List Menu Options */}
      <FlatList
        data={menuOptions}
        showsVerticalScrollIndicator={false}
        renderItem={MenuOption}
        // Integrate Data component for Scrolling
        ListHeaderComponent={Controls}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818",
  },
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  batteryContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
  },
  title: {
    fontSize: 24,
    color: "#eee",
    fontWeight: "bold",
    marginBottom: 8,
  },
  percent: {
    color: "gray",
    fontWeight: "500",
    marginLeft: 5,
  },
  subtitle: {
    color: "gray",
    fontWeight: "500",
    marginBottom: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
});
