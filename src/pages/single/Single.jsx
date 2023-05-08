import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';

import './single.scss'
import Sidebar from './../../components/sidebar/Sidebar';
import Navbar from './../../components/navbar/Navbar';
import Chart from './../../components/chart/Chart';
import ProductTable from '../../components/table/Table';
import { db } from '../../firebase';
import AvatarLoading from '../../components/widget/AvatarLoading';

const Single = () => {
  const [data, setData] = useState({})
  const [userLoading, setUserLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      setUserLoading(true);
      const docRef = doc(db, "users", id);
      const docSnap = await getDoc(docRef)
      setData({
        ...docSnap.data()
      })
      setUserLoading(false);
    }
    return () => {
      getData()
    }
  }, [id])
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <button className="editButton button">Edit</button>
            <h1 className="title">Information</h1>
            {!userLoading ? <div className="item">
              <img
                src={data.img}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{data.displayName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{data.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">{data.address}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{data.country}</span>
                </div>
              </div>
            </div> : <AvatarLoading  />}
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title='User Spending (Last 6 Months)' />
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