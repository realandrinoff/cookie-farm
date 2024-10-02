import { View, Text, Image } from "react-native";
import { styles } from "../assets/Styles";
import { addCacao } from "../dataManagement/cacaoData";
import { CacaoContext, CacaoDispatchContext } from "../app/cacaoContext";
import { useContext } from "react";

export const CacaoButton = () => {
  const dispatch = useContext(CacaoDispatchContext);
  return (
    <Text
      onPress={() => {
        dispatch({
          type: "add",
          value: 1,
        });
      }}
    >
      ADD COCOA
    </Text>
  );
};

export const CacaoCounter = ({ cacaoAmount }) => {
  return (
    <View style={styles.cacaoContainer}>
      <Image
        source={require("../assets/images/cacao-regular.png")}
        style={styles.cacaoCounterImage}
      />
      <Text style={styles.cookieCounterText}>{cacaoAmount}</Text>
    </View>
  );
};
