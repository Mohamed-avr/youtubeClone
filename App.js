import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// Screens
import MainTab from "./Navigation/MainTab/Index";
import VideoScreen from "./Screens/VideoScreen";
import PhoneWrapper from "./Components/PhoneWrapper";

export default function App() {
  return (
    <PhoneWrapper>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="MainTab" component={MainTab} />
          <Stack.Screen name="VideoScreen" component={VideoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PhoneWrapper>
  );
}
