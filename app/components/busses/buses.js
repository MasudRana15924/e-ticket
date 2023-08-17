'use client'

import { useDispatch, useSelector } from "react-redux";
import Bus from "./bus";
import { useEffect, useState } from "react";
import { fetchBuses } from "@/app/redux/buses/busesSlice";
import Loader from '../loader/loader'
export default function Buses() {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(3);
    const loadMore = () => {
        setVisible(visible + 3);
    };
    const { buses } = useSelector(state => state.buses.buses);
    const { isLoading} = useSelector(state => state.buses);
    useEffect(() => {
        dispatch(fetchBuses());
    }, [dispatch])
    let content;
    if (buses?.length === 0) {
        content = <div className="col-span-12  ">
            <div class="alert alert-error shadow-lg text-start  mt-5 h-12 w-1/4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-black">No Bus Found</span>
            </div>
        </div>
    }
    if (buses?.length > 0) {
        content = buses.slice(0, visible).map(bus => <Bus key={bus._id} bus={bus} />)
    }
    return (

        <div className=" pt-12 mb-10 mt-16 lg:mt-28">
            <div className="flex justify-between w-3/4 mx-auto ">
                <h1 className=" font-bold text-4xl lg:text-3xl text-start">Our Buses </h1>
            </div>
            {
                isLoading ? <div>
                    <Loader></Loader>
                </div>:<div
                className="grid grid-cols-12 gap-4  lg:w-3/4 mx-auto  lg:px-0 min-h-[300px] mt-10 md:mt-16 lg:mt-12 " >
                {content}
            </div>
            }
            <div className=" w-1/4 mx-auto ">
                {visible && (buses?.length > 0 && (
                    <button onClick={loadMore}
                        className=" bg-violet-900 h-10 w-40 mt-5 mb-10 lg:ml-12 text-white">
                        Load More</button>
                ))
                }
            </div>
        </div>
    )
}