import { View, Text, Image } from "react-native";
import { styles } from "../../assets/Styles";
import React, { useContext } from "react";
import { CacaoButton } from "../../gameFiles/elements/cacaoBeanFarmElements";
import { CacaoFarmLevel } from "../../gameFiles/elements/cacaoBeanFarmElements";
import { LevelContext } from "../../levelSystem/data/context/levelContext";

export default function cacaoScreen() {
  const levelCount = useContext(LevelContext);
  if (levelCount < 2){
    return (
      <View style = {[styles.bodyContainer, styles.lockedContainer]}>
      <Image style={styles.lockedIcon} source={require("../../assets/images/locked.png")}/>
      <Text style ={styles.lockedText}>Cacao Farm unlocks on level 2...</Text>
      </View>
    )
  }
  else{return (
    <View style={styles.bodyContainer}>
       
      <Text style={styles.tabName}> Cacao Beans Farm </Text>
      <CacaoFarmLevel />
      <CacaoButton />


    </View>
  );}
}
