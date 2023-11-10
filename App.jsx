/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react'; // Import useState
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Pass the tasks array to ToDoList component as a prop */}
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
