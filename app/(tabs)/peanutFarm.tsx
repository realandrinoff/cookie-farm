import { View, Text, Image } from "react-native";
import { styles } from "../../assets/Styles";
import React, { useContext } from "react";
import { PeanutButton, PeanutFarmLevel } from "../../gameFiles/elements/peanutFarmElements";
import { LevelContext } from "../../levelSystem/data/context/levelContext";
import { ThemeContext } from "../context/themeContext";

export default function peanutScreen() {
  const levelCount = useContext(LevelContext);
  const currentTheme = useContext(ThemeContext);

  return (
      <><View style={levelCount < 5 ? [currentTheme == 0 ? styles.bodyContainerLight : styles.bodyContainerDark, styles.lockedContainer]: styles.HIDDEN}>
        <Image style={styles.lockedIcon} source={require("../../assets/images/locked.png")} />
        <Text style={styles.lockedText}>Peanut Farm unlocks on level 5...</Text>
      </View>
      <View style={levelCount>= 5 ? styles.bodyContainerLight : styles.HIDDEN}>
          <Text style={styles.tabName}> Peanut Farm </Text>
          <PeanutFarmLevel />
          <PeanutButton />
        </View></>
    )
  }

