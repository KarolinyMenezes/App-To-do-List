import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { pad } from '../utils/dateUtils';
import { styles } from '../styles';

export default function TimePicker({ value, onChange }) {
  const change = (unit, delta) => {
    const n = new Date(value);
    if (unit === 'h') n.setHours((n.getHours() + delta + 24) % 24);
    else n.setMinutes((n.getMinutes() + delta + 60) % 60);
    onChange(n);
  };

  const type = (unit, text) => {
    const num = parseInt(text.replace(/\D/g, ''), 10);
    if (isNaN(num)) return;
    const n = new Date(value);
    if (unit === 'h') n.setHours(Math.min(num, 23));
    else n.setMinutes(Math.min(num, 59));
    onChange(n);
  };

  const Column = ({ unit, val }) => (
    <View style={styles.timeCol}>
      <TouchableOpacity style={styles.arrowBtn} onPress={() => change(unit, 1)}>
        <Text style={styles.arrowText}>▲</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.timeInput}
        value={pad(val)}
        keyboardType="number-pad"
        maxLength={2}
        selectTextOnFocus
        onChangeText={(t) => type(unit, t)}
      />
      <TouchableOpacity style={styles.arrowBtn} onPress={() => change(unit, -1)}>
        <Text style={styles.arrowText}>▼</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[styles.pickerBox, styles.timeRow]}>
      <Column unit="h" val={value.getHours()} />
      <Text style={styles.timeSep}>:</Text>
      <Column unit="m" val={value.getMinutes()} />
    </View>
  );
}