// ---------Third-party components & modules---------
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// ---------Custom components & modules---------
import { Welcome, Home, About, FinanceSetup, Help } from "../screens";

// Create navigation stack
const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: "card",
          animationTypeForReplace: "push",
          animation: "slide_from_right",
          unmountOnBlur: true,
        }}
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="FinanceSetup" component={FinanceSetup} />
        <Stack.Screen name="Help" component={Help} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
