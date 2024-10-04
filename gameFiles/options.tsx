import { View, Text } from "react-native";
import { styles } from "../assets/Styles";
import React from "react";

export const CookieOptions = ({
  hideOptions,
  typeOfCookie,
  setTypeOfCookie,
}) => {
  return (
    <>
      <View style={hideOptions ? styles.HIDDEN : styles.cookieSelector}>
        <Text
          style={[
            typeOfCookie == "regular"
              ? styles.cookieTypeSelected
              : styles.cookieTypeNotSelected,
            styles.cookieTypeBOTH,
          ]}
          onPress={() => {
            setTypeOfCookie("regular");
          }}
        >
          REGULAR
        </Text>

        <Text
          style={[
            typeOfCookie == "chocolatechip"
              ? styles.cookieTypeSelected
              : styles.cookieTypeNotSelected,
            styles.cookieTypeBOTH,
          ]}
          onPress={() => {
            setTypeOfCookie("chocolatechip");
          }}
        >
          CHOCOLATE CHIP
        </Text>
        <Text
        style = {[
          typeOfCookie == "buttercup" ? styles.cookieTypeSelected : styles.cookieTypeNotSelected,
          styles.cookieTypeBOTH
        ]}
        onPress = {() => {
          setTypeOfCookie("buttercup")
        }
        }>
            Butterscotch Cup
        </Text>
      </View>
    </>
  );
};
