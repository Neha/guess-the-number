import { React } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Colors } from "@/constants/Colors";

const PrimaryButton = ({ children, containerStyle, style, pressHandler }) => {
  return (
    <View style={[Styles.root, containerStyle]}>
      <Pressable style={Styles.buttonContainer} onPress={() => pressHandler()} android_ripple={{ color: "#0d2663"}}>
        <Text style={[Styles.heading, style]}>{children}</Text>
      </Pressable>
    </View>
  );
};

const Styles = StyleSheet.create({
  root: {
    marginHorizontal: 5,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#1f37ac",
    borderStyle: "solid",
    borderRadius: 20,
    backgroundColor: Colors.light.buttonColor,
    elevation: 3,
  },
  heading: {
    fontSize: 52,
    color: Colors.light.headingColor,
    textAlign: "center",
  }
});

export default PrimaryButton;
