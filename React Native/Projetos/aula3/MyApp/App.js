import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, Button, Alert, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Paulo Afonso Della Mêa dos Santos</Text>
      <Text>paulo.santos@gmail.com</Text>
      <StatusBar style="auto" />
      <ActivityIndicator size="large" color="#000"/>
      <Button
      title="Press me"
      //Para poder interagir com Javscript usasse {}
      onPress={() => {
        console.log("We are Here");
        Alert.alert("We are here");
      }}
      />
      <Text style={{color: "pink",fontWeight: "bold"}}>
        Texto Rosa
      </Text>

      <TextInput style={styles.caixaTexto}
      placeholder='Informe telefone'
      keyboardType='numeric'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20
  },
  outro: {
    fontSize: 10
  },

  caixaTexto : {
    height: 20,
    width: "90",
    marginLeft: 10,
    borderRadius:10,
    padding: 10,
  }
});
