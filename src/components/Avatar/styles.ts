import { StyleSheet } from "react-native";
import { theme } from "@/app/theme";

export const styles = StyleSheet.create({
 image: {
  width: 25,
  height: 25,
  borderRadius: 20,
  borderColor: theme.colors.white,
 },
 selected: {
  borderWidth: 2,
  borderColor: "#ffffff",
 }
});
