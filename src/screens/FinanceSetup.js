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
  Alert,
} from "react-native";

// ----------Third-party components and modules----------
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";

// ----------Custom components and modules----------
import { DropDown } from "../components";

export default function FinanceSetup() {
  // All states
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [data, setData] = useState({
    financeId: Date.now(),
    financeType: null,
    financeName: "",
    financeAmount: "",
    processedDate: date.toISOString().split("T")[0],
  });

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    setData((prev) => ({
      ...prev,
      processedDate: currentDate.toISOString().split("T")[0],
    }));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  // Function to handle save finance
  const handleFinanceSave = async () => {
    try {
      // Validation
      if (data.financeType === null) {
        Alert.alert("Error", "Enter finance type!");
        return;
      } else if (data.financeName === "") {
        Alert.alert("Error", "Enter finance name!");
        return;
      } else if (data.financeAmount === "") {
        Alert.alert("Error", "Enter finance amount!");
        return;
      }

      const availableData = await AsyncStorage.getItem("finances");
      let finances = [];
      if (availableData) {
        finances = JSON.parse(availableData);
      }
      finances.push(data);
      await AsyncStorage.setItem("finances", JSON.stringify(finances));

      setDate(new Date());
      setData({
        financeId: Date.now(),
        financeType: null,
        financeName: "",
        financeAmount: "",
        processedDate: date.toISOString().split("T")[0],
      });
      setIsReset(true);
      Alert.alert("Success", "Successfully added a new finance!");
      // await AsyncStorage.removeItem("finances");
    } catch (error) {
      console.error("Error adding finance", error);
    }
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
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          Setup Finance
        </Text>
        <DropDown
          selectType={(itemValue) =>
            setData((prev) => ({ ...prev, financeType: itemValue }))
          }
          reset={isReset}
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
          <Text style={{ textAlign: "left", color: "black" }}>
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
          onChangeText={(txt) =>
            setData((prev) => ({ ...prev, financeName: txt }))
          }
          value={data.financeName}
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
          onChangeText={(txt) =>
            setData((prev) => ({ ...prev, financeAmount: parseFloat(txt) }))
          }
          value={data.financeAmount.toString()}
        />
        <TouchableOpacity
          style={{
            width: "100%",
            backgroundColor: "black",
            paddingHorizontal: 20,
            paddingVertical: 15,
          }}
          onPress={() => handleFinanceSave()}
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
