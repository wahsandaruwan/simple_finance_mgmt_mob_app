// ----------Inbuilt components and modules----------
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";

export default function About({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="skyblue" />
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          About the App!
        </Text>
        <View style={{ width: "100%" }}>
          <Image
            source={require("../../assets/about.jpg")}
            style={{ width: "100%", height: 200, marginBottom: 10 }}
          />
        </View>
        <Text style={{ textAlign: "justify", marginBottom: 10 }}>
          Finance Management App is a user-friendly and intuitive mobile app
          designed to simplify your financial management and empower you to take
          control of your finances. With its powerful features and elegant
          interface, Finance Management App is the ideal tool to help you
          achieve your financial goals and make smarter money decisions.
        </Text>
        <TouchableOpacity
          style={{
            width: "100%",
            backgroundColor: "black",
            paddingHorizontal: 20,
            paddingVertical: 15,
          }}
          onPress={() => navigation.navigate("Help")}
        >
          <Text style={{ textAlign: "center", color: "white" }}>Help</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
