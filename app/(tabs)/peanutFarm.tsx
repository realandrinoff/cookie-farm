import { View, Text, Image } from "react-native";
import { styles } from "../../assets/Styles";
import React, { useContext } from "react";
import { PeanutButton, PeanutFarmLevel } from "../../gameFiles/elements/peanutFarmElements";
import { LevelContext } from "../../levelSystem/data/context/levelContext";

export default function peanutScreen() {
  const levelCount = useContext(LevelContext);

  return (
      <><View style={levelCount < 5 ? [styles.bodyContainer, styles.lockedContainer]: styles.HIDDEN}>
        <Image style={styles.lockedIcon} source={require("../../assets/images/locked.png")} />
        <Text style={styles.lockedText}>Peanut Farm unlocks on level 5...</Text>
      </View>
      <View style={levelCount>= 5 ? styles.bodyContainer : styles.HIDDEN}>
          <Text style={styles.tabName}> Peanut Farm </Text>
          <PeanutFarmLevel />
          <PeanutButton />
        </View></>
    )
  }

