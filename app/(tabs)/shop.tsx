import { View, Text } from "react-native";
import { styles } from "../../assets/Styles";
import { ShopOfferWindow, TestElements } from "../../shop/Elements/shopOffers";
import { useEffect, useState } from "react";
import {
  checkTypesButtercup,
  checkTypesChocolateChip,
} from "../../shop/data/shopData";

export default function shopScreen() {
  const [hasChocolateChip, setHasChocolateChip] = useState<boolean>(false);
  const [hasButtercup, setHasButtercup] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      setHasButtercup(await checkTypesButtercup());
      setHasChocolateChip(await checkTypesChocolateChip());
    })();
  });
  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.tabName}>Shop</Text>
      // tests
      {/* <TestElements
        setHasButtercup={setHasButtercup}
        setHasChocolateChip={setHasChocolateChip}
      /> */}
      <View style={styles.shopOffersContainer}>
        <ShopOfferWindow
          typeOfCookie={"chocolatechip"}
          hasButtercup={hasButtercup}
          hasChocolateChip={hasChocolateChip}
          setHasButtercup={setHasButtercup}
          setHasChocolateChip={setHasButtercup}
        />
        <ShopOfferWindow
          typeOfCookie={"buttercup"}
          hasButtercup={hasButtercup}
          hasChocolateChip={hasChocolateChip}
          setHasButtercup={setHasButtercup}
          setHasChocolateChip={setHasButtercup}
        />
      </View>
    </View>
  );
}
