import { configureStore } from "@reduxjs/toolkit";
import loginSlice from '../redux/user/loginSlice'
import busesSlice from "../redux/buses/busesSlice";
import  filterBusesSlice  from "../redux/buses/filterbusesSlice";
import  busSlice  from "../redux/buses/busDetailsSlice";

export function makeStore() {
    return configureStore({
        reducer: {
            login: loginSlice,
            buses: busesSlice,
            filterBuses: filterBusesSlice,
            busDetails:busSlice
        },
    });
}

export const store = makeStore();