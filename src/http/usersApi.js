import axios from "axios";

let page = 1;

export const getInitialData = async () => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}`, {
      params: {
        page,
        limit: 20,
        locale: "ge",
        seed: 1,
      },
    });
    localStorage.setItem("data", data);
    page++;
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const uploadData = async (locale, seed) => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}`, {
      params: {
        page,
        limit: 10,
        locale,
        seed,
      },
    });
    page++;
    return data;
  } catch (error) {
    console.log(error);
  }
};
