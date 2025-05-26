import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StyleSheet,
  StatusBar,
} from "react-native";

// Components
import Video from "../Components/Video";

export default function HomeScreen() {
  return (
    <View
      style={[
        styles.container,
        {
          paddingHorizontal: Platform.OS === "android" ? 0 : 0,
          marginTop: StatusBar.currentHeight,
        },
      ]}
    >
      <View style={styles.videosContainer}>
        {[...Array(2)].map((_, i) => (
          <Video key={i} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: "rgba(15, 15, 15, 1)",
  },
  videosContainer: {
    marginTop: 32,
    width: "100%",
    height: "85%",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 16,
    overflow: "hidden",
  },
});
