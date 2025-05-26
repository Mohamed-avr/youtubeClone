import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  Pressable,
} from "react-native";
import React from "react";

export default function Video() {
  return (
    <View style={[styles.container, {}]}>
      <View style={styles.topContainer}> </View>
      <View style={styles.bottomContainer}>
        <View style={styles.top}>
          <View style={styles.insideTop}>
            <View style={styles.channelAvatar}></View>
            <View style={styles.TitlesContent}>
              <Text style={styles.videoTitle}>The racism and truth</Text>
              <Text style={styles.videoDetails}>
                Dark Country Music - 34K views - 2 months ago
              </Text>
            </View>
          </View>
          <Pressable
            onPress={() => {
              alert("Video options pressed");
            }}
            style={{
              height: 30,
              left: 0,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              transform: [{ rotate: "90deg" }],
            }}
          >
            <Text style={styles.settingsDots}>{". . . "}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#101010",
    width: "100%",
    height: 270,
    margin: 0,
  },

  topContainer: {
    width: "100%",
    height: 180,
    backgroundColor: "hsl(214, 68.90%, 57.10%)",
  },
  bottomContainer: {
    width: "100%",
    height: 90,
    padding: 14,
    backgroundColor: "#101010",
  },

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 8,
  },

  insideTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  channelAvatar: {
    width: 35,
    height: 35,
    backgroundColor: "#888",
    borderRadius: 50,
  },
  TitlesContent: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 4,
    overflow: "hidden",
  },
  videoTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#E4E4E4",
    width: 300,
    lineHeight: 22,
    height: "auto",
  },
  videoDetails: {
    fontSize: 12,
    fontWeight: "400",
    color: "#A7A7A7",
    width: 300,
  },

  settingsDots: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "800",
    rotation: "30deg",
    left: 2,
    top: -3,
  },
});
