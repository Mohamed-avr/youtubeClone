import { View, Text, SafeAreaView, Platform } from "react-native";

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(15, 15, 15, 1)",
        color: "#fff",
      }}
    >
      <Text style={{ color: "#fff" }}>Settings Screen</Text>
    </View>
  );
}
export default SettingsScreen;
