import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello React Native!</Text>

      <Text style={styles.text}>
        Styling text! This text is being styled
      </Text>

      <Button title='Tap Me!!' />
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
  text: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'indigo',
    padding: 16,
    backgroundColor: "#fff",
    fontSize: 18
  },
});
