import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import ProductTable from '../../components/table/Table'
import Widget from '../../components/widget/Widget'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type='user' />
          <Widget type='product' />
          <Widget type='order' />
          <Widget type='earning' />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2.5 / 1} title='User Spending (Last 6 Months)' />
        </div>
        <div className="listContainer">
          <div className="listTitle">
            Latest transactions
          </div>
          <ProductTable />
        </div>
      </div>

    </div>
  )
}

export default Home