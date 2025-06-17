import axios from "axios";

export const get = async <T>(url: string) => {
  // const response = await fetch(url);
  // const data: T = await response.json();
  // return data;

  const response = await axios.get<T>(url);
  return response.data;
};
