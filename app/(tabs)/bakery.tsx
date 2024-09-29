import { View, Text, Button } from "react-native";
import { useContext } from "react";
import { styles } from "../../assets/Styles";
import { CookieContext, CookieDispatchContext } from "../cookieContext";

export default function bakeryScreen() {
  const dispatch = useContext(CookieDispatchContext);
  const cookieCount = useContext(CookieContext);

  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.tabName}> Bakery Screen </Text>

      <Button
        title={ "Add Cookies " + cookieCount }
        onPress={() =>
          dispatch({
            type: "add",
            value: 3,
          })
        }
      />
    </View>
  );
}
