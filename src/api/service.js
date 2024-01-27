import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_IP_GEOLOCATION_API_KEY;
export const getAll = async (ip) => {
  try {
    const URL = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${ip}`;
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    console.error("Erro ao obter detalhes do IP: ", error);
  }
};
