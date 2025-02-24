import EventList from '@/components/EventList'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Team from '@/components/Team'
import { generateEventData } from '@/utils/fakeData'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { getEvents} from '@/services/blockchain'
import SplashScreen from '@/components/SplashScreen'



const Page = ({ eventsData }) => {
  const [end, setEnd] = useState(6)
  const [count] = useState(6)
  const [collection, setCollection] = useState([])

  useEffect(() => {
    setCollection(eventsData.slice(0, end))
  }, [eventsData, end])

  return (
  
    <div>
      <SplashScreen/>
      <Head>
        <title>M M ticket </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Team/>
      <EventList events={collection} />

      <div className="mt-10 h-20 "></div>

      {collection.length > 0 && eventsData.length > collection.length && (
        <div className="w-full flex justify-center items-center">
          <button
            className="bg-orange-500 shadow-md rounded-full py-3 px-4
            text-white duration-300 transition-all"
            onClick={() => setEnd(end + count)}
            >
            {' '}
            Load More
          </button>
        </div>
      )}
      <Footer/>
    </div>
  
  )
}

export default Page

export const getServerSideProps = async () => {
  const eventsData = await getEvents()
  generateEventData(10)
  return {
    props: { eventsData: JSON.parse(JSON.stringify(eventsData)) },
  }
}
