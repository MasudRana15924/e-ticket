import Image from "next/image";
import Link from "next/link";
import { FaRegMoneyBillAlt } from "react-icons/fa";
export default function Bus({bus}){
    return(
          <div className="border  col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 ">
            <div className="w-full flex flex-col ">
                <div className="relative">
                    <Link href={`/bus/${bus._id}`}>
                        <Image
                            src={bus.images[0].url}
                            className="w-2/4  mx-auto h-40 "
                            width={500}
                            height={50}
                            alt={bus.name}
                        />
                    </Link>
                </div>

                <div className="hidden lg:block md:block text-start p-5">
                    <Link href={`/bus/${bus._id}`} >
                        <p className="text-sm font-semibold leading-6 text-gray-900 mt-5" >
                            {bus.name}
                        </p>
                    </Link>
                    <p className="text-sm font-semibold leading-6 text-gray-900 mt-3" >
                        From :  {bus.from} to {bus.to}
                    </p>
                    <p className="text-sm font-semibold leading-6 text-gray-900 mt-3" >
                        Departure time : {bus.time}
                    </p>
                    <p className="text-sm font-semibold leading-6 text-gray-900 mt-3" >
                        Available Seats : {bus.seats}
                    </p>
                    <div className="flex gap-2 mt-3">
                        < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt>
                        <p className="text-sm font-semibold leading-6 text-gray-900" >
                            {bus.price}Tk
                        </p>
                    </div>
                    
                </div>
            </div>

    </div>)
}