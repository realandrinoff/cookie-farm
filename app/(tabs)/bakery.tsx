import { View, Text, Button } from "react-native";
import { useContext, useState } from "react";
import { styles } from "../../assets/Styles";
import { CookieContext, CookieDispatchContext } from "../cookieContext";

import { TouchableOpacity } from "react-native-gesture-handler";
import React from "react";
import { CookieBakingTimeMap, CookieValueMap } from "../../gameFiles/CookieMap";
import { BakingTimer } from "../../gameFiles/bakingElements";
import { CookieOptions } from "../../gameFiles/options";



export default function bakeryScreen() {
  const [isChocChip, setIsChocChip] = useState(false);
  const [isRegular, setIsRegular] = useState(true);
  const dispatch = useContext(CookieDispatchContext);
  const cookieCount = useContext(CookieContext);
  var [hideOptions, setHideOptions] = useState(false);
  return (
    <>

      <View style={styles.bodyContainer}>
        
        <Text style={styles.tabName}>Bakery Screen</Text>
        <View>
        <CookieOptions hideOptions={hideOptions} isChocChip={isChocChip} isRegular={isRegular} setIsChocChip={setIsChocChip} setIsRegular={setIsRegular}/>
        
        <BakingTimer
          hideOptions={hideOptions}
          setHideOptions={setHideOptions}
          isChocChip={isChocChip}
          isRegular={isRegular}
          seconds={CookieBakingTimeMap.get(
            isChocChip ? "chocolatechip" : "regular"
          )}
          CookieType={isChocChip ? "chocolatechip" : "regular"}
        />
        </View>
        </View>
    </>
  );
}
