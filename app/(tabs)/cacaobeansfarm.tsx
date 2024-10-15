import { View, Text, Image } from "react-native";
import { styles } from "../../assets/Styles";
import React, { useContext } from "react";
import { CacaoButton } from "../../gameFiles/elements/cacaoBeanFarmElements";
import { CacaoFarmLevel } from "../../gameFiles/elements/cacaoBeanFarmElements";
import { LevelContext } from "../../levelSystem/data/context/levelContext";
import { ThemeContext } from "../context/themeContext";

export default function cacaoScreen() {
  const levelCount = useContext(LevelContext);
  const currentTheme = useContext(ThemeContext);
  return (
      <><View style={levelCount < 2 ? [(currentTheme == 0 ? styles.bodyContainerLight : styles.bodyContainerDark), styles.lockedContainer] : styles.HIDDEN}>
        <Image style={styles.lockedIcon} source={require("../../assets/images/locked.png")} />
        <Text style={styles.lockedText}>Cacao Farm unlocks on level 2...</Text>
      </View>
      <View style={levelCount >= 2 ? styles.bodyContainerLight : styles.HIDDEN}>
          <Text style={styles.tabName}> Cacao Farm </Text>
          <CacaoFarmLevel />
        </View></>
    )
  }

