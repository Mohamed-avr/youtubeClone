import { useState } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { Svg, Path, Circle, Rect } from "react-native-svg";

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
              <View>
                <Svg
                  width="33"
                  height="22"
                  viewBox="0 0 33 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M5.45182 4.46733C6.04344 4.47135 6.61896 4.57599 7.17838 4.78125C7.74183 4.98248 8.24893 5.3125 8.69969 5.77131C9.15045 6.22609 9.50864 6.83582 9.77426 7.6005C10.0399 8.36518 10.1727 9.31096 10.1727 10.4379C10.1767 11.5004 10.064 12.4502 9.83463 13.2873C9.60925 14.1204 9.28527 14.8247 8.86269 15.4002C8.4401 15.9757 7.93099 16.4144 7.33534 16.7163C6.7397 17.0181 6.0696 17.169 5.32505 17.169C4.54427 17.169 3.85203 17.0161 3.24834 16.7102C2.64867 16.4044 2.16371 15.9858 1.79344 15.4545C1.42317 14.9233 1.19578 14.3156 1.11127 13.6314H3.31475C3.42744 14.1224 3.65684 14.5128 4.00296 14.8026C4.3531 15.0883 4.7938 15.2312 5.32505 15.2312C6.18229 15.2312 6.84233 14.8589 7.30516 14.1143C7.76799 13.3698 7.99941 12.3355 7.99941 11.0114H7.91489C7.71768 11.3655 7.46212 11.6714 7.1482 11.929C6.83428 12.1825 6.4781 12.3777 6.07966 12.5146C5.68525 12.6514 5.26669 12.7198 4.82398 12.7198C4.09955 12.7198 3.44756 12.5468 2.86801 12.2006C2.29249 11.8545 1.8357 11.3796 1.49763 10.7759C1.16359 10.1722 0.994553 9.48201 0.990528 8.70526C0.990528 7.90033 1.17566 7.17791 1.54593 6.538C1.92022 5.89406 2.4414 5.38696 3.10949 5.01669C3.77758 4.6424 4.55835 4.45928 5.45182 4.46733ZM5.45786 6.27841C5.0232 6.27841 4.6308 6.38506 4.28066 6.59837C3.93454 6.80765 3.66086 7.09339 3.45963 7.45561C3.26243 7.8138 3.16382 8.21425 3.16382 8.65696C3.16785 9.09564 3.26645 9.49408 3.45963 9.85227C3.65684 10.2105 3.92448 10.4942 4.26255 10.7035C4.60464 10.9128 4.99503 11.0174 5.43371 11.0174C5.7597 11.0174 6.06356 10.955 6.34529 10.8303C6.62701 10.7055 6.87251 10.5324 7.08179 10.3111C7.2951 10.0857 7.46011 9.83014 7.57682 9.54439C7.69756 9.25864 7.75592 8.95679 7.75189 8.63885C7.75189 8.21626 7.65128 7.82588 7.45005 7.46768C7.25284 7.10949 6.98118 6.82173 6.63506 6.6044C6.29297 6.38707 5.90057 6.27841 5.45786 6.27841ZM12.7534 15.5149C12.3871 15.5149 12.0732 15.3861 11.8116 15.1286C11.55 14.867 11.4212 14.553 11.4253 14.1868C11.4212 13.8246 11.55 13.5147 11.8116 13.2571C12.0732 12.9995 12.3871 12.8707 12.7534 12.8707C13.1075 12.8707 13.4154 12.9995 13.677 13.2571C13.9427 13.5147 14.0775 13.8246 14.0815 14.1868C14.0775 14.4323 14.0131 14.6557 13.8883 14.8569C13.7676 15.0581 13.6066 15.2191 13.4054 15.3398C13.2082 15.4566 12.9908 15.5149 12.7534 15.5149ZM12.7534 9.38743C12.3871 9.38743 12.0732 9.25864 11.8116 9.00106C11.55 8.73946 11.4212 8.42554 11.4253 8.0593C11.4212 7.69709 11.55 7.38719 11.8116 7.12962C12.0732 6.86802 12.3871 6.73722 12.7534 6.73722C13.1075 6.73722 13.4154 6.86802 13.677 7.12962C13.9427 7.38719 14.0775 7.69709 14.0815 8.0593C14.0775 8.30078 14.0131 8.52214 13.8883 8.72337C13.7676 8.9246 13.6066 9.08558 13.4054 9.20632C13.2082 9.32706 12.9908 9.38743 12.7534 9.38743ZM15.2903 14.706V12.9251L20.5364 4.63636H22.0215V7.17188H21.1159L17.5843 12.7681V12.8647H24.9071V14.706H15.2903ZM21.1884 17V14.1626L21.2125 13.3658V4.63636H23.3255V17H21.1884ZM30.8987 4.63636V17H28.659V6.8157H28.5865L25.6948 8.663V6.61044L28.7676 4.63636H30.8987Z"
                    fill="white"
                  />
                </Svg>
              </View>
              <View>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="13"
                  viewBox="0 0 76 13"
                  fill="none"
                >
                  <Path
                    opacity="0.35"
                    d="M52 0.527344H69C70.9178 0.527344 72.4727 2.08222 72.4727 4V9C72.4727 10.9178 70.9178 12.4727 69 12.4727H52C50.0822 12.4727 48.5273 10.9178 48.5273 9V4C48.5273 2.08222 50.0822 0.527344 52 0.527344Z"
                    stroke="white"
                    stroke-width="1.05509"
                  />
                  <Path
                    opacity="0.4"
                    d="M74 5V9.22034C74.8491 8.86291 75.4012 8.0314 75.4012 7.11017C75.4012 6.18894 74.8491 5.35744 74 5Z"
                    fill="white"
                  />
                  <Path
                    d="M50 4C50 2.89543 50.8954 2 52 2H69C70.1046 2 71 2.89543 71 4V9C71 10.1046 70.1046 11 69 11H52C50.8954 11 50 10.1046 50 9V4Z"
                    fill="white"
                  />
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M33.5005 2.58753C35.967 2.58764 38.3393 3.55505 40.1269 5.28982C40.2615 5.42375 40.4766 5.42206 40.6092 5.28603L41.896 3.96045C41.9631 3.89146 42.0006 3.798 42 3.70076C41.9994 3.60353 41.9609 3.51052 41.893 3.44234C37.2011 -1.14745 29.7991 -1.14745 25.1072 3.44234C25.0392 3.51047 25.0006 3.60345 25 3.70069C24.9994 3.79792 25.0367 3.89141 25.1038 3.96045L26.391 5.28603C26.5235 5.42226 26.7388 5.42396 26.8733 5.28982C28.6612 3.55494 31.0337 2.58752 33.5005 2.58753ZM33.5359 6.67235C34.8911 6.67227 36.198 7.18644 37.2025 8.11497C37.3384 8.24674 37.5524 8.24389 37.6849 8.10853L38.9702 6.78295C39.0379 6.71342 39.0754 6.61909 39.0744 6.52108C39.0735 6.42306 39.034 6.32954 38.965 6.26142C35.9059 3.35683 31.1685 3.35683 28.1094 6.26142C28.0403 6.32953 28.0009 6.42311 28 6.52115C27.9991 6.6192 28.0368 6.71352 28.1046 6.78295L29.3895 8.10853C29.522 8.24389 29.736 8.24674 29.8719 8.11497C30.8758 7.18706 32.1816 6.67293 33.5359 6.67235ZM36.1496 9.34267C36.1515 9.44096 36.1137 9.53573 36.0449 9.60459L33.8217 11.8948C33.7565 11.9621 33.6676 12 33.5749 12C33.4822 12 33.3933 11.9621 33.3282 11.8948L31.1045 9.60459C31.0358 9.53568 30.998 9.44088 31.0001 9.34259C31.0021 9.2443 31.0438 9.15123 31.1153 9.08534C32.5351 7.8595 34.6147 7.8595 36.0345 9.08534C36.106 9.15128 36.1476 9.24438 36.1496 9.34267Z"
                    fill="white"
                  />
                  <Path
                    d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z"
                    fill="white"
                  />
                  <Path
                    d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z"
                    fill="white"
                  />
                  <Path
                    d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z"
                    fill="white"
                  />
                  <Path
                    d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z"
                    fill="white"
                  />
                </Svg>
              </View>
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
    // backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    flexDirection: "row",
    paddingHorizontal: 24,
  },
  camera: {
    width: 130,
    height: 32,
    borderRadius: 50,
    marginTop: 0,
    backgroundColor: "#000",
  },
});
