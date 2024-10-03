import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",

  },
  tabName: {
    fontStyle: "normal",
    fontFamily: "papyrus",
    textAlign: "center",
    fontSize: 50,
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
  tabBarIcon: {
    height: 50,
    width: 50,
  },
  cookieContainer: {

  },
  cookieCounterText: {
    fontFamily: "papyrus",
    position: "relative",
    fontSize: 30,
    textAlign: "center",
    textAlignVertical: "center",
  },
  cookieImage: {
    position: "relative",
    alignSelf: "center",
    height: 25,
    width: 25,
  },
  HIDDEN: {
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
  shopOffer: {},
  shopOfferText: {},

  TimerView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100,
  },

  bakingTimer: {
    textAlign: "center",
    fontFamily: "papyrus",
    fontSize: 40,
    color: "#121212",
    marginTop: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  collectButton: {
    marginTop: 300,
    overflow: "hidden",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 40,
    fontFamily: "papyrus",
    borderRadius: 30,
    textAlignVertical: "center",
  },
  emptystyle: {},
  bakeButton: {
    overflow: "hidden",
    marginTop: 300,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 40,
    fontFamily: "papyrus",
    color: "#121212",
    borderRadius: 30,
    textAlignVertical: "center",
  },
  cookieSelector: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cookieTypeBOTH: {
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: 30,
    fontFamily: "papyrus",
  },
  cookieTypeSelected: {
    overflow: "hidden",
    borderColor: "orange",
    fontWeight: 500,
    borderWidth: 5,
    height: 50,
    borderRadius: 20,
  },
  cookieTypeNotSelected: {
    borderWidth: 0,
  },
  cacaoCounter: {
    
  },
  cacaoCounterText: {
    fontFamily: "papyrus",
    position: "relative",
    fontSize: 30,
    textAlign: "center",
    textAlignVertical: "center",
  },
  cacaoCounterImage: {
    position: "relative",
    alignSelf: "center",
    height: 25,
    width: 25,
  },
  cacaoContainer:{
    display: "flex",
    flexDirection: "column",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  cacaoTree: { 
    height: 300,
    width: 300, 
  },
  cacaoTreeCollectText: {
    fontSize: 70,
    fontFamily: "papyrus",
    textAlign: 'center'
  },
  bothCounters: { 
    marginTop: 50,
    height: 50,
    display : 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backfaceVisibility: 'hidden',
    overflow: 'hidden'
  }
});
