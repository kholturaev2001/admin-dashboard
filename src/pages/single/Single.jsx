import React from 'react'

import './single.scss'
import Sidebar from './../../components/sidebar/Sidebar';
import Navbar from './../../components/navbar/Navbar';
import Chart from './../../components/chart/Chart';
import ProductTable from '../../components/table/Table';

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <button className="editButton button">Edit</button>
            <h1 className="title">Information</h1>
            <div className="item">
              <img 
                src="https://media.licdn.com/dms/image/D4E03AQGZy_4rj-vpsQ/profile-displayphoto-shrink_800_800/0/1673369063548?e=2147483647&v=beta&t=PompcmW-oIB0AAF6pOh-oX0PGCkk2GbYgYsoAZulsEg" 
                alt="" 
                className="itemImg" 
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">jandedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+992 929 23 98 74</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Steinfurter Str 23, Muenster</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Germany</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title='User Spending (Last 6 Months)' />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <ProductTable />
        </div>
      </div>
    </div>
  )
}

export default Single