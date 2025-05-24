import { View, Text, StyleSheet, StatusBar, Platform } from "react-native";
import React from "react";

export default function Video() {
  return (
    <View
      style={[
        styles.container,
        {
          paddingHorizontal: 24,
        },
      ]}
    >
      <Text>Video</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "hsl(0, 0.00%, 42.00%)",
    width: "100%",
    height: 250,
    margin: 0,
  },
});
