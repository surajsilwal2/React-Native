import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.view}
    >
      <Text>Welcome to React Native</Text>
      

    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  }, 
  navButton: {
    marginTop: 5,
    width: 100,
   textAlign: 'center',
    height: 20,
    backgroundColor: 'lightblue',
  }
  })
