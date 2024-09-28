    import { View, Text, Button} from "react-native"
    import { styles } from "../../assets/Styles";
    import { addCookies, getCookies } from "../dataManagement";
    export default function bakeryScreen(){
        return (
            <View style = {styles.bodyContainer}>
            <Text style={styles.tabName}> Bakery Screen </Text>

            <Button title="Add Cookies" onPress={ () => 
                addCookies(3)} />
            </View>
        );
    }