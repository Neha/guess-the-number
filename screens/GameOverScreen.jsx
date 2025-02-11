import React, { useState } from "react";
import { Text, Image, StyleSheet, SafeAreaView, View } from "react-native";
import PrimaryButton from "@/components/PrimaryButton";
import Heading from "@/components/Heading";
import RootLayout from "@/app/_layout";

const GameOverScreen = ({ clicks }) => {
  const [startGame, useStartGame] = useState(false);

  const startNewGame = () => {
    useStartGame(!startGame);
  };
  if (startGame) {
    return <RootLayout />;
  }
  return (
    <SafeAreaView style={Styles.container}>
        <View style={Styles.root}>
          <Heading style={Styles.heading}>Game Over</Heading>
          <Image
            source={require("../assets/images/celebration.png")}
            resizeMode="center"
          />
          <Text style={Styles.bodyText}>Your system took {clicks} guesses</Text>
          <PrimaryButton pressHandler={startNewGame} android_ripple="red" style={Styles.buttonText} containerStyle={Styles.buttonWidth}>
            New Game
          </PrimaryButton>
        </View>
    </SafeAreaView>
  );
};

export default GameOverScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
     justifyContent: "center"
  },
  root: {
    alignItems: "center"
  },
  heading: {
    fontSize: 52,
  },
  buttonText: {
    fontSize: 28,
    paddingVertical: 20,
  },
  bodyText: {
    fontSize: 28,
    fontWeight: "600",
    marginVertical: 15,
    color: "white",
  },
  buttonWidth:{
    width: 200
  }
  
});
