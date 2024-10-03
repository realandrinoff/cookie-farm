import { View, Text, Image, useWindowDimensions, Platform } from "react-native";
import { styles } from "../assets/Styles";
import {
  addCacao,
  increaseCacaoLevel,
  resetCacaoLevel,
} from "../dataManagement/cacaoData";
import { CacaoContext, CacaoDispatchContext } from "../app/cacaoContext";
import { useContext, useEffect, useState } from "react";
import React from "react";
import { checkCacaoLevel } from "../dataManagement/cacaoData";
import { CookieDispatchContext, CookieContext } from "../app/cookieContext";
import { UpgradePrice } from "./UpgradePriceMap";
import { underDampedSpringCalculations } from "react-native-reanimated/lib/typescript/reanimated2/animation/springUtils";
import { setNativeProps } from "react-native-reanimated";

export const CacaoFarmLevel = ({}) => {
  var [cacaoLevel, setCacaoLevel] = useState<number>();
  useEffect(() => {
    (async () => {
      setCacaoLevel(await checkCacaoLevel(setCacaoLevel));
    })();
  });
  if (Platform.OS != "web") {
    return (
      <View>
        <Text>cacao level: {cacaoLevel}</Text>
        <UpgradeCacaoButton
          setCacaoLevel={setCacaoLevel}
          cacaoLevel={cacaoLevel}
        />
      </View>
    );
  } else {
    return null;
  }
};

export const CacaoButton = ({}) => {
  const [cacaoLevel, setCacaoLevel] = useState<number>()
  useEffect(() =>{
    (async()=> {
        console.log("inside async")
        await checkCacaoLevel(setCacaoLevel)
    })()
  })
  const dispatch = useContext(CacaoDispatchContext);
  return (
    <View style={styles.cacaoContainer}>
      <Image
        source={require("../assets/images/cacaotree.png")}
        style={styles.cacaoTree}
      />
      <Text
        style={styles.cacaoTreeCollectText}
        onPress={() => {
            (async() => {
                setCacaoLevel(await checkCacaoLevel(setCacaoLevel))
            })()
            console.log(cacaoLevel)
          dispatch({
            type: "add",
            value: cacaoLevel,
          });
        }}
      >
        collect cacao
      </Text>
    </View>
  );
};

export const CacaoCounter = ({ cacaoAmount }) => {
  return (
    <View style={styles.cacaoCounter}>
      <Image
        source={require("../assets/images/cacao-regular.png")}
        style={styles.cacaoCounterImage}
      />
      <Text style={styles.cookieCounterText}>{cacaoAmount}</Text>
    </View>
  );
};

const UpgradeCacaoButton = ({ setCacaoLevel, cacaoLevel }) => {
  const dispatch = useContext(CookieDispatchContext);
  const cookieCount = useContext(CookieContext);
  var [notEnough, setNotEnough] = useState(false);

  return (
    <View>
      <Text
        onPress={() => {
          if (cacaoLevel < 5) {
            if (cookieCount < UpgradePrice.get(cacaoLevel)) {
              setNotEnough(true);
              return <Text>You don't have enough cookies</Text>;
            } else {
              setNotEnough(false);
              dispatch({
                type: "remove",
                value: UpgradePrice.get(cacaoLevel),
              });
              setCacaoLevel(cacaoLevel + 1);
              (async () => {
                await increaseCacaoLevel();
              })();
            }
          } else {
          }
        }}
      >
        {[
          cacaoLevel == 5
            ? "You have reached MAX level"
            : "Upgrade cacao level to " +
              (cacaoLevel + 1) +
              " for " +
              UpgradePrice.get(cacaoLevel) +
              " cookies"
        ]}
      </Text>
      <Text onPress={() => resetCacaoLevel()}>Test Reset</Text>
    </View>
  );
};
