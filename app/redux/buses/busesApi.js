import axios from "axios";
import { api } from "../../utitlities/index";
export const getFilterBuses = async (from,to) => {
    const response = await axios.get(`${api}/buses/?from=${from}&to=${to}`);
    return response.data;
}