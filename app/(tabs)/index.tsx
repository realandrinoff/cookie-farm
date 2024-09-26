import { Image, StyleSheet, Platform } from 'react-native';


export default function HomeScreen() {
  return(
    <h1 style={{ 
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 30,
      textAlign: 'center',
      marginTop: "50px",
      fontFamily: 'SpaceMono'
    }}>
      Home page
      </h1>

  );
}
