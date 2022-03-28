//Sempre letra maiusculas para grandes implementações, classes
//rnf para facilitar
import { View, Text, StyleSheet} from 'react-native'
import React, {useState}from 'react'

export default function Header(props) {

    const [cor, setCor] = useState("green")
    const [titule, setTitulo] = useState("")


  return (

    <View style={styles.header}>
      <Text style={styles.message}>Seja Bem vindo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        backgroundColor: "#961e15",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
    },
    message: {
        color: "white",

    }
  
  });