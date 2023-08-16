
export default function Stats() {
    return (
        <div className=" w-full lg:w-3/4 mx-auto">
            <p className="mt-10 text-start text-xl  font-medium leading-8 text-gray-900">Our track record</p>
            <p className="mt-4 text-start text-md  font-medium leading-8 text-gray-600">Trusted by thousands of students & guardians in the country</p>
            <div className="lg:flex lg:justify-between  mt-5 lg:mt-40">
                   <div className="bus-section border bg-gray-100 h-64 w-full">
                       <p className="  pt-20  text-center text-gray-900 text-3xl font-semibold">Total Buses</p>
                       <p className="mt-4 text-center text-gray-900 text-xl font-semibold">80+ Vehicles</p>
                   </div>
                   <div className="driver-section  bg-gray-900 h-64 w-full">
                       <p className="  pt-20 text-center text-white text-3xl font-semibold">Total Drivers</p>
                       <p className="mt-4 text-center text-white text-xl font-semibold">100+ Drivers</p>
                   </div>
                   <div className="staff-section bg-gray-100  h-64 w-full">
                       <p className="pt-20 text-center text-gray-900 text-3xl font-semibold">Total Buses Staff</p>
                       <p className="mt-4 text-center text-gray-900 text-xl font-semibold">140+ Vehicles</p>
                   </div>
                   <div className="student-section  bg-violet-500 h-64 w-full">
                       <p className="pt-20 text-center text-white text-3xl font-semibold">Total Students </p>
                       <p className="mt-4 text-center text-white text-xl font-semibold">36000+</p>
                   </div>
            </div>
        </div>
    )
}