import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(text) {
    setEnteredGoalText(text)
  };

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()}
    ]);

  }

  return (
    <View style={styles.appContainer}>
      
      <View style={styles.appTitle}>
        <Text>Goal Tracker</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Enter your course goals' onChangeText={goalInputHandler}/>
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>

      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} 
      renderItem={item => {
        return(
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>
              {item.item.text} 
            </Text>
          </View>
        );
      }}
      keyExtractor={(item, index) => {
        return item.id
      }}
      alwaysBounceVertical={true}
      />
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
  
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
  },

  goalText: {
    color: 'white'
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

/* <ScrollView alwaysBounceVertical={true}>
          {courseGoals.map((goal, index) => (
          <View style={styles.goalItem} key={index.toString()}>
            <Text style={styles.goalText}>
              {goal} 
            </Text>
          </View>
        ))}
      </ScrollView> */