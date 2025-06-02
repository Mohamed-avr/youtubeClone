// VideoScreen.js
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function VideoScreen() {
  const route = useRoute();
  const { videoID } = route.params;
  const { videoInfo } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#000" }}>Now Playing Video #{videoID}</Text>
      <Text style={{ color: "#000" }}>video name: {videoInfo.nameV}</Text>
      <Text style={{ color: "#000" }}>
        channel name: {videoInfo.channelName}
      </Text>
      <Text style={{ color: "#000" }}>video likes: {videoInfo.videoLikes}</Text>
    </View>
  );
}
