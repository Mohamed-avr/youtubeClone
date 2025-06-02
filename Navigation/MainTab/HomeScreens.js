import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StyleSheet,
  StatusBar,
  ScrollView,
  Pressable,
} from "react-native";

// Components
import Video from "../../Components/Video";
import HomeTopNav from "../../Components/HomeTopNav";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={[
        styles.container,
        {
          paddingHorizontal: Platform.OS === "android" ? 0 : 0,
          marginTop: StatusBar.currentHeight,
          zIndex: 1, // Ensure the top nav is above the videos
        },
      ]}
    >
      <HomeTopNav />

      <View
        style={{
          width: "100%",
          height: "79%",
          overflow: "hidden",
          backgroundColor: "rgba(15, 15, 15, 1)",
        }}
      >
        <ScrollView
          contentContainerStyle={{ alignItems: "center" }}
          showsVerticalScrollIndicator={true}
          bounces={true}
          style={{
            width: "100%",
            height: "79%",
          }}
        >
          <View style={styles.videosContainer}>
            {[...Array(4)].map((_, i) => (
              <Pressable
                key={i}
                onPress={() =>
                  navigation.navigate("VideoScreen", {
                    videoID: i,
                    videoInfo: {
                      nameV: "videooo ",
                      channelName: "Channel Name",
                      videoLikes: 243,
                    },
                  })
                }
              >
                <Video key={i} />
              </Pressable>
            ))}
          </View>
        </ScrollView>
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
    height: "100%",
    backgroundColor: "rgba(15, 15, 15, 1)",
  },
  videosContainer: {
    marginTop: 32,
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 16,
    overflow: "hidden",
  },
});
