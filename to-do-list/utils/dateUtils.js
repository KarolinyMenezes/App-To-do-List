export const pad = (n) => String(n).padStart(2, '0');
export const sameDay = (a, b) => a.toDateString() === b.toDateString();
export const toInputDate = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
export const toInputTime = (d) => `${pad(d.getHours())}:${pad(d.getMinutes())}`;
export function formatLabel(iso) {
  const d = new Date(iso);
  const now = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(now.getDate() + 1);
  const time = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  if (sameDay(d, now)) return `Hoje - ${time}`;
  if (sameDay(d, tomorrow)) return `Amanhã - ${time}`;
  return `Dia ${pad(d.getDate())}/${pad(d.getMonth() + 1)}\n${time}`;
}