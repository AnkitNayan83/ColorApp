import React from "react";
import FlatCards from "./components/FlatCards";
import QuizPage from "./components/QuizPage";
import HomePage from "./components/HomePage";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomePage}
        />
        <Stack.Screen
          name="Color Cards"
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#FFD700",
            },
            headerTintColor: "#333",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShadowVisible: false,
          }}
          component={FlatCards}
        />
        <Stack.Screen
          name="QuizPage"
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#FFD700",
            },
            headerTintColor: "#333",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShadowVisible: false,
          }}
          component={QuizPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
