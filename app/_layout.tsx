import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState, useReducer } from "react";
import "react-native-reanimated";
import React from "react";
import { View, Text, Platform, Image } from "react-native";
import { getCookies } from "../dataManagement/cookieData";
import { styles } from "../assets/Styles";
import { CookieContext, CookieDispatchContext } from "./context/cookieContext";
import { cookieReducer } from "../dataManagement/cookieData";
import { CacaoCounter } from "../gameFiles/elements/cacaoBeanFarmElements";
import { cacaoReducer, getCacaoAmount } from "../dataManagement/cacaoData";
import { CacaoContext, CacaoDispatchContext } from "./context/cacaoContext";
import { getPeanutAmount, peanutReducer } from "../dataManagement/peanutData";
import { PeanutContext, PeanutDispatchContext } from "./context/peanutContext";
import { CheckLevel, levelReducer } from "../levelSystem/data/levelData";
import {
  LevelContext,
  LevelDispatchContext,
} from "../levelSystem/data/context/levelContext";
import {
  CheckCookiesBaked,
  cookiesBakedReducer,
} from "../levelSystem/data/cookiesBakedData";
import {
  CookiesBakedContext,
  CookiesBakedDispatchContext,
} from "../levelSystem/data/context/cookiesBakedContext";
import { getTheme } from "../settingsMenu/data/themeData";
import { themeReducer } from "../dataManagement/themeData";
import * as ScreenOrientation from "expo-screen-orientation";
import { ThemeDispatchContext, ThemeContext } from "./context/themeContext";

  // (async () => {
  //   await ScreenOrientation.lockAsync(
  //     ScreenOrientation.OrientationLock.PORTRAIT
  //   );
  // })();
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

type CookieViewProps = {
  cookieCount: number;
  isWeb: boolean;
};

type PeanutViewProps = {
  peanutCount: number;
  isWeb: boolean;
};

const CookieView = (props: CookieViewProps) => {
  return (
    <View>
      <Image
        source={require("../assets/images/cookie-regular.png")}
        style={styles.cookieImage}
      />
      <Text style={styles.cookieCounterText}>{props.cookieCount}</Text>
    </View>
  );
};

const PeanutView = (props: PeanutViewProps) => {
  return (
    <View>
      <Image
        source={require("../assets/images/peanut-regular.png")}
        style={styles.cookieImage}
      />
      <Text style={styles.cookieCounterText}>{props.peanutCount}</Text>
    </View>
  );
};

export default function RootLayout() {
  const isWeb: boolean = Platform.OS === "web";
  const [cookieCount, dispatch] = useReducer(cookieReducer, 0);
  const [cacaoCount, dispatchCacao] = useReducer(cacaoReducer, NaN);
  const [peanutCount, dispatchPeanut] = useReducer(peanutReducer, 0);
  const [levelCount, dispatchLevel] = useReducer(levelReducer, 1);
  const [cookiesBakedCount, dispatchCookiesBaked] = useReducer(
    cookiesBakedReducer,
    0
  );
  const [currentTheme, dispatchTheme] = useReducer(themeReducer, 0);
  useEffect(() => {
    (async () => {
      dispatchLevel({
        type: "initialize",
        value: await CheckLevel(),
      });
    })();
  }, []);
  // useEffect(()=> {
  //   (async () => {
  //     dispatchTheme({
  //       type: "initialize"
  //     })
  //   })()
  // })
  useEffect(() => {
    (async () => {
      dispatchCookiesBaked({
        type: "initialize",
        value: await CheckCookiesBaked(),
      });
    })();
  }, []);
  useEffect(() => {
    (async () => {
      dispatchCacao({
        type: "initialize",
        value: await getCacaoAmount(),
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      dispatch({
        type: "initialize",
        value: await getCookies(),
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      dispatchPeanut({
        type: "initialize",
        value: await getPeanutAmount(),
      });
    })();
  }, []);

  if (isWeb) {
    return (
      <>
        <Text style={styles.noWebSupport}>NOT SUPPORTED ON WEB YET :( </Text>
        <Text style={styles.credits}>@andrinoff 2024</Text>
      </>
    );
  } else {
    return (
      <>
        <ThemeDispatchContext.Provider value={dispatchTheme}>
          <ThemeContext.Provider value={currentTheme}>
            <View style={styles.allCountersParent}>
              <View style={styles.allCounters}>
                <CookieView isWeb={isWeb} cookieCount={cookieCount} />
                <PeanutView isWeb={isWeb} peanutCount={peanutCount} />
                <CacaoCounter cacaoAmount={cacaoCount}></CacaoCounter>
              </View>
            </View>

            <CookiesBakedContext.Provider value={cookiesBakedCount}>
              <CookiesBakedDispatchContext.Provider
                value={dispatchCookiesBaked}
              >
                <LevelContext.Provider value={levelCount}>
                  <LevelDispatchContext.Provider value={dispatchLevel}>
                    <CookieContext.Provider value={cookieCount}>
                      <CookieDispatchContext.Provider value={dispatch}>
                        <PeanutContext.Provider value={peanutCount}>
                          <PeanutDispatchContext.Provider
                            value={dispatchPeanut}
                          >
                            <CacaoContext.Provider value={cacaoCount}>
                              <CacaoDispatchContext.Provider
                                value={dispatchCacao}
                              >
                                <Stack>
                                  <Stack.Screen
                                    name="(tabs)"
                                    options={{ headerShown: false }}
                                  />
                                  <Stack.Screen name="+not-found" />
                                </Stack>
                              </CacaoDispatchContext.Provider>
                            </CacaoContext.Provider>
                          </PeanutDispatchContext.Provider>
                        </PeanutContext.Provider>
                      </CookieDispatchContext.Provider>
                    </CookieContext.Provider>
                  </LevelDispatchContext.Provider>
                </LevelContext.Provider>
              </CookiesBakedDispatchContext.Provider>
            </CookiesBakedContext.Provider>
          </ThemeContext.Provider>
        </ThemeDispatchContext.Provider>
      </>
    );
  }
}
