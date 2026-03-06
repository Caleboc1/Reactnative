import { useAuth } from "@/lib/auth-context";
import { Link } from "expo-router";
import { Text, View , StyleSheet} from "react-native";
import { Button } from "react-native-paper";

export default function Index() {
  const {signOut} = useAuth();
  return (
    <View
      style={styles.view}
    >
      <Text>Hello World!!</Text>
      <Button mode="text" onPress={signOut} icon={"logout"}>Sign Out</Button>
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