import axios from "axios";

export const getData = async (page, lan, seed, error) => {
  try {
    const { data } = await axios.get(
      `https://fakedataitr.herokuapp.com/api/users`,
      {
        params: {
          page: page,
          limit: page === 1 ? 20 : 10,
          locale: lan,
          seed,
          error,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
