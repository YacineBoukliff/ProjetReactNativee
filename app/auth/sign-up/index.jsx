import { View, Text,TextInput,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';


export default function SignUp() {
  const router = useRouter()
  return (
    <>
      <View style={{ 
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
 placeholder='  Entrez votre Prenom et Nom'/>

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
      </View>
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