import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";

export default function VideoTemplate() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
        <View
          style={{
            position: "absolute",
            top: 143,
            left: "86%",
            backgroundColor: "#00000080",
            padding: 5,
            borderRadius: 5,
            zIndex: 1,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 12,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            32:23
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.top}>
          <View style={styles.insideTop}>
            <View style={styles.channelAvatar}>
              <ImageBackground
                source={{
                  uri: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
                }}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            </View>
            <View style={styles.TitlesContent}>
              <Text style={styles.videoTitle}>The racism and truth</Text>
              <Text style={styles.videoDetails}>
                Dark Country Music • 34K views • 2 months ago
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
            <Text style={styles.settingsDots}>{". . ."}</Text>
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
    height: 250,
    margin: 0,
    position: "relative",
  },

  topContainer: {
    width: "100%",
    height: 180,
    position: "relative",
    backgroundColor: "hsl(214, 68.90%, 57.10%)",
  },
  bottomContainer: {
    width: "100%",
    height: 80,
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
    overflow: "hidden",
    justifyContent: "center",
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
    left: 1,
    top: -3,
  },
});
