import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './nav.css'
export default function Nav() {
    const [nav, setNav] = useState([
        {name: 'Asia', peth: 'asia', id: 1},
        {name: 'Europe', peth: 'europe', id: 2},
        {name: 'Africa', peth: 'africa', id: 3},
        {name: 'Oceania', peth: 'oceania', id: 4},
        {name: 'Americas', peth: 'americas', id: 5},
        {name: 'Home', peth: '/', id: 6},
    ])
  return (
    <div className='nav-control'>
    <div className='nav'>
      {nav.map(item => <p key={item.id}><NavLink to={item.peth}className="nav-item">{item.name}</NavLink></p>)}
    </div>
    <input type='search' className={`nav-input `} placeholder="🔍"/>
    </div>
  )
}
