import { View, Text } from "react-native";
import { styles } from "../../assets/Styles";
import React from "react";
import { PeanutButton, PeanutFarmLevel } from "../../gameFiles/peanutFarmElements";

export default function cacaoScreen() {
  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.tabName}> Peanut Farm </Text>
      <PeanutFarmLevel />
      <PeanutButton />
    </View>
  );
}
