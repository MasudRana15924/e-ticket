import Image from "next/image";
import Link from "next/link";
import { FaRegMoneyBillAlt } from "react-icons/fa";
export default function FilterBus({bus}){
    return(
        <div className="border rounded-lg col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4  ">
        <div className="w-full flex flex-col ">
        <div className="relative">
                
                    <Image
                        src={bus.images[0].url}
                        className="w-full h-48"
                        alt={bus.name}
                        width={500}
                            height={50}
                    />
                
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
                <div className="flex justify-between gap-2 mt-5">
                    
                   <div className="flex gap-2">
                   < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt>  
                   <p className="text-sm font-semibold leading-6 text-gray-900" >
                    {bus.price}Tk
                    </p>
                   </div>
                        <Link href={`/bus/${bus._id}`}>
                            <button className="h-8 w-32 bg-black hover:bg-black border-black text-white ">Book a Ticket</button>
                        </Link> 
                </div>
                
            </div>
               



            
        </div>
    </div>
    )
}