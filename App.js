import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { LaunchArguments } from "react-native-launch-arguments";

const args = LaunchArguments.value();

console.log("Launch Arguments: ", args);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Launch Arguments:</Text>
      <Text>{JSON.stringify(args)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
