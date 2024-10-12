import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../../assets/Styles";
import { CookieContext, CookieDispatchContext } from "../../app/context/cookieContext";
import { CookieBakingTimeMap, CookieValueMap } from "../maps/CookieMap";
import {
  CacaoRequirements,
  PeanutRequirements,
} from "../maps/TypeCookiesRequirements";
import { CacaoContext, CacaoDispatchContext } from "../../app/context/cacaoContext";
import { PeanutContext, PeanutDispatchContext } from "../../app/context/peanutContext";
import { CookiesBakedDispatchContext } from "../../levelSystem/data/context/cookiesBakedContext";

export type cookieTimerType = {
  seconds: number;
  typeOfCookie: string;
  hideOptions: boolean;
  setHideOptions: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CollectButton = ({ cookieType }) => {};

export const BakingTimer = ({
  seconds,
  typeOfCookie,
  hideOptions,
  setHideOptions,
}: cookieTimerType) => {
  const dispatch = useContext(CookieDispatchContext);
  const cookieCount = useContext(CookieContext);
  const dispatchCookiesBaked = useContext(CookiesBakedDispatchContext);

  var [isDone, setIsDone] = useState(false);
  var [timeLeft, setTimeLeft] = useState(NaN);
  var [isPressed, setIsPressed] = useState(true);
  var [isCooking, setIsCooking] = useState(false);
  const cacaoCount = useContext(CacaoContext);
  const dispatchCacao = useContext(CacaoDispatchContext);
  const peanutCount = useContext(PeanutContext);
  const dispatchPeanut = useContext(PeanutDispatchContext);

  const cacaoPrice = CacaoRequirements.get(typeOfCookie);

  const peanutPrice = PeanutRequirements.get(typeOfCookie);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else if (Number.isNaN(timeLeft)) {
      } else {
        setTimeLeft(0);
        clearInterval(timer);
        setIsDone(true);
        setIsPressed(false);
        setIsCooking(false);
        setTimeLeft(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <View>
      <Text
        onPress={() => {
          if (cacaoCount >= cacaoPrice) {
            if (peanutCount >= peanutPrice) {
              dispatchCacao({
                type: "remove",
                value: cacaoPrice,
              });
              dispatchPeanut({
                type: "remove",
                value: peanutPrice,
              });
              setIsCooking(true);
              setTimeLeft(seconds);
              setIsPressed(true);
              setHideOptions(true);
            } else {
            }
          } else {
          }
        }}
        style={[
          isCooking ? styles.HIDDEN : styles.bakeButton,
          isPressed ? styles.emptystyle : styles.HIDDEN,
        ]}
      >
        {cacaoCount >= cacaoPrice
          ? peanutCount >= peanutPrice
            ? "Bake " +
              (typeOfCookie == "chocolatechip"
                ? "Chocolate Chip "
                : typeOfCookie == "regular"
                ? "Regular "
                : typeOfCookie == "buttercup"
                ? "Butterscotch Cup "
                : "Not known ") +
              "cookie"
            : "You don't have enough materials"
          : "You don't have enough materials"}
      </Text>

      <Text
        style={[
          isDone ? styles.HIDDEN : styles.bakingTimer,
          isCooking ? styles.emptystyle : styles.HIDDEN,
        ]}
      >
        Baking time left: {String(timeLeft)} seconds
      </Text>
      <Text
        style={[
          isDone ? styles.collectButton : styles.HIDDEN,
          isPressed ? styles.HIDDEN : styles.emptystyle,
        ]}
        onPress={() => {
          dispatchCookiesBaked({
            type: "add",
            value: 1,
          });
          dispatch({
            type: "add",
            value: CookieValueMap.get(typeOfCookie),
          });
          setIsPressed(true);
          setIsDone(false);
          setHideOptions(false);
        }}
      >
        Collect{" "}
        {[
          typeOfCookie == "chocolatechip"
            ? "Chocolate Chip"
            : typeOfCookie == "regular"
            ? "Regular"
            : typeOfCookie == "buttercup"
            ? "Butterscotch Cup"
            : "Not known",
        ]}{" "}
        cookie
      </Text>
      {/* tests */}
      <View style = {styles.HIDDEN}>
      <Text
        onPress={() => {
          dispatch({
            type: "add",
            value: 100,
          });
        }}
      >
        +100 cookies
      </Text>
      <Text
        onPress={() => {
          dispatch({
            type: "remove",
            value: 10,
          });
        }}
      >
        -10 cookies
      </Text>
      <Text
        onPress={() => {
          dispatchCookiesBaked({
            type: "add",
            value: 10,
          });
        }}
      >
        +10 cookies baked
      </Text>
      <Text
      onPress={
        () => {
          dispatchCookiesBaked({
            type: "reset",
            value: 0
          })
        }
      }>reset cookies baked</Text>
      </View>
    </View>
  );
};

export const CookieRequirements = ({ typeOfCookie }) => {
  return (
    <View style={styles.requirementsContainer}>
      <Text style={styles.requirementsText}>
        Requirements: {CacaoRequirements.get(typeOfCookie)}{" "}
        <Image
          style={styles.requirementsIcons}
          source={require("../../assets/images/cacao-regular.png")}
        />
        , {PeanutRequirements.get(typeOfCookie)} {""}
        <Image
          style={styles.requirementsIcons}
          source={require("../../assets/images/peanut-regular.png")}
        />
      </Text>
    </View>
  );
};
