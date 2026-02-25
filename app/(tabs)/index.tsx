import { Link } from "expo-router";
import { Text, View , StyleSheet} from "react-native";

export default function Index() {
  return (
    <View
      style={styles.view}
    >
      <Text>Hello World!!</Text>
      <Link href={"/login"} 
      style={styles.navButton}>Login Page</Link>
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
    width: 100, height: 30, backgroundColor: "blue", justifyContent: "center", alignItems: "center", marginTop: 20, borderRadius: 10, textAlign: "center"
  }
})