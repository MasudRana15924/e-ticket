'use client'
import Image from "next/image";
import { useState } from "react";
import banner from '../../assets/bus.jpg'
import { fetchFilterBuses } from "@/app/redux/buses/filterbusesSlice";
import  {useRouter}  from 'next/navigation'
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/toast";
export default function Banner() {
    const router = useRouter();
    const toast = useToast()
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('')
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (from && to) {
             dispatch(fetchFilterBuses({ from, to }));
             
             toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
              router.push('/filterbuses');
        }
        else {
            toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
        }
    }
    const handleFrom = (e) => {
        setFrom(e.target.value)
    }
    const handleTo = (e) => {
        setTo(e.target.value)
    }
    return (
        <div className="mt-10 lg:mt-20  w-full">
            <Image src={banner} alt="" srcset="" className="w-full banner-image" />
            <div className="w-full lg:w-3/4 lg:mx-auto banner-search-section h-64  lg:flex gap-6  ">
                <div className="w-full lg:w-3/4 bg-violet-900 h-62 border rounded-lg ">
                    <p className="text-2xl text-white text-center  lg:mt-20">Contact</p>
                    <p className="text-xl text-white text-center">International University</p>
                  
                </div>
                <div className="pl-4 pr-4 lg:pl-0 lg:pr-0 lg:w-full">
                    <p className="text-start mt-4 text-violet-900 text-xl ">Online Booking </p>
                    <form action="" className="search-form mt-8">

                        <input className="h-10 border-2 border-violet-900 w-full lg:w-3/4 pl-6" type="text" placeholder="From Campus" onChange={handleFrom} required />
                        <br />
                        <input className="h-10 border-2 border-violet-900 mt-4 w-full lg:w-3/4 pl-6" type="text" placeholder="To  Campus" onChange={handleTo} required />
                        <br />

                        <button className="bg-violet-900 h-10  text-white text-xl mt-4 w-full lg:w-3/4" onClick={handleSubmit}>Search</button>
                    </form>
                </div>

            </div>
        </div>
    )
}