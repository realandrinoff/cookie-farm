import { View, Text } from "react-native";
import { styles } from "../../assets/Styles";
import React from "react";
import { CacaoButton } from "../../gameFiles/cacaoBeanFarmElements";
import { CacaoFarmLevel } from "../../gameFiles/cacaoBeanFarmElements";

export default function cacaoScreen() {
  return (
    <View style={styles.bodyContainer}>
       <CacaoFarmLevel />
      <Text style={styles.tabName}> Cacao Beans Farm </Text>
      
      <CacaoButton />


    </View>
  );
}
