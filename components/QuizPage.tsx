import {Pressable, StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import {Dimensions} from "react-native";
const screenHeight = Dimensions.get("window").height;
import {quizData} from "./quizData";

const data = quizData;

const QuizPage = ({navigation}: any) => {
  const [queNo, setQueNo] = useState(0);
  const [ans, setAns] = useState("");
  const [correctAns, setCorrectAns] = useState("");
  const [res, setRes] = useState(false);
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(true);

  const nextQue = (): void => {
    setQueNo(queNo + 1);
    setCorrectAns("");
    setAns("");
    setRes(false);
  };

  const checkAnswer = (): void => {
    setCorrectAns(data[queNo].correctAnswer);
    setRes(true);
    if (ans === data[queNo].correctAnswer) setScore(score + 1);
  };
  const isPressed = (opt: string): boolean => {
    if (ans === opt) return true;
    else return false;
  };

  const handelPlayAgain = () => {
    setQueNo(0);
    setAns("");
    setCorrectAns("");
    setRes(false);
    setScore(0);
    setShow(true);
  };

  return (
    <View style={styles.body}>
      {show ? (
        <>
          <View style={styles.top}>
            <Text style={styles.topText}>Color Quiz</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.middle}>
              <Text style={styles.queText}>Q.{queNo + 1}</Text>
              <Text style={styles.queText}>
                Select the correct color from the given options
              </Text>
            </View>
            <View style={styles.bottom}>
              <Text
                style={[
                  styles.colorQue,
                  {backgroundColor: data[queNo].color},
                ]}></Text>
              <View style={styles.question}>
                {data[queNo].options.map((opt, i) => (
                  <Pressable disabled={res} onPress={() => setAns(opt)} key={i}>
                    <Text
                      style={[
                        styles.options,
                        isPressed(opt) && styles.pressed,
                        res && correctAns === opt && styles.correctOption,
                        res &&
                          correctAns != opt &&
                          isPressed(opt) &&
                          styles.incorrectOption,
                      ]}>
                      {opt}
                    </Text>
                  </Pressable>
                ))}
              </View>
              <View>
                {res && queNo < 11 && (
                  <Pressable onPress={() => nextQue()}>
                    <Text style={styles.checkBtn}>Next</Text>
                  </Pressable>
                )}

                {!res && queNo <= 11 && (
                  <Pressable
                    disabled={ans === ""}
                    onPress={() => checkAnswer()}>
                    <Text style={styles.checkBtn}>Check Answer</Text>
                  </Pressable>
                )}

                {res && queNo >= 11 && (
                  <Pressable
                    disabled={ans === ""}
                    onPress={() => setShow(false)}>
                    <Text style={styles.checkBtn}>View Result</Text>
                  </Pressable>
                )}
              </View>
              <View>
                {correctAns != "" && ans === correctAns && (
                  <Text style={styles.correctMsg}>
                    😁 Correct Answer keep going!
                  </Text>
                )}
                {correctAns != "" && ans != correctAns && (
                  <Text style={styles.incorrectMsg}>😢 InCorrect Answer!</Text>
                )}
              </View>
            </View>
          </View>
        </>
      ) : (
        <View style={styles.result}>
          <Text style={styles.resultText}>Result</Text>
          <View style={styles.scoreSheet}>
            <Text style={[styles.score, styles.scoreTop]}>{score}</Text>
            <Text style={styles.score}>12</Text>
          </View>
          <View style={styles.resBtn}>
            <Pressable onPress={handelPlayAgain}>
              <Text style={[styles.checkBtn, styles.resBtnGap]}>
                Play Again
              </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Home")}>
              <Text style={styles.checkBtn}>Home</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

export default QuizPage;

const styles = StyleSheet.create({
  resBtn: {
    display: "flex",
    flexDirection: "row",
  },
  resBtnGap: {
    marginRight: 5,
  },
  result: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "70%",
    gap: 40,
  },
  resultText: {
    fontSize: 28,
    fontWeight: "600",
    color: "black",
  },
  scoreSheet: {
    display: "flex",
    borderRadius: 75,
    width: 150,
    height: 150,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    gap: 20,
  },
  score: {
    fontWeight: "700",
    fontSize: 20,
    color: "black",
  },
  scoreTop: {
    borderBottomWidth: 2,
    borderColor: "black",
    width: "100%",
    textAlign: "center",
    paddingBottom: 15,
  },
  body: {
    backgroundColor: "#FFD700",
    height: screenHeight,
  },
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: 40,
  },
  top: {
    padding: 12,
  },
  topText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  middle: {
    display: "flex",
    marginTop: 40,
    flexDirection: "row",
    paddingHorizontal: 8,
    gap: 10,
  },
  queText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  bottom: {
    marginTop: 20,
    display: "flex",
    width: "80%",
    alignItems: "center",
  },
  colorQue: {
    height: 80,
    width: 80,
    marginTop: 20,
    borderRadius: 8,
  },
  question: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "white",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 40,
    marginTop: 30,
  },
  options: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
    padding: 8,
    backgroundColor: "white",
    borderRadius: 20,
    width: 120,
    textAlign: "center",
    textTransform: "capitalize",
  },
  pressed: {
    backgroundColor: "black",
    color: "white",
  },
  correctOption: {
    backgroundColor: "green",
    color: "white",
  },
  incorrectOption: {
    backgroundColor: "red",
    color: "white",
  },
  checkBtn: {
    marginTop: 60,
    backgroundColor: "purple",
    color: "white",
    padding: 10,
    borderRadius: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: 150,
  },
  correctMsg: {
    fontWeight: "bold",
    color: "green",
    fontSize: 18,
    marginTop: 30,
  },
  incorrectMsg: {
    fontWeight: "bold",
    color: "red",
    fontSize: 18,
    marginTop: 30,
  },
});
