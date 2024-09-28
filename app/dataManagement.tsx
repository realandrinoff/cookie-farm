import AsyncStorage from "@react-native-async-storage/async-storage";

export const addCookies = async(cookies: number) => {
    var amountCookies:any = await AsyncStorage.getItem("cookies")
    console.log(amountCookies)
    if (amountCookies == "null") {
        await AsyncStorage.setItem("cookies", JSON.stringify(cookies));
        console.log(await AsyncStorage.getItem("cookies"))
    }else {
        amountCookies = parseInt(amountCookies);
        amountCookies += cookies;
        console.log(amountCookies)
        await AsyncStorage.setItem("cookies", JSON.stringify(amountCookies));
    }
}
export const deleteCookies = async(price: number) => {
    var amountCookies:any = await AsyncStorage.getItem("cookies")
    if (amountCookies == null) {
        return "No cookies";
    }
    else if (parseInt(amountCookies) < price) {
        return "Less than price";
    }
    else {
        amountCookies = parseInt(amountCookies)
        amountCookies -= price;
        await AsyncStorage.setItem("cookies", JSON.stringify(amountCookies));
    }
}
export async function getCookies() :Promise<number>{
    var amountCookies:any = await AsyncStorage.getItem("cookies")
    console.log(amountCookies, "cookies")
    if (amountCookies === null) {
        console.log("No cookies")
        return 0;
    }
    else {
        amountCookies = parseInt(amountCookies);
        console.log(amountCookies);
        return amountCookies;
    }

}
export function setCooldown (){


}

export function startCooldown(){


}