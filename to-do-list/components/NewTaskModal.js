import React, { useState, useEffect } from 'react';
import { View,Text,TextInput,TouchableOpacity, ScrollView,Modal,Platform,KeyboardAvoidingView,} from 'react-native';
import { COLORS } from '../constants/colors';
import { pad } from '../utils/dateUtils';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import { styles } from '../styles';

export default function NewTaskModal({ visible, onClose, onCreate }) {
  const [title, setTitle] = useState('');
  const [when, setWhen] = useState(new Date());
  const [picker, setPicker] = useState(null);

  useEffect(() => {
    if (visible) {
      setTitle('');
      setWhen(new Date());
      setPicker(null);
    }
  }, [visible]);

  const handleCreate = () => {
    if (!title.trim()) return;
    onCreate(title.trim(), when);
  };

  const dateText = `${pad(when.getDate())}/${pad(when.getMonth() + 1)}/${when.getFullYear()}`;
  const timeText = `${pad(when.getHours())}:${pad(when.getMinutes())}`;

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onClose} />
        <ScrollView style={styles.sheet} keyboardShouldPersistTaps="handled">
          <Text style={styles.sheetTitle}>Nova Tarefa</Text>

          <TextInput
            style={styles.input}
            placeholder="Ex: Aula de Inglês hoje."
            placeholderTextColor={COLORS.primary}
            value={title}
            onChangeText={setTitle}
          />

          <View style={styles.pickRow}>
            <TouchableOpacity
              style={styles.pickBtn}
              onPress={() => setPicker(picker === 'date' ? null : 'date')}
            >
              <Text style={[styles.pickText, picker === 'date' && { color: COLORS.primary }]}>
                Data: {dateText}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.pickBtn}
              onPress={() => setPicker(picker === 'time' ? null : 'time')}
            >
              <Text style={[styles.pickText, picker === 'time' && { color: COLORS.primary }]}>
                Tempo: {timeText}
              </Text>
            </TouchableOpacity>
          </View>

          {picker === 'date' && <DatePicker value={when} onChange={setWhen} />}
          {picker === 'time' && <TimePicker value={when} onChange={setWhen} />}

          <View style={{ alignItems: 'flex-end', marginTop: 16, marginBottom: 12 }}>
            <TouchableOpacity style={styles.createBtn} onPress={handleCreate}>
              <Text style={styles.createText}>Criar +</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
}