import { View, Text } from "react-native";
import { styles } from "../../assets/Styles";
import React from "react";

export const CookieOptions = ({
  hideOptions,
  typeOfCookie,
  setTypeOfCookie,
  hasButtercup,
  hasChocolateChip,
}) => {
  return (
    <>
      <View style={hideOptions ? styles.HIDDEN : styles.cookieSelector}>
        <Text
          style={[
            typeOfCookie == "regular"
              ? styles.cookieTypeSelected
              : styles.cookieTypeNotSelected,
            styles.cookieTypeALL,
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
            styles.cookieTypeALL,
            hasChocolateChip  ? styles.cookieTypeAcquired : styles.cookieTypeNotAcquired
          ]}
          onPress={() => {
            if (hasChocolateChip) {
              setTypeOfCookie("chocolatechip");
            } else {
              return;
            }
          }}
        >
          CHOCOLATE CHIP
        </Text>
        <Text
          style={[
            typeOfCookie == "buttercup"
              ? styles.cookieTypeSelected
              : styles.cookieTypeNotSelected,
            styles.cookieTypeALL,
            hasButtercup ? styles.cookieTypeAcquired : styles.cookieTypeNotAcquired
          ]}
          onPress={() => {
            if (hasButtercup) {
              setTypeOfCookie("buttercup");
            } else {
              return;
            }
          }}
        >
          BUTTERSCOTCH CUP
        </Text>
      </View>
    </>
  );
};
