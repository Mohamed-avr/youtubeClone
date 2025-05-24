import { View, Text } from "react-native";

function AccountScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(15, 15, 15, 1)",
      }}
    >
      <Text style={{ color: "#fff" }}>Account Screen</Text>
    </View>
  );
}

export default AccountScreen;
