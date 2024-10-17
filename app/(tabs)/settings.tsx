import { View, Text} from "react-native"
import { styles } from "../../assets/Styles";
import { ResetButton } from "../../settingsMenu/elements/reset";
import { ThemeContext } from "../context/themeContext";
import { useContext } from "react";
import { ThemeButton } from "../../settingsMenu/elements/ThemeButton";

export default function settingsScreen(){
    const currentTheme = useContext(ThemeContext);
    return (
        <View style = {[styles.settingsMenu, currentTheme == 0 ? styles.bodyContainerLight : styles.bodyContainerDark]}>
        <Text style={styles.tabName}> Settings </Text>
        <ResetButton />
        {/* <ThemeButton /> */}
        </View>
    );
}