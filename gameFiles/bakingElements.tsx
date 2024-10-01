import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { styles } from "../assets/Styles";
import { CookieContext, CookieDispatchContext } from "../app/cookieContext";
import { CookieBakingTimeMap, CookieValueMap } from "./CookieMap";

export type cookieTimerType = {
  seconds: number;
  CookieType: string;
  isRegular: boolean;
  isChocChip: boolean;
  hideOptions: boolean;
  setHideOptions: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CollectButton = ({ cookieType }) => {};

export const BakingTimer = ({
  seconds,
  CookieType,
  isChocChip,
  isRegular,
  hideOptions,
  setHideOptions
}: cookieTimerType) => {
  const dispatch = useContext(CookieDispatchContext);
  const cookieCount = useContext(CookieContext);
  var [isDone, setIsDone] = useState(false);
  var [timeLeft, setTimeLeft] = useState(NaN);
  var [isPressed, setIsPressed] = useState(true);
  var [isCooking, setIsCooking] = useState(false);  

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
        console.log("Time left", timeLeft);
      } else if (Number.isNaN(timeLeft)) {
      } else {
        console.log("Time's up!");
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

  console.log(isDone);
  return (
    <View>
      <Text
        onPress={() => {
          setIsCooking(true);
          setTimeLeft(seconds);
          setIsPressed(true);
          setHideOptions(true);
        }}
        style={[
          isCooking ? styles.HIDDEN : styles.bakeButton,
          isPressed ? styles.emptystyle : styles.HIDDEN,
        ]}
      >
        Bake {isRegular ? "Regular" : "Chocolate Chip"} Cookie
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
          dispatch({
            type: "add",
            value: CookieValueMap.get(CookieType),
          });
          setIsPressed(true);
          setIsDone(false);
          setHideOptions(false);
        }}
      >
        Collect {CookieType == "chocolatechip" ? "Chocolate Chip" : "Regular"}{" "}
        Cookie
      </Text>
    </View>
  );
};
