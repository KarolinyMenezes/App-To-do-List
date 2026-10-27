import React, { useState, useEffect, useMemo } from 'react';
import {View,Text,TouchableOpacity,StatusBar,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from './constants/colors';
import { styles } from './styles';
import WelcomeScreen from './screens/WelcomeScreen';
import TasksScreen from './screens/TasksScreen';
import NewTaskModal from './components/NewTaskModal';
const TASKS_KEY = '@todo_tasks';
const WELCOME_KEY = '@todo_welcome_seen';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [welcomeSeen, setWelcomeSeen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const [storedTasks, storedWelcome] = await Promise.all([
          AsyncStorage.getItem(TASKS_KEY),
          AsyncStorage.getItem(WELCOME_KEY),
        ]);
        if (storedTasks) setTasks(JSON.parse(storedTasks));
        if (storedWelcome === 'true') setWelcomeSeen(true);
      } catch (e) {
        console.log('Erro ao carregar dados:', e);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  useEffect(() => {
    if (!loaded) return;
    AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks)).catch((e) =>
      console.log('Erro ao salvar tarefas:', e)
    );
  }, [tasks, loaded]);

  const sortedTasks = useMemo(
    () => [...tasks].sort((a, b) => new Date(a.date) - new Date(b.date)),
    [tasks]
  );

  const handleContinue = async () => {
    setWelcomeSeen(true);
    try {
      await AsyncStorage.setItem(WELCOME_KEY, 'true');
    } catch (e) {
      console.log('Erro ao salvar boas-vindas:', e);
    }
  };

  const addTask = (title, date) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      date: date.toISOString(),
      done: false,
    };
    setTasks((prev) => [...prev, newTask]);
    setModalVisible(false);
  };

  const toggleTask = (id) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const deleteTask = (id) => setTasks((prev) => prev.filter((t) => t.id !== id));

  if (!loaded) return <View style={styles.flex} />;

  if (!welcomeSeen) return <WelcomeScreen onContinue={handleContinue} />;

  return (
    <View style={styles.flex}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

      <View style={styles.header}>
        <Text style={styles.headerText}>Tarefas</Text>
      </View>

      <View style={[styles.flex, { backgroundColor: COLORS.bg }]}>
        <TasksScreen tasks={sortedTasks} onToggle={toggleTask} onDelete={deleteTask} />

        <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
          <Ionicons name="add" size={36} color="#fff" />
        </TouchableOpacity>
      </View>

      <NewTaskModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onCreate={addTask}
      />
    </View>
  );
}