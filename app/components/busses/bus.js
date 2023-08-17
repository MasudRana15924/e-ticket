import Image from "next/image";
import Link from "next/link";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import Skeleton from '@mui/material/Skeleton';
export default function Bus({ bus }) {
    return (
        <div className="border  col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 ">
            <div className="w-full lg:flex lg:flex-col ">
                <div className="relative">
                    <Link href={`/busdetails/${bus._id}`}>
                        <Image
                            src={bus.images[0].url}
                            className="w-2/4  mx-auto h-24 lg:h-40 "
                            width={500}
                            height={50}
                            alt={bus.name}
                        />
                        
                    </Link>
                </div>

                <div className="text-start p-5">
                    <Link href={`/busdetails/${bus._id}`} >
                        <p className="text-sm font-semibold leading-6 text-gray-900 mt-5" >
                            {bus.name}
                        </p>
                    </Link>
                    <p className="hidden lg:block text-sm font-semibold leading-6 text-gray-900 mt-3" >
                        From :  {bus.from} to {bus.to}
                    </p>
                    <p className="hidden lg:block text-sm font-semibold leading-6 text-gray-900 mt-3" >
                        Departure time : {bus.time}
                    </p>
                    <p className="hidden lg:block text-sm font-semibold leading-6 text-gray-900 mt-3" >
                        Available Seats : {bus.seats}
                    </p>
                    <div className="hidden lg:flex gap-2 mt-3">
                        < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt>
                        <p className="text-sm font-semibold leading-6 text-gray-900" >
                            {bus.price}Tk
                        </p>
                    </div>

                </div>
            </div>

        </div>)
}