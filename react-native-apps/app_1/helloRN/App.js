import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      
      <View style={styles.appTitle}>
        <Text>Goal Tracker</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Enter your course goals'/>
        <Button title="Add Goal"/>
      </View>

      <View style={styles.goalsContainer}>
        <Text>List of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  }, 
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcccf',
    
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5
  },
  //my own component, not part of course
  appTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 10,
    fontWeight: '200',
    borderWidth: 1,
    borderColor: '#eeeeee',
    alignItems: 'center',
    backgroundColor: '#dddfec'
  }
});
