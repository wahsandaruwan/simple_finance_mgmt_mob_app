// ----------Inbuilt components and modules----------
import { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";

// ----------Third-party components and modules----------
import DateTimePicker from "@react-native-community/datetimepicker";

// ----------Custom components and modules----------
import { DropDown } from "../components";

export default function FinanceSetup() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

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
            backgroundColor: "skyblue",
            paddingHorizontal: 20,
            paddingVertical: 15,
            marginBottom: 10,
          }}
          onPress={showDatepicker}
        >
          <Text style={{ textAlign: "center", color: "black" }}>
            {`Select Date (${date.toISOString().split("T")[0]})`}
          </Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
        <TouchableOpacity
          style={{
            width: "100%",
            backgroundColor: "black",
            paddingHorizontal: 20,
            paddingVertical: 15,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            Save Finance
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
