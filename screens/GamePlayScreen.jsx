import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "@/components/PrimaryButton";
import Heading from "@/components/Heading";
import Ionicons from "@expo/vector-icons/Ionicons";
import GameOverScreen from "../screens/GameOverScreen";

const generateRandomNumber = (min, max, exclude) => {
  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (randomNum === exclude);
  return randomNum;
};

const GamePlayScreen = ({ numberInput }) => {
  const [minBoundary, setMinBoundary] = useState(1);
  const [maxBoundary, setMaxBoundary] = useState(100);
  const [randomNumber, setRandomNumber] = useState(
    generateRandomNumber(1, 100, numberInput)
  );
  const [gameOver, setGameOver] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [guessNumbers, setGuessNumbers] = useState([]);

  const incrementHandler = () => {
    const newMin = randomNumber + 1;
    if (newMin > maxBoundary) return;
    setMinBoundary(newMin);
    const num = generateRandomNumber(newMin, maxBoundary, randomNumber);
    setRandomNumber(num);
    setClicks((prevClicks) => prevClicks + 1);
  };

  const decrementHandler = () => {
    const newMax = randomNumber - 1;
    if (newMax < minBoundary) return;
    setMaxBoundary(newMax);
    const num = generateRandomNumber(minBoundary, newMax, randomNumber);
    setRandomNumber(num);
    setClicks((prevClicks) => prevClicks + 1);
  };

  useEffect(() => {
    if (randomNumber == numberInput) {
      // alert(`Match: ${randomNumber} & ${numberInput}`);
      setGameOver(true)
    }
  }, [randomNumber, numberInput]);

  if (gameOver) {
    return <GameOverScreen clicks={clicks} guessNumbers={guessNumbers} />;
  }

  return (
    <SafeAreaView style={Styles.container}>
      <LinearGradient colors={["red", "blue"]} style={Styles.root}>
        <ImageBackground
          source={require("../assets/images/cloudBg.png")}
          resizeMode="cover"
          imageStyle={Styles.backgroundImage}
          style={Styles.root}
        >
          <Heading style={Styles.subHeading}>Opponent Guess</Heading>
          <View>
            <Text style={Styles.heading}>{randomNumber}</Text>
          </View>
          <View style={Styles.numberContainer}>
            <Text style={Styles.bodyText}>Higher or lower?</Text>
            <View style={Styles.rootContainer}>
              <PrimaryButton pressHandler={decrementHandler} containerStyle={Styles.buttonContainer}>
                <Ionicons name="remove" size={52} color="white"/>
              </PrimaryButton>
              <PrimaryButton pressHandler={incrementHandler} containerStyle={Styles.buttonContainer}>
                <Ionicons name="add" size={52} color="white" />
              </PrimaryButton>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default GamePlayScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rootContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 72,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#d417bf",
    width: 350,
    padding: 20,
    height: 140,
    textAlign: "center",
    lineHeight: 100,
    borderRadius: 20,
    borderStyle: "solid",
    borderWidth: 2, 
    marginVertical: 20,
    borderColor: "#fff"
  },
  subHeading: {
    fontSize: 42,
    borderWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    padding: 15,
    color: "#fff",
  },
  bodyText: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center"
  },
  copy: {
    fontSize: 22,
    color: "#fff",
  },
  backgroundImage: {
    opacity: 0.15,
  },
  numberContainer: {
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: "solid",
    padding: 40
  },
  buttonContainer: {
    width: 200
  }
});
