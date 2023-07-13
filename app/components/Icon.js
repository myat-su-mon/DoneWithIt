import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}) => {
  return (
    <View style={styles.circle}>
      <MaterialCommunityIcons name={name} size={size} color={iconColor} />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  circle: {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor,
    justifyContent: "center",
    alignItems: "center",
  },
});
