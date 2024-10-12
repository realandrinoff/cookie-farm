import { useContext, useState } from "react"
import { Text, View } from "react-native"
import { PeanutDispatchContext } from "../../app/context/peanutContext"
import { CookieDispatchContext } from "../../app/context/cookieContext"
import { CacaoDispatchContext } from "../../app/context/cacaoContext"
import { styles } from "../../assets/Styles"
import { LevelContext, LevelDispatchContext } from "../../levelSystem/data/context/levelContext"
import { CookiesBakedDispatchContext } from "../../levelSystem/data/context/cookiesBakedContext"
import { hasButtercup } from "../../hooks/hasButtercup"
import { hasChocolateChip } from "../../hooks/hasChocolateChipHook"
import { deleteTypesButtercup, deleteTypesChocolateChip } from "../../shop/data/shopData"
import { hasAll } from "../../hooks/all"


export const ResetButton = ({}) =>  {
    const dispatchCacao = useContext(CacaoDispatchContext)
    const dispatch = useContext(CookieDispatchContext)
    const dispatchPeanut = useContext(PeanutDispatchContext)
    const dispatchLevel = useContext(LevelDispatchContext)
    const dispatchCookiesBaked = useContext(CookiesBakedDispatchContext)
    const [isPressed, setIsPressed] = useState(false);
    

    return(
        <View >
            <Text style = {isPressed ? styles.HIDDEN : styles.resetButtonText}onPress={() => {
                setIsPressed(true)
            }}>
            RESET ALL PROGRESS
            </Text>
            <Text style = {isPressed ? styles.resetButtonText : styles.HIDDEN} onPress={() => {
                dispatchCacao({
                    type: "reset",
                    value: 0
                })
                dispatch({
                    type: "reset",
                    value: 0
                })
                dispatchPeanut({
                    type: "reset",
                    value: 0
                })
                dispatchLevel({
                    type: "reset",
                    value: 0
                })
                dispatchCookiesBaked({
                    type: "reset",
                    value: 0
                })
                setIsPressed(false);
                (async() => {
                    await deleteTypesChocolateChip()
                    await deleteTypesButtercup()
                })();
            }}>
                CLICK AGAIN TO CONFIRM
            </Text>
        </View>
    )
}