import { View, Text, Image, Platform } from "react-native";
import { styles } from "../../assets/Styles";
import {
  increasePeanutLevel,
  resetPeanutLevel,
} from "../../dataManagement/peanutData";
import { CacaoDispatchContext } from "../../app/context/cacaoContext";
import { useContext, useEffect, useState } from "react";
import React from "react";
import { checkPeanutLevel } from "../../dataManagement/peanutData";
import { CookieDispatchContext, CookieContext } from "../../app/context/cookieContext";
import { PeanutUpgradePrice } from "../maps/UpgradePriceMap";
import { PeanutDispatchContext } from "../../app/context/peanutContext";
import { LevelContext } from "../../levelSystem/data/context/levelContext";

export const PeanutFarmLevel = ({}) => {
  var [peanutLevel, setPeanutLevel] = useState<number>();
  const levelCount = useContext(LevelContext)
  useEffect(() => {
    
      if (levelCount < 5) {
        (async () => {
        setPeanutLevel(1)
        await resetPeanutLevel()})()
      }
      else{
        (async () => {
        setPeanutLevel(await checkPeanutLevel(setPeanutLevel));})()
      }
    });
  return (
    <View>
      <Text style={styles.cacaoTreeUpgradeText}>Peanut level: {peanutLevel}</Text>
      <UpgradePeanutButton
        setPeanutLevel={setPeanutLevel}
        peanutLevel={peanutLevel}
      />
    </View>
  );

};

export const PeanutButton = ({}) => {
  const [peanutLevel, setPeanutLevel] = useState<number>();
  useEffect(() => {
    (async () => {
      await checkPeanutLevel(setPeanutLevel);
    })();
  });
  const dispatch = useContext(PeanutDispatchContext);
  return (
    <View style={styles.cacaoContainer}>
      <Image
        source={require("../../assets/images/peanut-tree.png")}
        style={styles.cacaoTree}
      />
      <Text
        style={styles.cacaoTreeCollectText}
        onPress={() => {
          (async () => {
            setPeanutLevel(await checkPeanutLevel(setPeanutLevel));
          })();

          dispatch({
            type: "add",
            value: peanutLevel,
          });
        }}
      >
        Collect peanuts
      </Text>
    </View>
  );
};

export const PeanutCounter = ({ peanutAmount }) => {
  return (
    <View style={styles.cacaoCounter}>
      <Image
        source={require("../../assets/images/peanut-regular.png")}
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
            : (PeanutUpgradePrice.get(peanutLevel) > cookieCount
              ? "You need " +
                (PeanutUpgradePrice.get(peanutLevel) - cookieCount) +
                " more cookies "
              : "Upgrade peanut level to " +
              (peanutLevel + 1) +
              " for " +
              PeanutUpgradePrice.get(peanutLevel) +
              " cookies")
        ]}
      </Text>
      <Text style={styles.cacaoTreeUpgradeText} onPress={() => {resetPeanutLevel()}}>Test Reset</Text>
    </View>
  );
};
