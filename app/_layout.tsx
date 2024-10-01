import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState, useReducer } from "react";
import "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";

import React from "react";
import {
  Button,
  SafeAreaView,
  useColorScheme,
  View,
  Text,
  Platform,
  Image,
} from "react-native";
import { ThemeProvider } from "styled-components";
import TabLayout from "./(tabs)/_layout";
import { getCookies } from "../dataManagement/cookieData";
import { styles } from "../assets/Styles";
import { CookieContext, CookieDispatchContext } from "./cookieContext";
import { cookieReducer } from "../dataManagement/cookieData";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

type CookieViewProps = {
  cookieCount: number;
  isWeb: boolean;
};

const CookieView = (props: CookieViewProps) => {
  return (
    <View style={props.isWeb ? styles.HIDDEN : styles.cookieContainer}>
      <Image
        source={require("../assets/images/cookie-regular.png")}
        style={styles.cookieImage}
      />
      <Text style={styles.cookieCounterText}>{props.cookieCount}</Text>
    </View>
  );
};

export default function RootLayout() {
  const isWeb: boolean = Platform.OS === "web";
  const [cookieCount, dispatch] = useReducer(cookieReducer, 0);

  useEffect(() => {
    (async () => {
      dispatch({
        type: "initialize",
        value: await getCookies(),
      });
    })();

    SplashScreen.hideAsync();
  }, []);
  if (isWeb) {
    return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    );
  } else {
    return (
      <>
        <CookieView isWeb={isWeb} cookieCount={cookieCount} />
        <CookieContext.Provider value={cookieCount}>
          <CookieDispatchContext.Provider value={dispatch}>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
          </CookieDispatchContext.Provider>
        </CookieContext.Provider>
      </>
    );
  }
}
