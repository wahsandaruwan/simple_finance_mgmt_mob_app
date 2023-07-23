// ----------Inbuilt components and modules----------
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
            marginBottom: 10,
          }}
        >
          <TextInput
            placeholder="Search Finance..."
            style={{
              width: "82%",
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
          {/* <TouchableOpacity
            style={{
              backgroundColor: "black",
              padding: 5,
            }}
            onPress={() => navigation.navigate("FinanceSetup")}
          >
            <Icons.ChartBarSquareIcon size="40" color="white" />
          </TouchableOpacity> */}
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
            All Finance
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
            USD : 100
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%", backgroundColor: "white" }}
        >
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
                Education
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                USD : 10
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
              <Text style={{ fontSize: 12, color: "black" }}>
                Past Expenses
              </Text>
              <Text style={{ fontSize: 12, color: "black", marginLeft: 10 }}>
                2023-07-22
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
            >
              <Icons.MinusCircleIcon size="20" color="white" />
            </TouchableOpacity>
          </View>
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
                Health
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                USD : 50
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
              <Text style={{ fontSize: 12, color: "black" }}>
                Future Expense
              </Text>
              <Text style={{ fontSize: 12, color: "black", marginLeft: 10 }}>
                2023-07-26
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
            >
              <Icons.MinusCircleIcon size="20" color="white" />
            </TouchableOpacity>
          </View>
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
                Sales
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                USD : 120
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
              <Text style={{ fontSize: 12, color: "black" }}>
                Future Income
              </Text>
              <Text style={{ fontSize: 12, color: "black", marginLeft: 10 }}>
                2023-07-30
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
            >
              <Icons.MinusCircleIcon size="20" color="white" />
            </TouchableOpacity>
          </View>
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
                Commissions
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                USD : 40
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
              <Text style={{ fontSize: 12, color: "black" }}>Past Income</Text>
              <Text style={{ fontSize: 12, color: "black", marginLeft: 10 }}>
                2023-07-20
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
            >
              <Icons.MinusCircleIcon size="20" color="white" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
