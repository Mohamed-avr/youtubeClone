import { View, Text } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

export default function HomeTopNav() {
  return (
    <View
      style={{
        width: "100%",
        height: 60,
        backgroundColor: "#333",
        padding: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Entypo name="youtube" size={24} color="red" />
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "medium",
            textAlign: "center",

            textTransform: "uppercase",
          }}
        >
          youtube
        </Text>
      </View>
    </View>
  );
}
