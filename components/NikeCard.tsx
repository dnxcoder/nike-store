import { NikePropsCard } from "@/types/NikeCardProps";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import GradientComponent from "./Gradient";
import { router } from "expo-router";


// import { Container } from './styles';

const WIDTH = Dimensions.get("screen").width;
const MARGIN = 70;

const NikeCard: React.FC<{ props: NikePropsCard }> = ({ props }) => {
  const { name, colors, edition, price } = props;

  const handleGoToPage = (page: string) => {
    router.push("itemDescription");
  };

  return (
    <TouchableOpacity
      onPress={() => {
        handleGoToPage("loco");
      }}
      style={[styles.container, { backgroundColor: colors[0].backgroundColor }]}
    >
      <GradientComponent
        gradientType="radius"
        gradiendColors={["#000", colors[0].backgroundColor]}
        style={{
          overflow: "hidden",
          borderRadius: 20,
        }}
      />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={colors[0].colorImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.edition}>{edition}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NikeCard;

export const styles = StyleSheet.create({
  container: {
    height: 400,
    width: WIDTH - MARGIN,
    alignSelf: "center",
    borderRadius: 30,
    padding: 20,
    marginTop: 20,
  },
  textContainer: {
    flex: 1,
  },

  name: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  edition: {
    color: "#fff",
    fontSize: 22,
  },
  price: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },

  imageContainer: {
    flex: 3,
  },
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
    resizeMode: "contain",
    // backgroundColor: "orange",
    position: "absolute",
    top: "0%",
    left: "-0%",
    transform: [{ scale: 1.3 }],
  },
});
