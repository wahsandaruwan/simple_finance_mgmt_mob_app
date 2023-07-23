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
import { DropDown } from "../components";
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
          Setup Finance
        </Text>
        <DropDown />
        <TextInput
          placeholder="Enter Name..."
          style={{
            width: "100%",
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: "skyblue",
            color: "black",
            marginBottom: 10,
          }}
        />
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
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={{
            width: "100%",
            backgroundColor: "black",
            paddingHorizontal: 20,
            paddingVertical: 15,
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
