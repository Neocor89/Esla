import { Text, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function IconOptions({ iconType, text }) {
  const [color, setColor] = useState("gray"); // initial color
  const toggleColor = () => {
    // change color to white if gray, or to gray if white
    // style={[styles.button, {backgroundColor: color}]} onPress={toggleColor
    color === "gray" ? setColor("white") : setColor("gray");
  };

  return (
    <Pressable
      onPress={() => toggleColor(color)}
      style={styles.iconButtonContainer}
    >
      <MaterialCommunityIcons name={iconType} size={30} color={color} />
      <Text style={styles.iconButtonText}>{text}</Text>
    </Pressable>
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
