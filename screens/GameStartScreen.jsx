import React, { useState } from "react";
import { TextInput, StyleSheet, SafeAreaView, View, Alert } from "react-native";
import Heading from "../components/Heading";
import PrimaryButton from "../components/PrimaryButton";

const GameStartScreen = ({ playHandler }) => {
  const [inputNumber, setInputNumber] = useState(0);

  const getInputNumber = (num) => {
    setInputNumber(num);
  };

  const validateNumber = () => {
    if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 99) {
      Alert.alert("Invalid number", "Please enter a number between 1 and 99.", [
        { text: "okay", style: "destructive" },
      ]);
      return;
    }
    playHandler(inputNumber);
  };

  const resetHandler = () => {
    setInputNumber(0);
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.box}>
        <Heading>Guess the Number</Heading>
      </View>
      <TextInput
        style={Styles.input}
        placeholder="Enter your number"
        keyboardType="number-pad"
        maxLength={2}
        value={inputNumber}
        onChangeText={(num) => getInputNumber(num)}
      />
      <View style={Styles.buttonContainer}>
        <PrimaryButton pressHandler={resetHandler} style={Styles.buttonText} containerStyle={Styles.buttonWidth}>
          Reset
        </PrimaryButton>
        <PrimaryButton pressHandler={validateNumber} style={Styles.buttonText} containerStyle={Styles.buttonWidth}>
          Play
        </PrimaryButton>
      </View>
    </SafeAreaView>
  );
};

export default GameStartScreen;

const Styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    padding: 4,
    width: "90%",
    marginVertical: 20,
    fontSize: 42,
    textAlign: "center",
    color: "#fff"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    borderWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 32,
    padding: 5,
  },
  buttonContainer: {
    marginVertical: 10,
    flexDirection: "row"
  },
  buttonWidth: {
    width: 200
  }
});
