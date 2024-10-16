import { StyleSheet } from "react-native";
import { ShopOfferWindow } from "../shop/Elements/shopOffers";

export const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",

  },
  mainLogo: {
    marginTop: 100,
    fontFamily: "papyrus",
    fontSize: 50,
    textAlign: "center"
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
    marginTop: 20,
    height: 50,
    width: 50,
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
    top: 450,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  collectButton: {
    top: 450,
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
    top: 250,
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
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "#f1efe9",
    // width: 100,
    padding: 20,
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-around",
  },
  cookieTypeALL: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: 30,
    fontFamily: "papyrus",
  },
  cookieTypeSelected: {
    overflow: "hidden",
    borderColor: "#D8D2C2",
    fontWeight: 500,
    borderWidth: 5,
    // height: 50,
    borderRadius: 20,
  },
  cookieTypeNotSelected: {
    borderWidth: 0,
  },
  cookieTypeNotAcquired: {
    color: "gray",
  },
  cookieTypeAcquired: {
    color: "black",
  },
  cacaoCounter: {},
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
  cacaoContainer: {
    display: "flex",
    flexDirection: "column",

    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  cacaoTree: {
    marginBottom: 50,
    marginTop: 50,
    height: 200,
    width: 200,
  },
  cacaoTreeCollectText: {
    fontSize: 50,
    fontFamily: "papyrus",
    textAlign: "center",
  },
  allCountersParent: {
    backgroundColor: "#fff",
    height: 120,
  },
  allCounters: {
    
    marginTop: 50,
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backfaceVisibility: "hidden",
    overflow: "hidden",
  },
  cacaoTreeUpgradeText: {
    fontSize: 30,
    fontFamily: "papyrus",
    textAlign: "center",
  },
  cacaoTreeUpgradeContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 50,
  },
  requirementsText: {
    fontSize: 30,
    fontFamily: "papyrus",
    textAlign: "center",
  },
  requirementsIcons: {
    alignContent: "center",
    marginBottom: 13,
    height: 25,
    width: 25,
  },
  shopOfferContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderColor: "#000",
    borderRadius: 20,
    width: 200,
    height: 200,
    marginTop: 50,
    marginBottom: 50,
  },
  shopOfferText: {
    fontFamily: "papyrus",
    fontSize: 30,
    textAlign: "center",
  },
  shopOfferPreviewImage: {
    alignSelf: "center",
    width: 100,
    height: 100,
  },
  shopOffersContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buyButton: {
    fontFamily: "papyrus",
    fontSize: 20,
    textAlign: "center",
  },
  testButtons: {
    display: "flex",
    alignSelf: "center",
  },
  requirementsContainer: {
    marginTop: 20,
  },
  bakeryTests: {
    display: "flex",
    flexDirection: "row",
  },
  levelCounter: {
    marginTop: 300,
    fontFamily: "papyrus",
    textAlign: "center",
    fontSize: 100,
  },
  toNextLevelCounter: {
    fontFamily: "papyrus",
    textAlign: "center",
    fontSize: 30,
  },
  lockedContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  lockedIcon: {
    alignSelf: "center",
    height: 100,
    width: 100,
    marginBottom: 20,
  },
  lockedText: {
    fontSize: 30,
    fontFamily: "papyrus",
    textAlign: "center",
  },
  exchangeContainerText: {
    fontSize: 50,
    fontFamily: "papyrus",
    textAlign: "center",
  },
  exchangeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  resetButtonText: {
    fontFamily: "papyrus",
    borderColor: "red",
    borderWidth: 3,
    borderRadius: 20,
    textAlign: "center",
    fontSize: 40,
    textAlignVertical: "center",
  
  },
  noWebSupport: {
    top: "50%",
    fontFamily: "papyrus",
    fontSize: 100,
    textAlign: "center",
    color: "red",
  },

  credits: {
    fontFamily: 'papyrus',
    fontSize: 20,
    textAlign: 'center',
    top: "82%",
  }
});
