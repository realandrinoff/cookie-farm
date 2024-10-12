import { View, Text} from "react-native"
import {styles} from "../../assets/Styles"
import { LevelContext, LevelDispatchContext } from "../../levelSystem/data/context/levelContext";
import { useContext, useEffect } from "react";
import { CookiesBakedContext } from "../../levelSystem/data/context/cookiesBakedContext";
import { LevelMap } from "../../levelSystem/maps/levelMap";


export default function homeScreen(){
    const levelCount = useContext(LevelContext);
    const dispatchLevel = useContext(LevelDispatchContext);
    const cookiesBakedCount = useContext(CookiesBakedContext);
    if (cookiesBakedCount >= LevelMap.get(levelCount)) {
        dispatchLevel({
            type: "add",
            value: 1
        })
    }
    return (
        <View style = {styles.bodyContainer}>
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