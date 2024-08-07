import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from 'firebase/auth/web-extension';
import { auth } from './../../../configs/FirebaseConfig'


export default function SignUp() {


  const router = useRouter()
  
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [fullName,setFullName]=useState();



  const OnCreateAccount=()=>{

    if(!email&!password&&!fullName){
      ToastAndroid.show('Rentrez vos identifiants',ToastAndroid.BOTTOM)
      return ;
    }
    console.log(email,password)
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode)
    // ..
  });
  }

  return (
    <>
      <TouchableOpacity onPress={OnCreateAccount} style={{ 
        padding:25,
        paddingTop:50, 
        height:'100%',
        backgroundColor:"white" }}>
          <TouchableOpacity onPress={()=> router.back()}>
          <Ionicons name="arrow-back-circle" size={30} color="black" />
          </TouchableOpacity>
        
        <Text style={{
          fontSize:25,
          fontFamily: "poppins",
          
          marginTop:15,
        }}>Créer un nouveau compte  </Text>

<View style={{
          marginTop:50,
      }}>
        <Text style={{
          paddingLeft : 5
      }}>
         Nom Prenom
        </Text>
<TextInput style={styles.Input}
 placeholder='  Entrez votre Nom et Prenom'
 onChangeText={(value) =>setFullName(value)}
 
 />

      </View>

<View style={{
          marginTop:30,
      }}>
        <Text style={{
          paddingLeft : 5
      }}>
          Email
        </Text>
<TextInput style={styles.Input}
onChangeText={(value) =>setEmail(value)}
 placeholder='Entrez votre email'/>

      </View>
      <View style={{
          marginTop:30,
        
      }}>
        <Text style={{
          paddingLeft : 5
      }}>
          Mot de passe
        </Text>
<TextInput  
secureTextEntry={true}
style={styles.Input}
onChangeText={(value) =>setPassword(value)}
 placeholder='Entrez votre mot de passe'/>

 

      </View>
      {/* Bouton connexion*/}
      <View style={{
          padding : 20,
          borderRadius:15,
          backgroundColor: 'black',
          marginTop:50,
      }}>
        <Text style={{
          color:"white",
          textAlign:'center'
        }}> Créer un compte </Text>

      </View>

      {/* Bouton créer un compte*/}

      <TouchableOpacity 
      onPress={()=>router.replace('auth/sign-in')}
      style={{
          padding : 20,
          borderRadius:15,
          backgroundColor: 'white',
          marginTop:30,
          borderWidth:1
      }}>
        <Text style={{
          color:"black",
          textAlign:'center'
        }}> Connexion</Text>
      </TouchableOpacity>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  Input:{
    padding : 15,
    borderWidth:1,
    borderRadius: 15,
    borderColor:'gray'
  }
})