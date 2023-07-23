// ----------Inbuilt components and modules----------
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";

// ---------Third-party components & modules---------
import * as Icons from "react-native-heroicons/solid";

export default function Welcome({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="skyblue" />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Icons.BanknotesIcon size="70" color="black" />
        <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10 }}>
          Welcome to,
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
          Finance Management App!
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            backgroundColor: "black",
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Text style={{ color: "white" }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
