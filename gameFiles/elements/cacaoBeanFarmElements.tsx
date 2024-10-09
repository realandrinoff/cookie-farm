import { View, Text, Image, Platform } from "react-native";
import { styles } from "../../assets/Styles";
import {
  increaseCacaoLevel,
  resetCacaoLevel,
} from "../../dataManagement/cacaoData";
import { CacaoDispatchContext } from "../../app/context/cacaoContext";
import { useContext, useEffect, useState } from "react";
import React from "react";
import { checkCacaoLevel } from "../../dataManagement/cacaoData";
import { CookieDispatchContext, CookieContext } from "../../app/context/cookieContext";
import { CacaoUpgradePrice } from "../maps/UpgradePriceMap";

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
        <Text style={styles.cacaoTreeUpgradeText}>Cacao level: {cacaoLevel}</Text>
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
  const [cacaoLevel, setCacaoLevel] = useState<number>();
  useEffect(() => {
    (async () => {
      await checkCacaoLevel(setCacaoLevel);
    })();
  });
  const dispatch = useContext(CacaoDispatchContext);
  return (
    <View style={styles.cacaoContainer}>
      <Image
        source={require("../../assets/images/cacaotree.png")}
        style={styles.cacaoTree}
      />
      <Text
        style={styles.cacaoTreeCollectText}
        onPress={() => {
          (async () => {
            setCacaoLevel(await checkCacaoLevel(setCacaoLevel));
          })();
          console.log(cacaoLevel);
          dispatch({
            type: "add",
            value: cacaoLevel,
          });
        }}
      >
        Collect cacao
      </Text>
    </View>
  );
};

export const CacaoCounter = ({ cacaoAmount }) => {
  return (
    <View style={styles.cacaoCounter}>
      <Image
        source={require("../../assets/images/cacao-regular.png")}
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
    <View style={styles.cacaoTreeUpgradeContainer}>
      <Text
        style={styles.cacaoTreeUpgradeText}
        onPress={() => {
          if (cacaoLevel < 5) {
            if (cookieCount < CacaoUpgradePrice.get(cacaoLevel)) {
              setNotEnough(true);
              return <Text>You don't have enough cookies</Text>;
            } else {
              setNotEnough(false);
              dispatch({
                type: "remove",
                value: CacaoUpgradePrice.get(cacaoLevel),
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
              CacaoUpgradePrice.get(cacaoLevel) +
              " cookies",
        ]}
      </Text>
      <Text style={styles.cacaoTreeUpgradeText} onPress={() => resetCacaoLevel(setCacaoLevel)}>Test Reset</Text>
    </View>
  );
};
