import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { formatLabel } from '../utils/dateUtils';
import { styles } from '../styles';

export default function TasksScreen({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <View style={styles.empty}>
        <View style={styles.emptyCircle}>
          <Image 
            source={require('../assets/logo-empty.png')} 
            style={{ width: 120, height: 120, resizeMode: 'contain', marginBottom: 16 }} 
          />
        </View>
        <Text style={styles.emptyText}>Crie sua primeira Tarefa!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <View style={styles.taskItem}>
          <View style={{ flex: 1 }}>
            <Text style={[styles.taskDate, item.done && styles.done]}>
              {formatLabel(item.date)}
            </Text>
            <Text style={[styles.taskTitle, item.done && styles.done]}>{item.title}</Text>
          </View>
          <TouchableOpacity onPress={() => onToggle(item.id)} style={styles.iconBtn}>
            <Ionicons
              name={item.done ? 'checkmark-circle' : 'ellipse-outline'}
              size={24}
              color={item.done ? COLORS.primary : '#000'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.iconBtn}>
            <Ionicons name="trash-outline" size={22} color="#000" />
          </TouchableOpacity>
        </View>
      )}
    />
  );
}