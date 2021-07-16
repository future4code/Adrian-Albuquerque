export const calculateAge = (
  day: number,
  month: number,
  year: number
): number => {
  const calendary = new Date();
  const atualDate = calendary.getDate();
  const atualMonth = calendary.getMonth() + 1;
  const atualYear = calendary.getFullYear();
  let age = atualYear - year;
  if (atualMonth < month || (atualMonth === month && atualDate < day)) {
    age--;
  }

  age < 0 ? 0 : age;
  return age;
};
