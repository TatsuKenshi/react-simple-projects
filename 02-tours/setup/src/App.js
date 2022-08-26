import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import Refresh from './Refresh'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [tours, setTours] = useState([])
  const [isError, setIsError] = useState(false)

  const removeTour = (id) =>{
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async() => {
    setIsLoading(true)
    setIsError(false)

    try {
      const response = await fetch(url)

      if(response.ok){
        const tours = await response.json()
        setTours(tours)
      } else {
        setIsError(true)
        console.log("error");
      }
    } catch (error) {
      setIsError(true)
      console.log("network error");
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(()=>{
    fetchTours()
  }, [])

  if(isLoading) {
    return <>
  <main>
    <Loading />
  </main>
  </>
  }

  if(tours.length === 0) {
    return <Refresh fetchTours={fetchTours} />
  }

  return <main>
    <Tours tours={tours} removeTour={removeTour} />
  </main>
}

export default App
