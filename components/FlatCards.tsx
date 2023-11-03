import {Button, StyleSheet, Text, View} from "react-native";
import React from "react";
import {Dimensions} from "react-native";

const screenHeight = Dimensions.get("window").height;

export default function FlatCards({navigation}: any) {
  return (
    <View style={{backgroundColor: "#FFD700", minHeight: screenHeight}}>
      <Text style={styles.headingText}>Color Cards :</Text>
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.cardBg1]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardBg2]}>
          <Text style={styles.text}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardBg3]}>
          <Text style={styles.text}>Yellow</Text>
        </View>
        <View style={[styles.card, styles.cardBg4]}>
          <Text style={styles.text}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardBg5]}>
          <Text style={styles.text}>Pink</Text>
        </View>
        <View style={[styles.card, styles.cardBg6]}>
          <Text style={styles.text}>Purple</Text>
        </View>
        <View style={[styles.card, styles.cardBg7]}>
          <Text style={styles.text}>Violate</Text>
        </View>
        <View style={[styles.card, styles.cardBg8]}>
          <Text style={styles.text}>Brown</Text>
        </View>
        <View style={[styles.card, styles.cardBg9]}>
          <Text style={styles.text}>Black</Text>
        </View>
        <View style={[styles.card, styles.cardBg10]}>
          <Text style={styles.text}>Teal</Text>
        </View>
        <View style={[styles.card, styles.cardBg11]}>
          <Text style={styles.text2}>White</Text>
        </View>
        <View style={[styles.card, styles.cardBg12]}>
          <Text style={styles.text}>Gray</Text>
        </View>
      </View>
      <View style={styles.btn}>
        <Button
          onPress={() => navigation.navigate("QuizPage")}
          title="Play Quiz"
          color="#841584"
          accessibilityLabel="Play quiz"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "600",
    marginLeft: 12,
    padding: 12,
    color: "black",
  },
  cardContainer: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
    gap: 16,
  },
  card: {
    borderRadius: 10,
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  cardBg1: {
    backgroundColor: "red",
  },
  cardBg2: {
    backgroundColor: "green",
  },
  cardBg3: {
    backgroundColor: "yellow",
  },
  text: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  text2: {
    color: "#000",
    fontWeight: "bold",
  },
  cardBg4: {
    backgroundColor: "blue",
  },
  cardBg5: {
    backgroundColor: "pink",
  },
  cardBg6: {
    backgroundColor: "purple",
  },
  cardBg7: {
    backgroundColor: "#7F00FF",
  },
  cardBg8: {
    backgroundColor: "brown",
  },
  cardBg9: {
    backgroundColor: "black",
  },
  cardBg10: {
    backgroundColor: "teal",
  },
  cardBg11: {
    backgroundColor: "white",
  },
  cardBg12: {
    backgroundColor: "gray",
  },
  btn: {
    paddingHorizontal: 56,
    paddingVertical: 36,
  },
  bottomTextBody: {
    flex: 1,
    alignItems: "center",
    marginBottom: 40,
  },
  bottomText: {
    color: "black",
    fontSize: 16,
  },
});
