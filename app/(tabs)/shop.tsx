import { View, Text } from "react-native";
import { styles } from "../../assets/Styles";
import { ShopOfferWindow, TestElements } from "../../shop/Elements/shopOffers";
import { useContext, useEffect, useState } from "react";
import {
  checkTypesButtercup,
  checkTypesChocolateChip,
} from "../../shop/data/shopData";
import { hasButtercup } from "../../hooks/hasButtercup";
import { hasChocolateChip } from "../../hooks/hasChocolateChipHook";
import { CacaoExchange, PeanutExchange } from "../../shop/Elements/cookieExchange";
import { ThemeContext } from "../context/themeContext";

export default function shopScreen() {
  const currentTheme = useContext(ThemeContext);

  return (
    <View style={currentTheme == 0 ? styles.bodyContainerLight : styles.bodyContainerDark}>
      <Text style={styles.tabName}>Shop</Text>
      {/* tests */}
      {/* <TestElements
      /> */}
      <Text style = {styles.exchangeContainerText}>Shop offers</Text>
      <View style={styles.shopOffersContainer}>
        
        <ShopOfferWindow
          hasButtercup={hasButtercup()}
          typeOfCookie={"chocolatechip"} hasChocolateChip={hasChocolateChip()}        />
        <ShopOfferWindow
          typeOfCookie={"buttercup"}
          hasButtercup={hasButtercup()}
          hasChocolateChip={hasChocolateChip()}
        
        />
      </View>
      <Text style = {styles.exchangeContainerText}>Exchange</Text>
      <View style = {styles.exchangeContainer}>
        
        <CacaoExchange />
        <PeanutExchange />
      </View>
    </View>
  );
}
