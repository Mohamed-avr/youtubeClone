import {
  View,
  Platform,
  StyleSheet,
  StatusBar,
  ScrollView,
  Pressable,
} from "react-native";
import { navigation } from "@react-navigation/native";

// Components
import Video from "../../Components/VideoTemplate";
import HomeTopNav from "../../Components/HomeTopNav";
import VideoTemplate from "../../Components/VideoTemplate";

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
          height: "84%",
          // overflow: "hidden",
          // backgroundColor: "rgba(15, 15, 15, 1)",
        }}
      >
        <ScrollView
          contentContainerStyle={{ alignItems: "center" }}
          showsVerticalScrollIndicator={false}
          bounces={true}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <View style={styles.videosContainer}>
            {[...Array(4)].map((_, i) => (
              <Pressable
                key={i}
                onPress={() =>
                  navigation.navigate(
                    "VideoScreen",
                    //   passing parameters
                    {
                      videoID: i,
                      videoInfo: {
                        nameVideo:
                          "surviving a deadly blizzard | -21 C Challenge in the frozen Wilderness",
                        channelName: "Channel Name",
                        videoLikes: 243,
                        videoDescription: "This is a sample video description.",
                        videoHashs: "#videohash #jdid #ksks #kkls",
                        videoComments: {
                          comment1: {
                            user: "User1",
                            comment: "Great video!",
                            likes: 10,
                            replies: [
                              {
                                user: "User2",
                                comment: "I agree!",
                                likes: 5,
                              },
                            ],
                          },
                          comment2: {
                            user: "User3",
                            comment: "Nice content!",
                            likes: 8,
                            replies: [],
                          },
                        },
                        videoViews: 1000,
                        videoUploadDate: "2025-06-10",
                      },
                    }
                  )
                }
              >
                <VideoTemplate key={i} />
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
    width: "100%",
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
