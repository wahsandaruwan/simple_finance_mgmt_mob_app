// ----------Inbuilt components and modules----------
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";

// ---------Third-party components & modules---------
import * as Icons from "react-native-heroicons/solid";

export default function Home({ navigation }) {
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
            onPress={() => navigation.navigate("FinanceSetup")}
          >
            <Icons.ChartBarSquareIcon size="40" color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
