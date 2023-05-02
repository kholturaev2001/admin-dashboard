import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Chart from '../../components/chart/Chart'
import './stats.scss'
import Navbar from '../../components/navbar/Navbar'

const Stats = () => {
  return (
    <div className='stats'>
      <Sidebar />
      <div className="statsContainer">
        <Navbar />

      <Chart aspect={3 / 1} title='User Spending (Last 6 Months)' />
      </div>

    </div>
  )
}

export default Stats