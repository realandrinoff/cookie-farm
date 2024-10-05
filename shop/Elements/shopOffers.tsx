import { useContext, useEffect, useState } from "react";
import {
  checkTypesChocolateChip,
  checkTypesButtercup,
  addTypesButtercup,
  addTypesChocolateChip,
  deleteTypesButtercup,
  deleteTypesChocolateChip,
} from "../data/shopData";
import { View, Text, Image } from "react-native";
import { styles } from "../../assets/Styles";
import React from "react";
import { prices } from "../maps/cookieTypePrice";
import { CookieContext, CookieDispatchContext } from "../../app/cookieContext";

export const ShopOfferWindow = ({ typeOfCookie }) => {
  const [hasChocolateChip, setHasChocolateChip] = useState<boolean>(false);
  const [hasButtercup, setHasButtercup] = useState<boolean>(false);
  const cookieAmount = useContext(CookieContext);
  const dispatch = useContext(CookieDispatchContext);

  useEffect(() => {
    (async () => {
      setHasButtercup(await checkTypesButtercup());
      setHasChocolateChip(await checkTypesChocolateChip());
    })();
  });
  return (
    <><TestElements
      setHasButtercup={setHasButtercup}
      setHasChocolateChip={setHasChocolateChip} />
      <View
        style={typeOfCookie == "chocolatechip"
          ? hasChocolateChip
            ? styles.HIDDEN
            : styles.shopOfferContainer
          : typeOfCookie == "buttercup"
            ? hasButtercup
              ? styles.HIDDEN
              : styles.shopOfferContainer
            : styles.HIDDEN}
      >
        <Image
          style={styles.shopOfferPreviewImage}
          source={typeOfCookie == "buttercup"
            ? require("../../assets/images/buttercup-cookie.png")
            : typeOfCookie == "chocolatechip"
              ? require("../../assets/images/chocolate-chip-cookie.png")
              : require("../../assets/images/no-image.png")} />
        <Text style={styles.shopOfferText}>
          {typeOfCookie == "chocolatechip"
            ? "Chocolate Chip Cookie"
            : typeOfCookie == "buttercup"
              ? "Butterscotch Cup Cookie"
              : "unknown type"}
        </Text>
        <Text
          style={styles.buyButton}
          onPress={() => {
            if (cookieAmount >= Number(prices.get(typeOfCookie))) {
              if (typeOfCookie == "chocolatechip") {
                setHasChocolateChip(true);
                (async () => {
                  await addTypesChocolateChip();
                })();
              }
            }
          } }
        >
          {cookieAmount >= prices.get(typeOfCookie)
            ? "BUY FOR " + prices.get(typeOfCookie)
            : "You don't have enough cookies"}
        </Text>

      </View></>
  );
};

// For test purposes

export const TestElements = ({ setHasButtercup, setHasChocolateChip }) => {
  return (
    <View>
      <Text
        onPress={() => {
          (async () => {
            setHasButtercup(false);
            setHasChocolateChip(false);
            await deleteTypesButtercup();
            await deleteTypesChocolateChip();
          })();
        }}
      >
        DELETE ALL TYPES
      </Text>
      <Text
        onPress={() => {
          (async () => {
            setHasButtercup(true);
            setHasChocolateChip(true);
            await addTypesButtercup();
            await addTypesChocolateChip();
          })();
        }}
      >
        ADD ALL TYPES
      </Text>
    </View>
  );
};
