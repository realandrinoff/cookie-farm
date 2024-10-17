import { View, Text} from "react-native"
import {styles} from "../../assets/Styles"
import { LevelContext, LevelDispatchContext } from "../../levelSystem/data/context/levelContext";
import { useContext, useEffect, useState } from "react";
import { CookiesBakedContext } from "../../levelSystem/data/context/cookiesBakedContext";
import { LevelMap } from "../../levelSystem/maps/levelMap";
import { ThemeContext } from "../context/themeContext";

export default function homeScreen(){
    const levelCount = useContext(LevelContext);
    const dispatchLevel = useContext(LevelDispatchContext);
    const cookiesBakedCount = useContext(CookiesBakedContext);
    const currentTheme = useContext(ThemeContext);
    

    if (cookiesBakedCount >= LevelMap.get(levelCount)) {
        dispatchLevel({
            type: "add",
            value: 1
        })
    }
    return (
        <View style = {currentTheme == 0 ? styles.bodyContainerLight : styles.bodyContainerDark}>
        <Text style = {styles.mainLogo}>COOKIE FARM</Text>
        <Text style={styles.levelCounter}>Level: {levelCount}</Text>
        <Text style={styles.toNextLevelCounter}>To next level: {cookiesBakedCount} / {LevelMap.get(levelCount)}</Text>
        {/* <Text style={styles.testButtons} onPress={
            () => {
                dispatchLevel({
                    type: "add",
                    value: 1
                })
            }
        }> +1 level</Text>
        <Text
        style={styles.testButtons}
        onPress={()=> {
            dispatchLevel({
                type: "reset",
                value: 1
            })
        }}>reset level</Text> */}
        </View>
    );
}