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
import { getCookies } from "./dataManagement";
import { styles } from "../assets/Styles";
import { CookieContext, CookieDispatchContext } from "./cookieContext";
import { cookieReducer } from "./dataManagement";

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

  // State to store the cookie count
  const [cookieCount, dispatch] = useReducer(cookieReducer, 0);

  useEffect(() => {
    (async () => {
      dispatch({
        type: "initialize",
        value: await getCookies(),
      });
    })();
    //     // Async function to fetch cookies
    //     const fetchCookies = async () => {
    //       setInterval(async () => {
    //         const cookies = await getCookies(); // Fetch the cookies asynchronously
    //         setCookieCount(cookies);
    // // Update the state with the fetched cookies
    //       }, 10);

    //     };
    //     fetchCookies(); // Call the async function

    // Hide the splash screen after fetching cookies
    SplashScreen.hideAsync();
  }, []); // Empty dependency array ensures this runs only once after mount

  // If platform is web, return early
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
        –    <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
          </CookieDispatchContext.Provider>
        </CookieContext.Provider>
      </>
    );
  }
}
