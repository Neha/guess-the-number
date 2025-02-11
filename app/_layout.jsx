import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import GameStartScreen from "../screens/GameStartScreen";
import GamePlayScreen from "../screens/GamePlayScreen";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    SpicyRice: require("../assets/fonts/SpicyRice-Regular.ttf"),
  });
  const [isNavigate, setIsNavigate] = useState(false);
  const [numberInput, setNumberInput] = useState(null);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const playHandler = (inputNumber) => {
    if (inputNumber !== null && inputNumber !== undefined) {
      setNumberInput(inputNumber);
      setIsNavigate(true);
    } else {
      setIsNavigate(false);
    }
  };

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <LinearGradient colors={["red", "blue"]} style={Styles.root}>
        <ImageBackground
          source={require("../assets/images/cloudBg.png")}
          resizeMode="cover"
          imageStyle={Styles.backgroundImage}
          style={Styles.root}
        >
          {isNavigate ? (
            <GamePlayScreen numberInput={numberInput} />
          ) : (
            <GameStartScreen playHandler={playHandler} />
          )}
        </ImageBackground>
      </LinearGradient>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const Styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
