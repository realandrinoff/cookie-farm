import React, { useContext } from "react";
import { CacaoContext, CacaoDispatchContext } from "../../app/context/cacaoContext";
import { CookieDispatchContext } from "../../app/context/cookieContext";
import { View, Text, Image } from "react-native";
import { cookieExchangeMap } from "../maps/cookieExchangeMap";
import { styles } from "../../assets/Styles";
import { PeanutContext, PeanutDispatchContext } from "../../app/context/peanutContext";

export const CacaoExchange = ({}) => {
    const cacaoCount = useContext(CacaoContext);
    const dispatchCacao = useContext(CacaoDispatchContext)
    const dispatch = useContext(CookieDispatchContext)

    return (
        <View style = {styles.shopOfferContainer}>
            <Image style = {styles.shopOfferPreviewImage} source={require("../../assets/images/cookie-regular.png")} />
            <Text style = {styles.shopOfferText}>Cacao to Cookies</Text>
            <Text style = {styles.buyButton} onPress={() => {
                if (cookieExchangeMap.get("cacao") <= cacaoCount){
                    dispatchCacao({
                        type: "remove",
                        value: cookieExchangeMap.get("cacao")
                    })
                    dispatch({
                        type: "add",
                        value: 1
                    })}
                else {
                    return;
                }
            }}>{cacaoCount < cookieExchangeMap.get("cacao") ? "You don't have enough cacao" + " (" + cookieExchangeMap.get("cacao") + ")" : "BUY 1 COOKIE FOR " + cookieExchangeMap.get("cacao") + " cacao"}</Text>
        </View>
    )
}
export const PeanutExchange = ({}) => {
    const peanutCount = useContext(PeanutContext);
    const dispatchPeanuts = useContext(PeanutDispatchContext)
    const dispatch = useContext(CookieDispatchContext)

    return (
        <View style = {styles.shopOfferContainer}>
            <Image style = {styles.shopOfferPreviewImage} source={require("../../assets/images/cookie-regular.png")} />
            <Text style = {styles.shopOfferText}>Cacao to Cookies</Text>
            <Text style = {styles.buyButton} onPress={() => {
                if (cookieExchangeMap.get("peanut") <= peanutCount){
                    dispatchPeanuts({
                        type: "remove",
                        value: cookieExchangeMap.get("peanut")
                    })
                    dispatch({
                        type: "add",
                        value: 1
                    })}
                else {
                    return
                }
            }}>{peanutCount < cookieExchangeMap.get("peanut") ? "You don't have enough peanuts " + " (" + cookieExchangeMap.get("peanut") + ")" : "BUY 1 COOKIE FOR " + cookieExchangeMap.get("peanut") + " peanuts"}</Text>
        </View>
    )
}