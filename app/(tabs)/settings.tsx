import { View, Text} from "react-native"
import { styles } from "../../assets/Styles";

export default function settingsScreen(){
    return (
        <View style = {styles.bodyContainer}>
        <Text style={styles.tabName}> Settings </Text>
        </View>
    );
}