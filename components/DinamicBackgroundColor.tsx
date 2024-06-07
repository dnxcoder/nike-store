import React from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import GradientComponent from "./Gradient";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const DinamicBackgroundColor: React.FC<{
  colors: string[];
  scrollX: Animated.Value;
}> = ({ colors, scrollX }) => {
  const styles = createStyles();

  const color = scrollX.interpolate({
    inputRange: colors.map((_, index) => index * WIDTH),
    outputRange: colors.map((color, index) => color),
  });

  return (
    <Animated.View
      style={[styles.container, { backgroundColor: color }]}
    >
      
    </Animated.View>
  );
};

const createStyles = () => {
  return StyleSheet.create({
    container: {
      width: WIDTH,
      height: HEIGHT,
      ...StyleSheet.absoluteFillObject,
    },
    indicatorDot: {
      height: 10,
      width: 10,
      borderRadius: 5,
      backgroundColor: "white",
      margin: 10,
    },
  });
};

export { DinamicBackgroundColor };
