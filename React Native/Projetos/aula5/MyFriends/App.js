import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header corFundo="#157f96" titulo="Imed - BV"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
