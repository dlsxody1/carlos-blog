const BASE_URL = "http://localhost:3000";
export const getArticle = async () => {
  const res = await fetch(`${BASE_URL}`);
  const data = await res.json();
  console.log(BASE_URL, data, "ss");
  return data;
};
