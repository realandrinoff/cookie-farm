import { View, Text, Image, Platform } from "react-native";
import { styles } from "../assets/Styles";
import {
  increasePeanutLevel,
  resetPeanutLevel,
} from "../dataManagement/peanutData";
import { CacaoDispatchContext } from "../app/cacaoContext";
import { useContext, useEffect, useState } from "react";
import React from "react";
import { checkPeanutLevel } from "../dataManagement/peanutData";
import { CookieDispatchContext, CookieContext } from "../app/cookieContext";
import { PeanutUpgradePrice } from "./UpgradePriceMap";
import { PeanutDispatchContext } from "../app/peanutContext";

export const PeanutFarmLevel = ({}) => {
  var [peanutLevel, setPeanutLevel] = useState<number>();
  useEffect(() => {
    (async () => {
      setPeanutLevel(await checkPeanutLevel(setPeanutLevel));
    })();
  });
  if (Platform.OS != "web") {
    return (
      <View>
        <Text style={styles.cacaoTreeUpgradeText}>peanut level: {peanutLevel}</Text>
        <UpgradePeanutButton
          setPeanutLevel={setPeanutLevel}
          peanutLevel={peanutLevel}
        />
      </View>
    );
  } else {
    return null;
  }
};

export const PeanutButton = ({}) => {
  const [peanutLevel, setPeanutLevel] = useState<number>();
  useEffect(() => {
    (async () => {
      console.log("inside async");
      await checkPeanutLevel(setPeanutLevel);
    })();
  });
  const dispatch = useContext(PeanutDispatchContext);
  return (
    <View style={styles.cacaoContainer}>
      <Image
        source={require("../assets/images/peanut-tree.png")}
        style={styles.cacaoTree}
      />
      <Text
        style={styles.cacaoTreeCollectText}
        onPress={() => {
          (async () => {
            setPeanutLevel(await checkPeanutLevel(setPeanutLevel));
          })();
          console.log(peanutLevel);
          dispatch({
            type: "add",
            value: peanutLevel,
          });
        }}
      >
        collect peanuts
      </Text>
    </View>
  );
};

export const PeanutCounter = ({ peanutAmount }) => {
  return (
    <View style={styles.cacaoCounter}>
      <Image
        source={require("../assets/images/peanut-regular.png")}
        style={styles.cacaoCounterImage}
      />
      <Text style={styles.cookieCounterText}>{peanutAmount}</Text>
    </View>
  );
};





// done
const UpgradePeanutButton = ({ setPeanutLevel, peanutLevel }) => {
  const dispatch = useContext(CookieDispatchContext);
  const cookieCount = useContext(CookieContext);
  var [notEnough, setNotEnough] = useState(false);

  return (
    <View style={styles.cacaoTreeUpgradeContainer}>
      <Text
        style={styles.cacaoTreeUpgradeText}
        onPress={() => {
          if (peanutLevel < 5) {
            if (cookieCount < PeanutUpgradePrice.get(peanutLevel)) {
              setNotEnough(true);
              return <Text>You don't have enough cookies</Text>;
            } else {
              setNotEnough(false);
              dispatch({
                type: "remove",
                value: PeanutUpgradePrice.get(peanutLevel),
              });
              setPeanutLevel(peanutLevel + 1);
              (async () => {
                await increasePeanutLevel();
              })();
            }
          } else {
          }
        }}
      >
        {[
          peanutLevel == 5
            ? "You have reached MAX level"
            : "Upgrade peanut level to " +
              (peanutLevel + 1) +
              " for " +
              PeanutUpgradePrice.get(peanutLevel) +
              " cookies",
        ]}
      </Text>
      <Text style={styles.cacaoTreeUpgradeText} onPress={() => resetPeanutLevel(setPeanutLevel)}>Test Reset</Text>
    </View>
  );
};
