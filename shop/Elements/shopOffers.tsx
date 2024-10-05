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

export const ShopOfferWindow = ({
  typeOfCookie,
  setHasButtercup,
  setHasChocolateChip,
  hasButtercup,
  hasChocolateChip,
}) => {
  const cookieAmount = useContext(CookieContext);
  const dispatch = useContext(CookieDispatchContext);

  return (
    <>
      <View
        style={
          typeOfCookie == "chocolatechip"
            ? hasChocolateChip
              ? styles.HIDDEN
              : styles.shopOfferContainer
            : typeOfCookie == "buttercup"
            ? hasButtercup
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
                setHasChocolateChip(true);
                (async () => {
                  await addTypesChocolateChip();
                })();
              }
              if (typeOfCookie == "buttercup") {
                setHasButtercup(true);
                (async () => {
                  await addTypesButtercup();
                })();
              }
            }
          }}
        >
          {cookieAmount >= prices.get(typeOfCookie)
            ? "BUY FOR " + prices.get(typeOfCookie)
            : "You don't have enough cookies " +"(" + prices.get(typeOfCookie) + ")"}
        </Text>
      </View>
    </>
  );
};

// For test purposes

export const TestElements = ({ setHasButtercup, setHasChocolateChip }) => {
  return (
    <View style = {styles.testButtons}>
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
      <Text
        onPress={() => {
          (async () => {
            setHasButtercup(false);
            await deleteTypesButtercup();
          })();
        }}
      >
        DELETE BUTTERCUP
      </Text>
      <Text
        onPress={() => {
          (async () => {
            setHasButtercup(true);
            await addTypesButtercup();
          })();
        }}
      >
        ADD BUTTERCUP
      </Text>
      <Text
        onPress={() => {
          (async () => {
            setHasChocolateChip(false);
            await deleteTypesChocolateChip();
          })();
        }}
      >
        DELETE CHOCOLATE CHIP
      </Text>
      <Text
        onPress={() => {
          (async () => {
            setHasChocolateChip(true);
            await addTypesChocolateChip();
          })();
        }}
      >
        ADD CHOCOLATE CHIP
      </Text>
    </View>
  );
};
