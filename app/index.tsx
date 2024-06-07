import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { data } from "@/data/data";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GradientComponent from "@/components/Gradient";
import { DinamicBackgroundColor } from "@/components/DinamicBackgroundColor";
import NikeLogo from "@/assets/images/nike-logo.png";

// import { Container } from './styles';

const WIDTH = Dimensions.get("screen").width;
const MARGIN = 20;

const ItemDescription: React.FC = () => {
  const insets = useSafeAreaInsets();
  const flatlistRef = useRef<FlatList>(null);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const handleScrollFlatlist = (index: number) => {
    flatlistRef.current?.scrollToIndex({ animated: true, index });
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.name}>{data[0].name}</Text>

      <View style={styles.flatlistContainer}>
        <Image source={NikeLogo} style={styles.nikeLogo} />
        <FlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          ref={flatlistRef}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          data={data[0].colors}
          renderItem={({ item }) => {
            return (
              <View style={styles.listContainer}>
                <Image source={item.colorImage} style={styles.image} />
              </View>
            );
          }}
        />
      </View>
      <View style={styles.containerColors}>
        {data[0].colors.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                handleScrollFlatlist(index);
              }}
              style={[
                styles.borderColorsComponent,
                { borderColor: item.backgroundColor },
              ]}
            >
              <View
                key={index}
                style={[
                  styles.colorsComponent,
                  { backgroundColor: item.backgroundColor },
                ]}
              ></View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default ItemDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  flatlistContainer: {
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    width: WIDTH,
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  nikeLogo: {
    width: "95%",
    height: "95%",
    resizeMode: "contain",
    opacity: 0.2,
    position: "absolute",
    //backgroundColor: "orange",
  },
  image: {
    resizeMode: "contain",
    maxWidth: "70%",
    transform: [{ scaleX: -1 }]
  },
  containerColors: {
    flexDirection: "row",
  },
  borderColorsComponent: {
    width: 50,
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  colorsComponent: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
});
