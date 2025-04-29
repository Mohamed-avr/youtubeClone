import { View, Text } from "react-native";

import {
  BottomTabBar,
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useIsFocused } from "@react-navigation/native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(15, 15, 15, 1)",
      }}
    >
      <Text>Home Screen</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(15, 15, 15, 1)",
      }}
    >
      <Text>Settings Screen</Text>
    </View>
  );
}

function PayScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>PayS Screen</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            width: "auto",
            margin: 24,
            paddingBottom: 4,
            marginBottom: 16,
            height: "auto",
            paddingTop: 8,
            borderRadius: 50,
            elevation: 0,
            shadowColor: "transparent",
            backgroundColor: "rgba(39, 38, 38, 1)",
            borderTopWidth: 0,
            borderWidth: 0,
            borderColor: "#d8d8d8",
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  color: focused ? "red" : "#fff",
                  fontSize: 12.5,
                  fontWeight: "medium",
                }}
              >
                Home
              </Text>
            ),
            tabBarIcon: ({ focused, color, size }) => {
              const isFocused = useIsFocused();
              const iconColor = isFocused ? "red" : "#fff";
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
            tabBarLabelStyle: { fontSize: 12.5 },
            tabBarIcon: ({ focused, color, size }) => {
              <AntDesign name="home" size={24} color="black" />;
            },
          }}
          name="Settings"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
