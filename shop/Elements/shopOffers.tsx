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
import { hasChocolateChip } from "../../hooks/hasChocolateChipHook";
import { hasButtercup } from "../../hooks/hasButtercup";

export const ShopOfferWindow = ({ typeOfCookie, hasButtercup, hasChocolateChip }) => {
  const cookieAmount = useContext(CookieContext);
  const dispatch = useContext(CookieDispatchContext);
  const [bought, setBought] = useState(false);
  if (typeOfCookie == "chocolatechip"){
    (async() => {
      setBought(await checkTypesChocolateChip())})()
  }
  if (typeOfCookie == "buttercup"){
    (async() => {
      setBought(await checkTypesButtercup())})()
  }
  return (
    <>
      <View
        style={
          typeOfCookie == "chocolatechip"
            ? bought
              ? styles.HIDDEN
              : styles.shopOfferContainer
            : typeOfCookie == "buttercup"
            ? bought
              ? styles.HIDDEN
              : styles.shopOfferContainer
            : styles.HIDDEN
        }
      >
        <Image
          style={styles.shopOfferPreviewImage}
          source={
            typeOfCookie == "buttercup"
              ? require("../../assets/images/buttercup-cookie.png")
              : typeOfCookie == "chocolatechip"
              ? require("../../assets/images/chocolate-chip-cookie.png")
              : require("../../assets/images/no-image.png")
          }
        />
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
                dispatch({
                  type: "remove",
                  value: prices.get(typeOfCookie),
                });
                (async () => {
                  await addTypesChocolateChip();
                })();
              }
              if (typeOfCookie == "buttercup") {
                dispatch({
                  type: "remove",
                  value: prices.get(typeOfCookie),
                });
                (async () => {
                  await addTypesButtercup();
                })();
              }
              setBought(true)
            }
          }}
        >
          {cookieAmount >= prices.get(typeOfCookie)
            ? "BUY FOR " + prices.get(typeOfCookie)
            : "You don't have enough cookies " +
              "(" +
              prices.get(typeOfCookie) +
              ")"}
        </Text>
      </View>
    </>
  );
};

// For test purposes

export const TestElements = ({}) => {
  return (
    <View style={styles.testButtons}>
      <Text
        onPress={() => {
          (async () => {
            await deleteTypesButtercup();
            await deleteTypesChocolateChip();
            // hasButtercup();
            // hasChocolateChip();
          })();
        }}
      >
        DELETE ALL TYPES
      </Text>
      <Text
        onPress={() => {
          (async () => {
            await addTypesButtercup();
            await addTypesChocolateChip();
            // hasButtercup();
            // hasChocolateChip();
          })();
        }}
      >
        ADD ALL TYPES
      </Text>
      <Text
        onPress={() => {
          (async () => {
            await deleteTypesButtercup();
            // hasButtercup();
          })();
        }}
      >
        DELETE BUTTERCUP
      </Text>
      <Text
        onPress={() => {
          (async () => {
            await addTypesButtercup();
            // hasButtercup();
          })();
        }}
      >
        ADD BUTTERCUP
      </Text>
      <Text
        onPress={() => {
          (async () => {
            await deleteTypesChocolateChip();
            // hasChocolateChip();
          })();
        }}
      >
        DELETE CHOCOLATE CHIP
      </Text>
      <Text
        onPress={() => {
          (async () => {
            await addTypesChocolateChip();

          })();
        }}
      >
        ADD CHOCOLATE CHIP
      </Text>
    </View>
  );
};
