import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
   setTasks([...tasks,{ key: Math.random().toString(), value:task}])
   setTask('')
}
  const removeTask = () => {
    console.log("Before removing task:", tasks); // Depuração
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.slice(0, -1);
      console.log("After removing task:", updatedTasks); // Depuração
      return updatedTasks;
    });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.textView}>Lista de tarefas</Text>
        <TextInput
          value={task}
          onChangeText={setTask}
          placeholder="Digite sua tarefa"
          style={styles.input}
        />
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.button} onPress={addTask}>
            <Text>Adicionar tarefa</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={removeTask}>
            <Text>Deletar tarefa</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <Text style={styles.textFlat}>{item.value}</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C7E5EB',
    padding:10
  },
  textView:{
    color:'red'
  },
  input: {
    width: '90%',
    paddingBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius:7,
    padding:10
  },
  viewButton: {
    flexDirection: 'row',
    padding: 6,
  },
  button: {
    borderWidth: 1,
    borderRadius:6,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    margin: 10,
  },
  textFlat: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black'
  },
});

export default App;