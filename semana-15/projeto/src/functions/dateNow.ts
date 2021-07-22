export const dateNow = (): string => {
  const registerDate = new Date();
  const registerDay = registerDate.getDate();
  const registerMonth = registerDate.getMonth();
  const registerYear = registerDate.getFullYear();

  return `${registerDay}/${registerMonth}/${registerYear}`;
};
