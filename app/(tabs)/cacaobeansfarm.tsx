import { View, Text} from "react-native"
import { styles } from "../../assets/Styles";

export default function cacaoScreen(){
    return (
        <View style = {styles.bodyContainer}>
        <Text style={styles.tabName}> Cacao Screen </Text>
        </View>
    );
}