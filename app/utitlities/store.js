import { configureStore } from "@reduxjs/toolkit";
import loginSlice from '../redux/user/loginSlice'
import busesSlice from "../redux/buses/busesSlice";
import  filterBusesSlice  from "../redux/buses/filterbusesSlice";

export function makeStore() {
    return configureStore({
        reducer: {
            login: loginSlice,
            buses: busesSlice,
            filterBuses: filterBusesSlice,
        },
    });
}

export const store = makeStore();