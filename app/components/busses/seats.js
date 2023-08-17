export default function AvailableSeats({allseats}){
    return(
        <div className=" col-span-3 sm:col-span-3 md:col-span-4 lg:col-span-3 ">
           <div className="flex gap-1 mt-3">
            <input type="checkbox" name="" id="" className="w-6 "/>
           <p>{allseats.name}</p>
           </div>

        </div>
    )
}