import { Text, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function MenuOption({ item }) {
  return (
    //: Display Icon
    <Link href={item.href} asChild>
      <Pressable style={styles.options}>
        {item.icon ? (
          <item.icon />
        ) : (
          <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
        )}

        <Text style={styles.optionText}>{item.name}</Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color="gray"
          style={{ marginLeft: "auto" }}
        />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  options: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
  },
  optionText: {
    color: "#eee",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
