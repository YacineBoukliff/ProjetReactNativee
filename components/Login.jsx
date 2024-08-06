import { View, Image, Dimensions, StyleSheet, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./../assets/images/Kuala-Lumpur.jpg")}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.bottomHalf}>
        <Text style={styles.TitreTexte}>Programme Vacances IA</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: height / 2,
  },
  bottomHalf: {
    flex: 1,
    paddingTop: 15,
    alignItems: "center",
  },
  TitreTexte: {
    fontSize: 25,
    fontFamily: "poppins",
    backgroundColor: Colors.white,
    height: "10%",
    borderRadius: 20,
  },
});
