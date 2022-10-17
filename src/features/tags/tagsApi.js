import axios from "../../utils/axios";

export const getTags = async () => {
  const response = await axios("/tags");
  return response.data;
};
