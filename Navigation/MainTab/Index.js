import { View, Text, SafeAreaView, Platform } from "react-native";

import {
  BottomTabBar,
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

// Import Bottom navigation screens
import HomeScreen from "./HomeScreens";
import SettingsScreen from "./SettingsScreen";
import PlusScreen from "./PlusScreen";
import SubscriptionsScreen from "./SubscriptionsScreen";
import AccountScreen from "./AccountScreen";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            width: "100%",
            marginBottom: 45,
            paddingBottom: 4,
            left: 0,
            height: "auto",
            paddingTop: 8,
            borderRadius: 0,
            elevation: 0,
            shadowColor: "transparent",
            backgroundColor: "rgba(185, 185, 185, 0.1)",
            // backgroundColor: "#222",
            borderTopWidth: 0,
            borderWidth: 0,
            borderColor: "#d8d8d8",
            paddingBottom: Platform.OS === "ios" ? 20 : 10,
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  color: focused ? "#fff" : "#999",
                  fontSize: 11,
                  fontWeight: "medium",
                }}
              >
                Home
              </Text>
            ),
            tabBarIcon: ({ focused, color, size }) => {
              const isFocused = useIsFocused();
              const iconColor = isFocused ? "#fff" : "#999";
              return (
                <SimpleLineIcons name="home" size={18} color={iconColor} />
              );
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  color: focused ? "#fff" : "#999",
                  fontSize: 11,
                  fontWeight: "medium",
                }}
              >
                Settings
              </Text>
            ),
            tabBarIcon: ({ focused, color, size }) => {
              const isFocused = useIsFocused();
              const iconColor = isFocused ? "#fff" : "#999";
              return (
                <SimpleLineIcons name="home" size={18} color={iconColor} />
              );
            },
          }}
          name="Settings"
          component={SettingsScreen}
        />

        <Tab.Screen
          options={{
            tabBarLabelStyle: {
              display: "none",
            },
            tabBarIcon: ({ focused, color, size }) => {
              const isFocused = useIsFocused();
              const iconColor = isFocused ? "#fff" : "#999";
              const iconColorFix = "#fff";
              return (
                <View
                  style={{
                    backgroundColor: "#262626",
                    borderRadius: 25,
                    width: 44,
                    height: 44,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 15,
                  }}
                >
                  <AntDesign name="plus" size={20} color={iconColorFix} />
                </View>
              );
            },
          }}
          name="Plus Screen"
          component={PlusScreen}
        />

        <Tab.Screen
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  color: focused ? "#fff" : "#999",
                  fontSize: 11,
                  fontWeight: "medium",
                }}
              >
                Subscriptions
              </Text>
            ),
            tabBarIcon: ({ focused, color, size }) => {
              const isFocused = useIsFocused();
              const iconColor = isFocused ? "#fff" : "#999";
              return (
                <SimpleLineIcons name="home" size={18} color={iconColor} />
              );
            },
          }}
          name="Subscriptions"
          component={SubscriptionsScreen}
        />

        <Tab.Screen
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  color: focused ? "#fff" : "#999",
                  fontSize: 11,
                  fontWeight: "medium",
                }}
              >
                Youu
              </Text>
            ),
            tabBarIcon: ({ focused, color, size }) => {
              const isFocused = useIsFocused();
              const iconColor = isFocused ? "#fff" : "#999";
              return (
                <SimpleLineIcons name="home" size={18} color={iconColor} />
              );
            },
          }}
          name="Account"
          component={AccountScreen}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
