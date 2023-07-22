// ----------Inbuilt components and modules----------
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
export default function Welcome() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10 }}>
          Welcome to,
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
          Finance Management App!
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Text style={{ color: "black" }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
