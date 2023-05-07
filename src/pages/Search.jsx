import React, { useEffect, useState } from 'react'
const BASE_URL = `https://restcountries.com/v3.1/name/${name}`
export default function Search() {
    const [data, setData] = useState([])
    const Fetchas = async () =>{
        try {
            const res = await fetch(BASE_URL)
            const data = await res.json()
            setData(data)
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        Fetchas()
    }, [])
  return (
    <div className='home-all'>
        {data.map(item => item.name.common === name ? <dir className="cart" key={item.area} >
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
        </dir> : '')}
    </div>
  )
}
