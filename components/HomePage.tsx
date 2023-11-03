import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {Dimensions} from "react-native";
const screenHeight = Dimensions.get("window").height;

const HomePage = ({navigation}: any) => {
  return (
    <View style={styles.body}>
      <Image style={styles.bgImg} source={require("../img/border.png")} />
      <View style={styles.container}>
        <Text style={styles.logo}>Colorita</Text>
        <Pressable onPress={() => navigation.navigate("Color Cards")}>
          <Text style={styles.options}>Learn About colors</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("QuizPage")}>
          <Text style={styles.options}>Play Color Quiz</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  body: {
    height: screenHeight,
  },
  bgImg: {
    height: "100%",
    position: "relative",
  },
  container: {
    position: "absolute",
    top: 240,
    left: 107,
    display: "flex",
    alignItems: "center",
    gap: 50,
  },
  logo: {
    fontSize: 20,
    color: "#333",
    backgroundColor: "#FFD700",
    padding: 10,
    borderRadius: 20,
    width: 200,
    textAlign: "center",
    fontWeight: "bold",
  },
  options: {
    padding: 10,
    borderRadius: 20,
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 2,
    color: "black",
    width: 200,
    textAlign: "center",
  },
});
