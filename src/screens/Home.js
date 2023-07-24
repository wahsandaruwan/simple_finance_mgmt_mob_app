// ----------Inbuilt components and modules----------
import { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";

// ---------Third-party components & modules---------
import * as Icons from "react-native-heroicons/solid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

// ---------Custom components & modules---------
import { FinanceCard } from "../components";

export default function Home({ navigation }) {
  // Focus
  const isFocused = useIsFocused();

  const [finances, setFinances] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const [filteredFinances, setFilteredFinances] = useState([]);

  // Fetch finances
  useEffect(() => {
    handleFinancesFetch();
  }, []);

  // Filter finances
  useEffect(() => {
    handleFilterFinances();
  }, [searchQuery, finances]);

  // Fetch finances on focus
  useEffect(() => {
    if (isFocused) {
      handleFinancesFetch();
    }
  }, [isFocused]);

  // Function to handle fetch finances
  const handleFinancesFetch = async () => {
    try {
      const availableData = await AsyncStorage.getItem("finances");
      if (availableData) {
        setFinances(JSON.parse(availableData));
      }
    } catch (error) {
      console.error("Error fetching finances", error);
    }
  };

  // Function to handle filter finances
  const handleFilterFinances = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = finances.filter(
      (finance) =>
        finance.financeName.toLowerCase().includes(lowerCaseQuery) ||
        finance.financeType.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredFinances(filtered);
  };

  // Function to get total of finances
  const getTotalFinances = () => {
    return filteredFinances.reduce(
      (total, finance) =>
        finance.financeType === "Past Expense" ||
        finance.financeType === "Future Expense"
          ? total - finance.financeAmount
          : total + finance.financeAmount,
      0
    );
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
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <TextInput
            placeholder="Search Finance..."
            style={{
              width: "65%",
              height: "100%",
              paddingVertical: 10,
              paddingHorizontal: 20,
              backgroundColor: "skyblue",
              color: "black",
            }}
            onChangeText={(txt) => setSearchQuery(txt)}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              padding: 5,
            }}
            onPress={() => navigation.navigate("FinanceSetup")}
          >
            <Icons.PlusCircleIcon size="40" color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              padding: 5,
            }}
            onPress={() => navigation.navigate("About")}
          >
            <Icons.CheckBadgeIcon size="40" color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "black",
            padding: 15,
            marginBottom: 5,
          }}
        >
          <Icons.CurrencyDollarIcon size="50" color="white" />
          <Text style={{ color: "white", fontSize: 18, marginLeft: 10 }}>
            Finance
          </Text>
          <Text
            style={{
              backgroundColor: "white",
              color: "black",
              fontSize: 18,
              marginLeft: 10,
              padding: 8,
              borderRadius: 8,
            }}
          >
            USD : {getTotalFinances()}
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%", backgroundColor: "white" }}
        >
          {filteredFinances.length > 0 ? (
            filteredFinances.map((item) => (
              <FinanceCard
                financeName={item.financeName}
                financeType={item.financeType}
                financeAmount={item.financeAmount}
                processedDate={item.processedDate}
                key={item.financeId}
              />
            ))
          ) : (
            <Text>No Finances Available!</Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
