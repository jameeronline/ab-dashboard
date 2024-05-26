import axios from "axios";

//configurations
const BASE_PATH =
  "https://api.mockfly.dev/mocks/2ec98093-853f-4400-9eaf-ec8cf82f556f";

//instance
const axiosInstance = axios.create({
  baseURL: BASE_PATH,
});

export const getAbsherData = async () => {
  const data = await axiosInstance
    .get("reports")
    .then((response) => response.data);
  return data;
};
