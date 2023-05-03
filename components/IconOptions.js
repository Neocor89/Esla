import { View, Text, Pressable } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

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
