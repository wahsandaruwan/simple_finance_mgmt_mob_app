// ----------Inbuilt components and modules----------\
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
export default function FinanceSetup() {
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
        <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 20 }}>
          Add Finance
        </Text>
        <TextInput
          placeholder="Enter Amount..."
          style={{
            width: "100%",
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: "skyblue",
            color: "black",
            marginBottom: 10,
          }}
        />
        <TouchableOpacity
          style={{
            width: "100%",
            backgroundColor: "black",
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            Add Finance
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
