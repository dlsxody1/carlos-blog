export const dateFormatter = (time: Date) => {
  console.log(time);
  const inputDate = new Date(time);
  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더하고 2자리로 포맷팅
  const day = String(inputDate.getDate()).padStart(2, "0"); // 일도 2자리로 포맷팅
  const formattedDate = `${year}. ${month}. ${day}`;
  console.log(formattedDate, "date");
  return { formattedDate };
};
