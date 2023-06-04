import axios from "axios";
import { GET_USER_DATA } from "../utils/api";

export const getUserData = async (accessToken) => {
  try {
    const { data } = await axios.get(GET_USER_DATA, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};
