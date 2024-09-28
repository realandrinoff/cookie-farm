import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    bodyContainer:{
        height: "100%",
        width: "100%", 
        backgroundColor: "#FFFFFF",
    },
    tabName: {
        fontStyle: "normal",
        fontFamily: "papyrus",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 70,
        padding: 10,
        marginTop: 30,
        borderRadius: 10,
        color: "#121212",
        fontWeight: "bold",
    },
    tabBar: {
        backgroundColor: "#D8D2C2",
        height: 100,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        elevation: 2,

    },
    tabBarText: {
        fontSize: 30,
        color: "#ECEDEE",
        fontWeight: "bold",
    },
    tabBarIcon: {
        height: 50,
        width: 50,

    },   
    cookieContainer: {
        display: "flex",
        flexDirection: "row",
        marginTop: 50,
        marginLeft: "75%",
        borderRadius: 100,
        width: "25%",
        height: 50,
        // backgroundColor: "#FF6347",
        color: "#ffffff",
        fontSize: 100,
        padding: 5,
        // left: "54%",
        backgroundColor: "#137989", 
        textAlign: "center",
        textAlignVertical: "center",
        // position: "absolute",
    },
    cookieCounterText: {

        fontFamily: "papyrus",
        position: "relative",
        fontSize: 50,
        textAlign: "center", 
        textAlignVertical: "center",
    },
    cookieImage: {
        position: "relative",
        alignSelf: "center",
        height: 50,
        width: 50,
    },
    HIDDEN : {
        display: "none",
    },
    normalText: {
        fontSize: 35,
        fontFamily: "papyrus",
        color: "#121212",
        display: "flex",
        textAlign: "center",
        alignContent: "center",
    },
    shopOffer: {

    }, 
    shopOfferText: {

    }
    
}) 

