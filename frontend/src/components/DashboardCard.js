import React from 'react'
import './DashboardCard.css'
import Counter from './Counter'
const DashboardCard = ({ title, number, image }) => {
  return (
    <div className=''>
      <div className='card1'>
        <h1>{title}</h1>
        <p>
          <Counter upperlimit={number} />
        </p>
        <img src={image} alt='No Image Data' />
      </div>
    </div>
  )
}

export default DashboardCard