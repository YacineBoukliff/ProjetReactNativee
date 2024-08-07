import { View, Image, Dimensions, StyleSheet, Text,TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";


const { width, height } = Dimensions.get("window");

export default function Login() {

  const router =useRouter()
  return (
    <View style={styles.container}>
      <Image
        source={require("./../assets/images/Kuala-Lumpur.jpg")}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.BlocTitre}>
        <Text style={styles.TitreTexte}>Vacances JoJoGo</Text>
        <Text style={styles.paragraphe}>
          Bienvenue sur l'application JoJoGo. Grace a notre application votre programme voyage sera généré par notre IA quelque soit votre destination ! Prenez place pour cette magnifique aventure .
        </Text>
        <TouchableOpacity style={styles.bouton}
        onPress={() =>router.push('auth/sign-in')}>
          <Text style={styles.textebouton}>Connectez vous avec Google.</Text>
        </TouchableOpacity>
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
    height: 600,
  },
  BlocTitre: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 20, 
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.white,
    marginTop: -20,
  },
  TitreTexte: {
    fontSize: 25,
    fontFamily: "poppins",
    width: '100%',
    textAlign: "center",
    marginBottom: 15,
  },
  paragraphe: {
    textAlign: 'center',
    fontSize: 17, 
    marginBottom: 30, 
    lineHeight: 23, 
  },
  bouton: {
    padding: 18,
    backgroundColor: 'black',
    borderRadius: 99,
    width: '100%', 
    marginTop: 40, 
    paddingHorizontal: 20, 
  },
  textebouton: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    
  },
});