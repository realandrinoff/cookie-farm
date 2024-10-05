import { View, Text} from "react-native"
import { styles } from "../../assets/Styles";
import { ShopOfferWindow, TestElements } from "../../shop/Elements/shopOffers";

export default function shopScreen(){


    return (

        <View style = {styles.bodyContainer}>
        <Text style={styles.tabName}>Shop</Text>
        <View style ={styles.shopOffersContainer}>
        <ShopOfferWindow typeOfCookie={"chocolatechip"}/>
        <ShopOfferWindow typeOfCookie={"buttercup"}/>
        </View>
        </View>
    );
}