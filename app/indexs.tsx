import NikeCard from "@/components/NikeCard";
import { data } from "@/data/data";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// import { Container } from './styles';

const Index: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container]}>
      <View style={{ marginTop: insets.top }} />
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return <NikeCard props={item} />;
        }}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
