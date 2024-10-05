import { View, Text } from "react-native";
import { styles } from "../../assets/Styles";
import React from "react";
import { CacaoButton } from "../../gameFiles/elements/cacaoBeanFarmElements";
import { CacaoFarmLevel } from "../../gameFiles/elements/cacaoBeanFarmElements";

export default function cacaoScreen() {
  return (
    <View style={styles.bodyContainer}>
       
      <Text style={styles.tabName}> Cacao Beans Farm </Text>
      <CacaoFarmLevel />
      <CacaoButton />


    </View>
  );
}
