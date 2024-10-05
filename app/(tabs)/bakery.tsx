import { View, Text, Button } from "react-native";
import { useContext, useEffect, useState } from "react";
import { styles } from "../../assets/Styles";
import { CookieContext, CookieDispatchContext } from "../cookieContext";

import { TouchableOpacity } from "react-native-gesture-handler";
import React from "react";
import { CookieBakingTimeMap, CookieValueMap } from "../../gameFiles/maps/CookieMap";
import {
  BakingTimer,
  CookieRequirements,
} from "../../gameFiles/elements/bakingElements";
import { CookieOptions } from "../../gameFiles/elements/options";
import { checkTypesButtercup, checkTypesChocolateChip } from "../../shop/data/shopData";

export default function bakeryScreen() {
  const [typeOfCookie, setTypeOfCookie] = useState<string>("regular");
  const [isRegular, setIsRegular] = useState(true);
  const dispatch = useContext(CookieDispatchContext);
  const cookieCount = useContext(CookieContext);
  var [hideOptions, setHideOptions] = useState(false);
  const [hasButtercup, setHasButtercup] = useState(false);
  const [hasChocolateChip, setHasChocolateChip] = useState(false);
  useEffect(() => {
    (async () => {
      setHasButtercup(await checkTypesButtercup());
      setHasChocolateChip(await checkTypesChocolateChip());
    })();
  })
  return (
    <>
      <View style={styles.bodyContainer}>
        <Text style={styles.tabName}>Bakery Screen</Text>
        <View>
          <CookieOptions
            hasButtercup={hasButtercup}
            hasChocolateChip={hasChocolateChip}
            hideOptions={hideOptions}
            typeOfCookie={typeOfCookie}
            setTypeOfCookie={setTypeOfCookie}
          />
          <CookieRequirements typeOfCookie={typeOfCookie} />

          <BakingTimer
            hideOptions={hideOptions}
            setHideOptions={setHideOptions}
            typeOfCookie={typeOfCookie}
            seconds={CookieBakingTimeMap.get(typeOfCookie)}
          />
        </View>
      </View>
    </>
  );
}
