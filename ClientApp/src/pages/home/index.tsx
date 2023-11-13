import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Layout from "../layout"

const Home = () => {
    const [count, setCount] = useState(0)
  /* const [weather, setWeather] = useState({
    date: '',
    temperatureC: 0,
    temperatureF: 0,
    summary: '',
  }) */

  //fetch /api/WeatherForecast and display the results
  useEffect(() => {
    fetch('/api/WeatherForecast')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        /* const randomIndex = Math.floor(Math.random() * data.length)
        setWeather(data[randomIndex]) */
      })
  }, [])

  return (
    <Layout>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="card">
          <Link to="/about">About</Link>        
      </div>
    </Layout>
  )
}

export default Home
