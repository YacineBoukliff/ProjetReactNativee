import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function SignIn() {
  
  const router=useRouter();
  
  return (
    <View style={{
     padding:30,
     marginTop:60,
     height:"100%", backgroundColor: Colors.white,
     backgroundColor: Colors.white,

    }}>
<TouchableOpacity onPress={()=> router.back()}>
          <Ionicons name="arrow-back-circle" size={30} color="black" />
          </TouchableOpacity>
      <Text style={{
        fontSize:30,
        marginTop:20,
        fontFamily: "poppins",
     
      }}>Connectez vous</Text>
      
      <Text style={{
        fontSize:30,
        marginTop:30,
        color: 'gray',
      }}>Bienvenue </Text>

      
<Text style={{
        fontSize:30,
        marginTop:30,
        color: 'gray',
      }}>Vous nous avez manqué ! </Text>
      

      <View style={{
          marginTop:50,
      }}>
        <Text style={{
          paddingLeft : 5
      }}>
          Email
        </Text>
<TextInput style={styles.Input}
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
        }}> Connexion</Text>

      </View>

      {/* Bouton créer un compte*/}

      <TouchableOpacity 
      onPress={()=>router.replace('auth/sign-up')}
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
        }}> Créer un compte </Text>
      </TouchableOpacity>
    </View>
    
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