// VideoScreen.js
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Icon,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

// to be commited
export default function VideoScreen({
  //  for temporary usage
  channelName = "wild camp",
  channelThumbnail = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  videoTitle = "Surviving a deadly blizzard | -21 C Challenge in the frozen Wilderness",
  videoViews = "34K views",
  videoUploadDate = "2 months ago",
  videoDescription = "This is a sample video description.",
  videoHashs = "#videohash #jdid #ksks #kkls",
  videoComments = {
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
  videoLikes = 243,
  videoDislikes = 12,
}) {
  const navigation = useNavigation();
  const route = useRoute();
  const { videoID } = route.params;
  const { videoInfo } = route.params;

  return (
    <View style={styles.Container}>
      <View style={styles.VideoHeight}>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>
      {/*  titles content  */}
      <View style={styles.TitlesContent}>
        <View style={styles.videoDetails}>
          <Text style={styles.videoTitle}>{videoTitle}</Text>
          <Text style={styles.videoDetails}>
            {videoViews} • {videoUploadDate}{" "}
            <Text style={styles.seeMoreButton}> ...more</Text>
          </Text>
        </View>
      </View>

      <View style={styles.channel}>
        <View style={styles.channelInfo}>
          {/* <Text style={styles.channelSubscribers}>{channelSubscribers}</Text> */}
        </View>

        <View style={{ backgroundColor: "#eee", flexDirection: "row" }}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Ionicons name="chevron-down-outline" size={24} color="black" />
        </View>
      </View>

      <Pressable
        style={{ width: "90%", height: 50, backgroundColor: "#fff" }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text>Go back ......... </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: "flex-start",
    marginTop: StatusBar.currentHeight,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    height: "100%",
    backgroundColor: "rgba(15, 15, 15, 1)",
  },
  VideoHeight: {
    width: "100%",
    height: 250,
    position: "relative",
    backgroundColor: "hsl(214, 68.90%, 57.10%)",
  },

  TitlesContent: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 4,
    overflow: "hidden",
    padding: 12,
    width: "100%",
    paddingHorizontal: 24,
  },
  videoTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#E4E4E4",
    width: "100%",
    lineHeight: 22,
    height: "auto",
  },
  videoDetails: {
    fontSize: 12,
    fontWeight: "400",
    color: "#A7A7A7",
    width: "100%",
    marginTop: 8,
  },

  settingsDots: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "800",
    rotation: "30deg",
    left: 1,
    top: -3,
  },

  seeMoreButton: {
    fontSize: 12,
    fontWeight: "400",
    color: "#eee",
  },

  channel: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "red",
  },
});
