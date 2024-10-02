import { View, Text } from "react-native";
import { styles } from "../assets/Styles";
import React from "react";

export const CookieOptions = ({
  hideOptions,
  isChocChip,
  isRegular,
  setIsChocChip,
  setIsRegular,
}) => {
  return (
    <>
      <View style={hideOptions ? styles.HIDDEN : styles.cookieSelector}>
        <Text
          style={[
            isRegular
              ? styles.cookieTypeSelected
              : styles.cookieTypeNotSelected,
            styles.cookieTypeBOTH,
          ]}
          onPress={() => {
            setIsChocChip(false);
            setIsRegular(true);
          }}
        >
          REGULAR
        </Text>

        <Text
          style={[
            isChocChip
              ? styles.cookieTypeSelected
              : styles.cookieTypeNotSelected,
            styles.cookieTypeBOTH,
          ]}
          onPress={() => {
            setIsChocChip(true);
            setIsRegular(false);
          }}
        >
          CHOCOLATE CHIP
        </Text>
      </View>
    </>
  );
};
