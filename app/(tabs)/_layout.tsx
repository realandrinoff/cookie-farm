import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';
import { Image } from "react-native"
import { styles } from '../../assets/Styles';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,

      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={focused ? require('../../assets/images/home-active.png') : require('../../assets/images/home-inactive.png')}
                style={styles.tabBarIcon}
              />
            );
          }
          
        }}
      />
      <Tabs.Screen
        name="cacaobeansfarm"
        options={{
          title: '',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={focused ? require('../../assets/images/cacaobeans-active.png') : require('../../assets/images/cacaobeans-inactive.png')}
                style={styles.tabBarIcon}
              />
            );
          }
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: '',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={focused ? require('../../assets/images/shop-active.png') : require('../../assets/images/shop-inactive.png')}
                style={styles.tabBarIcon}
              />
            );
          }
        }}
      />
      <Tabs.Screen
        name="bakery"
        options={{
          title: '',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
              source={focused ? require('../../assets/images/bakery-active.png') : require('../../assets/images/bakery-inactive.png')}
                style={styles.tabBarIcon}
              />
            );
          }
        }}
      />
      
       <Tabs.Screen
        name="settings"
        options={{
          title: '',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={focused ? require('../../assets/images/settings-active.png') : require('../../assets/images/settings-inactive.png')}  
                style={styles.tabBarIcon}
              />
            );
          }
        }}
      />
    </Tabs>
  );
}
