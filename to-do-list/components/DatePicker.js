import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';
import { styles } from '../styles';

export default function DatePicker({ value, onChange }) {
  const [month, setMonth] = useState(new Date(value.getFullYear(), value.getMonth(), 1));
  const year = month.getFullYear();
  const m = month.getMonth();
  const firstWeekday = new Date(year, m, 1).getDay();
  const daysInMonth = new Date(year, m + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const selectDay = (d) => {
    const n = new Date(value);
    n.setFullYear(year, m, d);
    onChange(n);
  };

  const monthName = month.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });

  return (
    <View style={styles.pickerBox}>
      <View style={styles.calHeader}>
        <TouchableOpacity style={styles.arrowBtn} onPress={() => setMonth(new Date(year, m - 1, 1))}>
          <Text style={styles.arrowText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.calTitle}>{monthName}</Text>
        <TouchableOpacity style={styles.arrowBtn} onPress={() => setMonth(new Date(year, m + 1, 1))}>
          <Text style={styles.arrowText}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.weekRow}>
        {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((w, i) => (
          <Text key={i} style={styles.weekDay}>{w}</Text>
        ))}
      </View>

      <View style={styles.grid}>
        {cells.map((d, i) => {
          if (!d) return <View key={i} style={styles.smallCell} />;
          const isSel =
            value.getFullYear() === year && value.getMonth() === m && value.getDate() === d;
          return (
            <TouchableOpacity key={i} style={styles.smallCell} onPress={() => selectDay(d)}>
              <View style={[styles.dayCircle, isSel && { backgroundColor: COLORS.primary }]}>
                <Text style={[styles.dayText, isSel && { color: '#fff' }]}>{d}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}