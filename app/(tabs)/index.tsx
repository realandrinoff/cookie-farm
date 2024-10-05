import { View, Text} from "react-native"
import {styles} from "../../assets/Styles"

export default function homeScreen(){
    return (
        <View style = {styles.bodyContainer}>
        <Text style={styles.tabName}> Cookie bakery </Text>
        <Text style={styles.normalText}></Text>
        </View>
    );
}