import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React from 'react';
import { Button, SafeAreaView, useColorScheme, View, Text, Platform, Image } from 'react-native';
import { ThemeProvider } from 'styled-components';
import TabLayout from './(tabs)/_layout';
import { getCookies, addCookies } from './dataManagement';
import { styles } from '../assets/Styles';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const isWeb: boolean = Platform.OS === 'web';
  
  // State to store the cookie count
  
  const [cookieCount, setCookieCount] = useState<number | null>(null);
  useEffect(() => {
    // Async function to fetch cookies
    const fetchCookies = async () => {
      setInterval(async () => {
        const cookies = await getCookies(); // Fetch the cookies asynchronously
        setCookieCount(cookies); // Update the state with the fetched cookies  
      }, 10);
      
    };
    console.log("Fetching cookies")
    fetchCookies(); // Call the async function

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
        <View style={isWeb ? styles.HIDDEN : styles.cookieContainer}>
          <Image source={require('../assets/images/cookie-regular.png')} style={styles.cookieImage} />
          <Text style={styles.cookieCounterText}>{String(cookieCount)}</Text>
        </View>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </>
    );
  }
}