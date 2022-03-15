import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, Button, Alert, TextInput} from 'react-native';
import { useState } from 'react/cjs/react.production.min';

export default function App() {

    const [valor1, setValor1] = useState("0")
    const [valor2, setValor2] = useState("0")
    const [resultado, setResultado] = useState("0")

    const soma = () => {
        setResultado = valor1 + valor2
    }
  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>
      <StatusBar style="auto" />
      <ActivityIndicator size="large" color="#000"/>
      <TextInput style={styles.caixaTexto}
      placeholder='Valor 1'
      keyboardType='numeric'
      value={valor1}
      onChangeText={(value=> setValor1(parseInt(value)))}
      />
      <TextInput style={valor1 ? styles.caixaTexto : styles.caixaTextoErro}
      placeholder='Valor 2'
      keyboardType='numeric'
      value={valor2}
      onChangeText={(value=> setValor2(parseInt(value)))}
      />
      <Button
      title="Calcular"
      //Para poder interagir com Javscript usasse {}
      onPress={soma}
      />
      <Text>
          {resultado ? resultado : "Erro ao calcular"}
      </Text>
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
    borderRadius: 10,
    padding: 10,
  },
  caixaTextoErro: {
    height: 20,
    width: "90",
    marginLeft: 10,
    borderRadius: 10,
    padding: 10,
    borderColor: "red"
  }
});
