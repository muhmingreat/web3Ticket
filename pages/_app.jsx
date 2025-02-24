import { ToastContainer } from 'react-toastify'
import '@/styles/global.css'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import '@/config/connection'
import { Provider } from 'react-redux';
import { store } from '@/store';

export default function App({ Component, pageProps }) {

  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild || typeof window === 'undefined') {
    return null
  } else {
    return (

      <div className="min-h-screen bg-gray-100">
        <>
                <Provider store={store}>

                  <Header />
                  <div className="mt-10 h-20 "></div>
                  <Component {...pageProps} />

                  {/* <div className="mt-10 h-20 "></div> */}
                  <ToastContainer position="bottom-center" theme="dark" />

                </Provider>
              
        </>
      </div>

    )
  }
}
