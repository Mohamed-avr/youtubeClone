import { useState } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";

export default function PhoneWrapper({ children }) {
  const [PhoneWrapper, setPhoneWrapper] = useState(true);
  const [StatusBar, setStatusBar] = useState(true);
  const [frontCamera, setFrontCamera] = useState(true);

  return (
    <View style={{ flex: 1, backgroundColor: "#111" }}>
      <View style={styles.containerWrapper}>
        {/* <View style={styles.btnOff}></View> */}
        <View
          style={{
            width: "100%",
            height: "100%",
            borderRadius: Platform.OS === "web" ? 60 : 0,
            overflow: "hidden",
            borderColor: "#010103",
            borderWidth: Platform.OS === "web" ? 6 : 0,
          }}
        >
          {Platform.OS === "web" && (
            // <View style={styles.StatusBar}>

            // </View>

            <View style={styles.CameraView}>
              <View style={styles.camera}> </View>
            </View>
          )}

          {children}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerWrapper: {
    width: Platform.OS === "web" ? 393 : "100%",
    height: Platform.OS === "web" ? 852 : "100%",
    borderRadius: Platform.OS === "web" ? 65 : 0,
    borderWidth: Platform.OS === "web" ? 3 : 0,
    borderColor: Platform.OS === "web" ? "#294B4A" : "transparent",
    backgroundColor: Platform.OS === "web" ? "#668789" : "transparent",
    margin: "auto",
    padding: 3,
    zIndex: 10,
    position: "relative",
  },
  btnOff: {
    position: "absolute",
    top: 200,
    left: -5,
    width: 30,
    height: 60,
    borderRadius: 8,
    borderWidth: Platform.OS === "web" ? 3 : 0,
    borderColor: Platform.OS === "web" ? "#294B4A" : "transparent",
    backgroundColor: Platform.OS === "web" ? "#668789" : "transparent",
    zIndex: -100,
  },
  StatusBar: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
  CameraView: {
    width: "100%",
    height: 50,
    backgroundColor: "blur",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
  },
  camera: {
    width: 130,
    height: 32,
    borderRadius: 50,
    marginTop: 0,
    backgroundColor: "#000",
  },
});
