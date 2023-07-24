// ----------Inbuilt components and modules----------
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// ---------Third-party components & modules---------
import * as Icons from "react-native-heroicons/solid";

export default function FinanceCard({
  financeId,
  financeName,
  financeType,
  financeAmount,
  processedDate,
  deleteFunc,
}) {
  return (
    <View
      style={{
        padding: 15,
        backgroundColor: "skyblue",
        marginVertical: 5,
        position: "relative",
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
        <Text
          style={{
            fontSize: 16,
            color: "black",
            fontWeight: "bold",
          }}
        >
          {financeName}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "black",
            fontWeight: "bold",
          }}
        >
          USD : {financeAmount}
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 12, color: "black" }}>{financeType}</Text>
        <Text style={{ fontSize: 12, color: "black", marginLeft: 10 }}>
          {processedDate}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          padding: 5,
          position: "absolute",
          right: 0,
          bottom: 0,
        }}
        onPress={() => deleteFunc(financeId)}
      >
        <Icons.MinusCircleIcon size="20" color="white" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({});
