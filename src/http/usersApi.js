import { $host } from "./index";

export const uploadData = async () => {
  const { data } = await $host.get("api/users/");
  localStorage.setItem("data", data);
  return data;
};
