import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../constants/colors';
import { styles } from '../styles';

export default function WelcomeScreen({ onContinue }) {
  return (
    <View style={[styles.flex, styles.welcome]}>
      <View style={[styles.bubble, { width: 200, height: 200, top: -60, left: -60 }]} />
      <View style={[styles.bubble, { width: 50, height: 50, top: '55%', left: -20 }]} />
      <View style={[styles.bubble, { width: 170, height: 170, bottom: 160, right: -60 }]} />
      <View style={styles.checkBox}>
        <Image 
          source={require('../assets/logo-welcome.png')} 
          style={{ width: 100, height: 100, resizeMode: 'contain', marginBottom: 16 }} 
        />
      </View>

      <Text style={styles.welcomeTitle}>
        Bem-Vindo ao <Text style={{ color: COLORS.primary }}>To-do List</Text>
      </Text>
      <Text style={styles.welcomeSub}>Organize suas tarefas de forma simples</Text>

      <TouchableOpacity style={styles.welcomeBtn} onPress={onContinue}>
        <Text style={styles.welcomeBtnText}>Prosseguir</Text>
      </TouchableOpacity>
    </View>
  );
}