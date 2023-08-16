
import Banner from './components/banner/Banner'
import Buses from './components/busses/buses'
import Stats from './components/stats/stats';
import Payment from './components/payment/payment';
import Helpline from './helpline/page';
export default function Home() {
  return (
    <main className="">
     <div>
     <Banner></Banner>
     <Buses></Buses>
     <Stats></Stats>
     <Payment></Payment>
     <Helpline></Helpline>
     </div>
    </main>
  )
}
