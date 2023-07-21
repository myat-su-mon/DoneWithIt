import React from "react";
import Screen from "./app/components/Screen";
import { Button } from "react-native";
import * as Notifications from "expo-notifications";

export default function App() {
  const showNotification = async () => {
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Congratulations",
          body: "Daily Quiz has been unlocked",
        },
        trigger: { seconds: 1 },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen>
      <Button title="tap me" onPress={() => showNotification()} />
    </Screen>
  );
}
