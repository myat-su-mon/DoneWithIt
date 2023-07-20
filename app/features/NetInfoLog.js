import React from "react";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import { Button, View } from "react-native";

export default function App() {
  // NetInfo.fetch().then((netInfo) => console.log(netInfo));
  // const unsubscribe = NetInfo.addEventListener((netInfo) =>
  //   console.log(netInfo)
  // );
  // unsubscribe();

  const netInfo = useNetInfo();

  return <Button disabled={!netInfo.isInternetReachable} title="hi" />;
}
