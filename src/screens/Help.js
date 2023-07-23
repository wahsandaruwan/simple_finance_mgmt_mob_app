// ----------Inbuilt components and modules----------
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Image,
} from "react-native";

// ---------Third-party components & modules---------
import * as Icons from "react-native-heroicons/solid";

export default function Help() {
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
          Get Help!
        </Text>
        <View style={{ width: "100%" }}>
          <Image
            source={require("../../assets/contact.jpeg")}
            style={{ width: "100%", height: 200, marginBottom: 10 }}
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Feel free to contact us!
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Icons.EnvelopeIcon size="20" color="black" />
          <Text style={{ fontSize: 14, marginLeft: 10 }}>
            contact@finmgapp.com
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Icons.PhoneIcon size="20" color="black" />
          <Text style={{ fontSize: 14, marginLeft: 10 }}>+9456246325</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
