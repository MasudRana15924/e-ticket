import Image from 'next/image'
export default function Payment(){
    return(
        <div className="w-full lg:w-3/4 mx-auto bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl  lg:px-0">
    <h2 className="text-start text-xl font-medium leading-8 text-gray-900">Trusted Online Payment Partner</h2>
    <div className="mx-auto  grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 mt-20">
      <Image className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://logos-download.com/wp-content/uploads/2022/01/BKash_Logo-700x287.png" alt="Transistor" width={158} height={48} />
      <Image className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://www.vhv.rs/dpng/d/496-4962280_nagad-logo-transparent-bkash-logo-png-png-download.png" alt="Reform" width={158} height={48} />
      <Image className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnJA2oPiL2KtuW5vntDdB8kN-wI_Hx4ZrFvDChlAE&s" alt="Tuple"width={158} height={48}/>
      <Image className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://api.upaybd.com/media/dynamic_image/Website_Footer.png" alt="SavvyCal" width={258} height={48} />
      
    </div>
  </div>
</div>

    )
}