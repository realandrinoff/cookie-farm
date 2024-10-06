import { View, Text } from "react-native";
import { styles } from "../../assets/Styles";
import { ShopOfferWindow, TestElements } from "../../shop/Elements/shopOffers";
import { useEffect, useState } from "react";
import {
  checkTypesButtercup,
  checkTypesChocolateChip,
} from "../../shop/data/shopData";
import { hasButtercup } from "../../hooks/hasButtercup";
import { hasChocolateChip } from "../../hooks/hasChocolateChipHook";

export default function shopScreen() {


  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.tabName}>Shop</Text>
      {/* tests */}
      <TestElements
      />
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
    </View>
  );
}
