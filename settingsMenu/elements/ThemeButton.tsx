import { useContext } from "react";
import { ThemeContext, ThemeDispatchContext } from "../../app/context/themeContext";
import {Text} from "react-native"

export const ThemeButton = () => {
    const currentTheme = useContext(ThemeContext);
    const dispatchTheme = useContext(ThemeDispatchContext);
    return(
        <Text onPress={
            () => {
                dispatchTheme({
                    type: "change"
                })
            }
        }>{currentTheme == 0 ? "SWITCH TO DARK" : "SWITCH TO LIGHT"}</Text>
    )
}