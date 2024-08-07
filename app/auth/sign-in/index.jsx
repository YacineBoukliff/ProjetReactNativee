import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from "@/constants/Colors";

export default function SignIn() {
  
  
  return (
    <View style={{
     padding:30,
     marginTop:60,
     height:"100%", backgroundColor: Colors.white,
     backgroundColor: Colors.white,

    }}>

      <Text style={{
        fontSize:30,
        fontFamily: "poppins",
      }}>Connectez vous</Text>
      
      <Text style={{
        fontSize:30,
        marginTop:30,
        color: 'gray',
      }}>Bienvenue ! </Text>

      
<Text style={{
        fontSize:30,
        marginTop:40,
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
        }}> Sign in</Text>

      </View>

      {/* Bouton créer un compte*/}

      <View style={{
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
      </View>
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