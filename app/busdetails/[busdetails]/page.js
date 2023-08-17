"use client"

import { fetchBus } from "@/app/redux/buses/busDetailsSlice"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Image from "next/image";
import Skeleton from '@mui/material/Skeleton';
import { FaRegMoneyBillAlt } from "react-icons/fa";
import Link from "next/link";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AvailableSeats from "../../components/busses/seats";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';



export default function BusDetails({ params }) {
    const busId = params.busdetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBus(busId))
    }, [dispatch, busId])
    const { bus, isLoading, isError, } = useSelector(state => state.busDetails.bus);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid white',
        boxShadow: 24,
        borderRadius:'10px',
        p: 4,
    };
    return (
        <div className="pl-2 pr-2 lg:pl-0 lg:pr-0 lg:w-3/4 mx-auto mt-16 lg:mt-44">
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {/* {breadcrumbs} */}
                <Link underline="hover" key="1" color="inherit" href="/" >
                    Home
                </Link>,
                <Link
                    underline="hover"
                    key="2"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    Buses
                </Link>,
               {
                bus?  <Typography key="3" color="text.primary">
                {bus.name}
            </Typography>:<Skeleton variant="text" width={180} sx={{ fontSize: '1rem' }} />
               }
            </Breadcrumbs>
            <div >
                <div className="w-full mt-16 mb-5  lg:flex">
                    <div className="w-3/4 ">

                        {
                            bus ? <Image
                                src={bus.images[0].url}
                                className="w-3/4 mx-auto max-h-72 "
                                alt=""
                                height={50}
                                width={500}
                            /> : <Skeleton variant="text" width={400} height={200} />
                        }

                    </div>

                    <div className="w-full text-start ml-5 text-sm font-semibold leading-6 text-gray-900">
                        {
                            bus ? <p className="text-sm font-semibold leading-6 text-gray-900 mt-5">{bus.name}</p> : <p className="text-sm font-semibold leading-6 text-gray-900 mt-5">
                                <Skeleton variant="text" width={180} sx={{ fontSize: '1rem' }} />
                            </p>
                        }
                        {
                            bus ? <p className="text-sm font-semibold leading-6 text-gray-900 mt-5">From :  {bus.from} to {bus.to}</p> : <p className="text-sm font-semibold leading-6 text-gray-900 mt-5">
                                <Skeleton variant="text" width={180} sx={{ fontSize: '1rem' }} />
                            </p>
                        }
                        {
                            bus ? <p className="text-sm font-semibold leading-6 text-gray-900 mt-5">Departure time : {bus.time}</p> : <p className="text-sm font-semibold leading-6 text-gray-900 mt-5">
                                <Skeleton variant="text" width={180} sx={{ fontSize: '1rem' }} />
                            </p>
                        }
                        {
                            bus ? <p className="text-sm font-semibold leading-6 text-gray-900 mt-5">Available Seats : {bus.seats}</p> : <p className="text-sm font-semibold leading-6 text-gray-900 mt-5">
                                <Skeleton variant="text" width={180} sx={{ fontSize: '1rem' }} />
                            </p>
                        }

                        <div className="flex gap-2 mb-5">
                            < FaRegMoneyBillAlt className="text-2xl mt-5"></FaRegMoneyBillAlt>
                            {
                                bus ? <p className="text-sm font-semibold leading-6 text-gray-900 mt-5">{bus.price}Tk</p> : <p className="text-sm font-semibold leading-6 text-gray-900 mt-5">
                                    <Skeleton variant="text" width={150} sx={{ fontSize: '1rem' }} />
                                </p>
                            }

                        </div>
                        {
                            bus?.seats > 0 ?
                                <Button onClick={handleOpen} className="bg-black h-8 text-white hover:bg-black">Get a Ticket </Button> : <p className="text-red-600 font-bold mt-10">No Tickets Available</p>
                        }


                    </div>

                </div>




                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                   
                >
                    <Box sx={style}>
                        <div className="w-3/4 mx-auto flex gap-8 pb-10">
                        <Typography id="modal-modal-title" variant="h6" component="h6" className="text-gray-500 text-center text-sm ">
                           Choose Seat
                        </Typography>
                        {
                            bus?<Typography id="modal-modal-title" variant="h6" component="h6" className="text-gray-500 text-center text-sm ">
                            Available Seats ({bus.seats})
                         </Typography>:null
                        }
                        </div>
                        
                        <div className="w-2/4 mx-auto flex justify-between mt-2">
                        <Image  src="https://icon-library.com/images/opening-door-icon/opening-door-icon-6.jpg" alt="" width={30} height={30}/> 

                            <Image  src="https://static.thenounproject.com/png/4183244-200.png" alt="" width={30} height={30}/>
                        </div>
                        {
                            bus?.availableseats ? <div className=" grid grid-cols-12 gap-2 w-2/4 lg:w-2/4 mx-auto  mt-2">

                                {bus?.availableseats?.map(allseats => (<AvailableSeats key={allseats._id} allseats={allseats} />))}
                            </div> : null
                        }
                        <div className=" w-2/4 mx-auto mt-10">
                        <Typography id="modal-modal-title" variant="h6" component="h6" className="text-red-500 text-start text-xs ">
                           You can book only 2 tickets 
                        </Typography>
                        <button className="bg-violet-500 w-full mt-2 h-8 text-white ">Confirm </button>
                        </div>
                    </Box>
                </Modal>

                {/* <div className="w-full hidden">
            <p className="w-1/4 mx-auto ">Available Seats</p>
            {
                bus?.availableseats ? <div className=" grid grid-cols-12 gap-2 w-2/4 lg:w-1/4 mx-auto  mt-10 md:mt-16 lg:mt-12 ">
                   
                    {bus?.availableseats?.map(allseats => (<AvailableSeats key={allseats._id} allseats={allseats} />))}
                </div> : null
            }
            </div> */}
            </div>
        </div>
    )
}