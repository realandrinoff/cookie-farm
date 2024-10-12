import { View, Text} from "react-native"
import { styles } from "../../assets/Styles";
import { ResetButton } from "../../settingsMenu/elements/reset";

export default function settingsScreen(){
    return (
        <View style = {styles.bodyContainer}>
        <Text style={styles.tabName}> Settings </Text>
        <ResetButton />
        </View>
    );
}