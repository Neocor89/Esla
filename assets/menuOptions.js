import { MaterialCommunityIcons } from "@expo/vector-icons";

export default [
  {
    name: "Controls",
    iconName: "car",
    href: "/controls",
  },
  {
    name: "Climate",
    iconName: "fan",
    href: "/climate",
  },
  {
    name: "Location",
    iconName: "map-marker",
    href: "/location",
  },
  {
    name: "Summon",
    iconName: "ship-wheel",
    href: "/summon",
  },
  {
    name: "Security",
    iconName: "shield-check",
    href: "/security",
  },
  {
    name: "Upgrades",
    iconName: "update",
    href: "/upgrades",
  },
  {
    name: "Service",
    iconName: "wrench",
    href: "/services",
  },
  {
    name: "Roadside",
    icon: () => (
      <MaterialCommunityIcons name="sign-caution" size={24} color="gray" />
    ),
    href: "/roadside",
  },
];
