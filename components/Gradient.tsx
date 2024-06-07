import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StyleSheetProperties,
  ViewStyle,
  Animated,
} from "react-native";
import Svg, { Defs, RadialGradient, Stop, Rect } from "react-native-svg";

interface GradientProps {
  gradiendColors: string[];
  gradientType: "radius" | "linearHorizontal" | "linearVertical";
  style: ViewStyle;
}

const GradientComponent: React.FC<GradientProps> = ({
  gradiendColors,
  gradientType,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      {gradientType === "radius" && (
        <Svg height="100%" width="100%">
          <Defs>
            <RadialGradient
              id="grad"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              {gradiendColors.map((color, index) => {
                return (
                  <Stop
                    offset={`${index * 100}%`}
                    stopColor={color}
                    stopOpacity="1"
                  />
                );
              })}
              {/* <Stop offset="0%" stopColor="#4c669f" stopOpacity="1" />
              <Stop offset="100%" stopColor="#192f6a" stopOpacity="1" /> */}
            </RadialGradient>
          </Defs>
          <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
        </Svg>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
  },
  textContainer: {
    position: "absolute",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: "#fff",
  },
});

export default GradientComponent;
