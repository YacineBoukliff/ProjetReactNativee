import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid, Alert } from 'react-native'
import React, { useState } from 'react'
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../../configs/FirebaseConfig'

export default function SignIn() {
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  
  const onSignin = async () => {
    if (!email || !password) {
      ToastAndroid.show("Rentrez vos identifiants.", ToastAndroid.LONG);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const signedInUser = userCredential.user;
      setUser(signedInUser);
      console.log("User signed in:", signedInUser.uid);
      Alert.alert("Connexion réussie", `Utilisateur connecté: ${signedInUser.uid}`);
      // Ici, vous pouvez rediriger l'utilisateur vers une autre page
      // router.push('/home');
    } catch (error) {
      console.error("Erreur de connexion:", error.code, error.message);
      if (error.code === 'auth/invalid-credential') {
        ToastAndroid.show('Identifiants invalides', ToastAndroid.LONG);
      } else {
        ToastAndroid.show('Erreur de connexion', ToastAndroid.LONG);
      }
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back-circle" size={30} color="black" />
      </TouchableOpacity>
      
      <Text style={styles.title}>Connectez vous</Text>
      <Text style={styles.subtitle}>Bienvenue</Text>
      <Text style={styles.subtitle}>Vous nous avez manqué !</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder='Entrez votre email'
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mot de passe</Text>
        <TextInput  
          secureTextEntry={true}
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder='Entrez votre mot de passe'
        />
      </View>

      <TouchableOpacity onPress={onSignin} style={styles.signInButton}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => router.replace('auth/sign-up')}
        style={styles.createAccountButton}
      >
        <Text style={styles.createAccountButtonText}>Créer un compte</Text>
      </TouchableOpacity>

      {user && (
        <Text style={styles.userInfo}>Utilisateur connecté: {user.uid}</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 60,
    backgroundColor: Colors.white,
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    fontFamily: "poppins",
  },
  subtitle: {
    fontSize: 30,
    marginTop: 30,
    color: 'gray',
  },
  inputContainer: {
    marginTop: 30,
  },
  label: {
    paddingLeft: 5,
    marginBottom: 5,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'gray',
  },
  signInButton: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'black',
    marginTop: 50,
  },
  buttonText: {
    color: "white",
    textAlign: 'center',
  },
  createAccountButton: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'white',
    marginTop: 30,
    borderWidth: 1,
  },
  createAccountButtonText: {
    color: "black",
    textAlign: 'center',
  },
  userInfo: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});