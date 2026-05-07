export const isPromise = (value: any): boolean => {
  if (value !== null && typeof value === 'object') {
    return value && typeof value.then === 'function';
  }
  return false;
};

export const getScoreInfo = (pct: number): { emoji: string; msg: string } => {
  if (pct === 100) return { emoji: '🏆', msg: 'Xuất sắc! Bạn nắm vững toàn bộ kiến thức!' };
  if (pct >= 80) return { emoji: '⭐', msg: 'Rất tốt! Bạn đã hiểu sâu phần lớn nội dung.' };
  if (pct >= 67) return { emoji: '👍', msg: 'Tốt! Bạn nắm được những điểm cốt lõi.' };
  if (pct >= 50) return { emoji: '📖', msg: 'Khá ổn, nhưng nên xem lại một số phần nhé.' };
  return { emoji: '💪', msg: 'Bạn cần ôn lại bài học kỹ hơn — cố lên nhé!' };
};