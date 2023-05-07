import React, { useEffect, useState } from 'react'
const BASE_URL = "https://restcountries.com/v3.1/all"
import './cart.css'
import Loading from '../components/nav/Loading'
export default function Home() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const FetchApi = async () =>{
        setLoading(true)
        try {
            const res = await fetch(BASE_URL)
            const data = await res.json()
            setData(data)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        FetchApi()
    }, [])
  return (
    <div className='home-all'>
        <Loading loading={loading}/>
      {data.map(item => <div key={item.area} className='cart'>
        <img src={item.flags.svg} alt="pic" className='card-img-top' />
        <div className="card-body">
    <h5 className="card-title">Name: {item.name.common}</h5>
    <p className="card-text">Subregion: {item.subregion}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Capital: {item.capital}</li>
    <li className="list-group-item">Car: {item.car.signs} </li>
    <li className="list-group-item">Region: {item.region} </li>
    <li className="list-group-item">Location: <a className='btn btn-primary' href={item.maps.googleMaps}>Location</a> </li>
  </ul>
      </div> )}
    </div>
  )
}
