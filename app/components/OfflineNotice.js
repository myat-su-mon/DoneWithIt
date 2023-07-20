import { StyleSheet, View } from "react-native";
import React from "react";
import AppText from "./Text";
import colors from "../config/colors";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  }

  return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 50,
    position: "absolute",
    top: 60,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
  },
});
