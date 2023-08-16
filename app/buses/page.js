'use client'

import { useState } from "react";
import FilterBus from "../components/busses/FilterBus";
import { useSelector } from "react-redux";

export default function Bus() {
   
    const { buses } = useSelector(state => state.filterBuses.filterBuses);
    let content;
    if ( buses?.length === 0) {
        content = <div className="col-span-12  ">
            <div class="alert alert-error shadow-lg text-start  mt-5 h-12 w-1/4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-black">No Bus Found</span>
            </div>
        </div>
    }
    if (buses?.length > 0) {
        content = buses.map(bus => <FilterBus key={bus._id} bus={bus} />)
    }
    return (
        <div className="doctors-section pt-12 mb-10 mt-28">
            <div className="flex justify-between w-3/4 mx-auto ">
                <h1 className="text-start font-medium text-4xl lg:text-3xl ">Search Result </h1>
            </div>
            <div
                className="grid grid-cols-12 gap-4  w-3/4 mx-auto  lg:px-0 min-h-[300px] mt-10 md:mt-16 lg:mt-16 " >
                {content}
            </div>
        </div>)
}