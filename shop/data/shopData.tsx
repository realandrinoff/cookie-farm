import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

export const checkTypesChocolateChip = async () => {
  const hasChocolateChip = await AsyncStorage.getItem("hasChocolateChip");
  if (hasChocolateChip == "true") {
    return true;
  } else if (hasChocolateChip != "true") {
    return false;
  }
  throw Error;
};

export const checkTypesButtercup = async () => {
  const hasButtercup = await AsyncStorage.getItem("hasButtercup");
  if (hasButtercup == "true") {
    return true;
  } else if (hasButtercup != "true") {
    return false;
  }
  throw Error;
};

export const addTypesChocolateChip = async () => {
  await AsyncStorage.setItem("hasChocolateChip", JSON.stringify(true));
};

export const addTypesButtercup = async () => {
  await AsyncStorage.setItem("hasButtercup", JSON.stringify(true));
};

export const deleteTypesChocolateChip = async () => {
  await AsyncStorage.setItem("hasChocolateChip", JSON.stringify(false));
};

export const deleteTypesButtercup = async () => {
  await AsyncStorage.setItem("hasButtercup", JSON.stringify(false));
};
