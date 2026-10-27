import { StyleSheet, Platform } from 'react-native';
import { COLORS } from './constants/colors';

export const webInputStyle = {
  marginLeft: 8,
  padding: 6,
  fontSize: 15,
  fontWeight: '700',
  border: 'none',
  borderRadius: 0,
  backgroundColor: 'transparent',
  outline: 'none',
  cursor: 'pointer',
};

export const styles = StyleSheet.create({
  flex: { flex: 1 },

  // Boas-vindas
  welcome: { backgroundColor: COLORS.bg, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  bubble: { position: 'absolute', borderRadius: 999, backgroundColor: '#CBA9EE', opacity: 0.8 },
  checkBox: {
    width: 56, height: 56, borderRadius: 12, backgroundColor: COLORS.primary,
    alignItems: 'center', justifyContent: 'center', marginBottom: 16,
  },
  welcomeTitle: { fontSize: 20, fontWeight: '700', color: COLORS.text },
  welcomeSub: { fontSize: 12, marginTop: 8, color: COLORS.text },
  welcomeBtn: {
    position: 'absolute', bottom: 60, left: 30, right: 30, height: 46,
    borderRadius: 23, backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center',
  },
  welcomeBtnText: { color: '#fff', fontSize: 18, fontWeight: '700' },

  // Header e tab bar
  header: {
    backgroundColor: COLORS.primary, paddingTop: Platform.OS === 'ios' ? 56 : 44,
    paddingBottom: 18, paddingHorizontal: 16,
  },
  headerText: { color: '#fff', fontSize: 20, fontWeight: '700' },
  tabBar: { backgroundColor: COLORS.primary, flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 8 },
  tabItem: { alignItems: 'center', paddingHorizontal: 24 },
  tabText: { color: '#fff', fontSize: 11, marginTop: 2, fontWeight: '600' },

  // Lista vazia
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emptyCircle: {
    width: 84, height: 84, borderRadius: 42, backgroundColor: '#C39BE8',
    alignItems: 'center', justifyContent: 'center',
  },
  emptyText: { marginTop: 16, fontWeight: '700', fontSize: 13 },

  // Tarefas
  taskItem: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.light,
    borderRadius: 20, paddingVertical: 8, paddingLeft: 20, paddingRight: 10, marginBottom: 10,
  },
  taskDate: { fontSize: 12, color: COLORS.text },
  taskTitle: { fontSize: 12, color: COLORS.text },
  done: { textDecorationLine: 'line-through', opacity: 0.55 },
  iconBtn: { padding: 4, marginLeft: 4 },

 // FAB
  fab: {
    position: 'absolute', 
    right: 16, 
    bottom: 95, // <--- Aumentei para 95 para subir ainda mais o botão
    width: 50, 
    height: 50, 
    borderRadius: 25,
    backgroundColor: COLORS.primary, 
    alignItems: 'center', 
    justifyContent: 'center', 
    elevation: 4,
  },

  // Header e tab bar
  header: {
    backgroundColor: COLORS.primary, paddingTop: Platform.OS === 'ios' ? 56 : 44,
    paddingBottom: 18, paddingHorizontal: 16,
  },
  headerText: { color: '#fff', fontSize: 20, fontWeight: '700' },
  tabBar: { 
    backgroundColor: COLORS.primary, 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    paddingVertical: 12, 
    paddingBottom: 45 // <--- Aumentei para 36 para dar mais margem na parte de baixo
  },
  tabItem: { alignItems: 'center', paddingHorizontal: 24 },
  tabText: { color: '#fff', fontSize: 11, marginTop: 2, fontWeight: '600' },

  // Modal
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.25)' },
  sheet: { backgroundColor: COLORS.sheet, padding: 16, paddingBottom: 28 },
  sheetTitle: { fontSize: 24, color: COLORS.text, marginBottom: 14 },
  input: { backgroundColor: '#fff', borderRadius: 0, paddingHorizontal: 14, paddingVertical: 12, fontSize: 14,  color: COLORS.primary },
  pickRow: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 18 },
  pickBtn: { flexDirection: 'row', alignItems: 'center', marginRight: 28, paddingVertical: 6 },
  pickText: { fontSize: 15, fontWeight: '700' },
  pickImg: { width: 28, height: 28, marginRight: 8 },
  pickerBox: { backgroundColor: '#fff', padding: 10, marginTop: 10 },
  arrowBtn: { paddingHorizontal: 12, paddingVertical: 6, alignItems: 'center' },
  arrowText: { fontSize: 18, fontWeight: '700', color: COLORS.primary },
  smallCell: { width: '14.28%', height: 38, alignItems: 'center', justifyContent: 'center' },
  timeRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  timeCol: { alignItems: 'center' },
  timeInput: { fontSize: 32, fontWeight: '700', width: 64, textAlign: 'center', color: COLORS.text },
  timeSep: { fontSize: 32, fontWeight: '700', marginHorizontal: 8 },
  createBtn: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.primary,
    borderRadius: 0, paddingHorizontal: 18, paddingVertical: 8,
  },
  createText: { color: '#fff', fontSize: 16, fontWeight: '700', marginRight: 4 },

  // Calendário
  calendarBox: { borderWidth: 1, borderColor: '#000', borderRadius: 24, padding: 12, backgroundColor: '#fff' },
  calHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  calTitle: { fontSize: 16, fontWeight: '700', textTransform: 'capitalize' },
  weekRow: { flexDirection: 'row' },
  weekDay: { width: '14.28%', textAlign: 'center', fontWeight: '700', color: '#666', marginBottom: 4 },
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  cell: { width: '14.28%', height: 42, alignItems: 'center', justifyContent: 'center' },
  dayCircle: { width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
  dayText: { fontSize: 13 },
  dot: { width: 5, height: 5, borderRadius: 3, backgroundColor: COLORS.primary, marginTop: 1 },
  calSub: { marginTop: 18, marginBottom: 8, fontWeight: '700', fontSize: 14 },
});