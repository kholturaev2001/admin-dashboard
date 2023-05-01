import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import './table.scss'

const ProductTable = () => {
  const rows = [
    {
      id: 12345,
      product: "Acer Nitro 5",
      img: 'https://m.media-amazon.com/images/I/71ctRE34RuL._AC_SX466_.jpg',
      customer: "John Smith",
      date: "1 August",
      amount: 23,
      method: 'Cash on Delivery',
      status: "Approved",
    },
    {
      id: 245675234,
      product: "Play Station",
      img: "https://m.media-amazon.com/images/I/51eOztNdCkL._SX522_.jpg",
      customer: "Michael Doe",
      date: "1 December",
      amount: 435,
      method: 'Cash on Delivery',
      status: "Pending",
    },
    {
      id: 345678567,
      product: "Mackbook",
      img: "https://m.media-amazon.com/images/I/71jvo-a1MzL._AC_SX466_.jpg",
      customer: "Alex Savjani",
      date: "23 April",
      amount: 45,
      method: 'Online Payment',
      status: "Approved",
    },
    {
      id: 4578451,
      product: "Acer Nitro 5",
      img: 'https://m.media-amazon.com/images/I/71ctRE34RuL._AC_SX466_.jpg',
      customer: "John Smith",
      date: "1 August",
      amount: 23,
      method: 'Cash on Delivery',
      status: "Approved",
    },
    {
      id: 2535784,
      product: "Play Station",
      img: "https://m.media-amazon.com/images/I/51eOztNdCkL._SX522_.jpg",
      customer: "Michael Doe",
      date: "1 December",
      amount: 435,
      method: 'Cash on Delivery',
      status: "Pending",
    },
    {
      id: 367853456456,
      product: "Mackbook",
      img: "https://m.media-amazon.com/images/I/71jvo-a1MzL._AC_SX466_.jpg",
      customer: "Alex Savjani",
      date: "23 April",
      amount: 45,
      method: 'Online Payment',
      status: "Approved",
    },
  ]


  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell> {row.id} </TableCell>
              <TableCell> 
                <div className="cellWrapper">
                  <img src={row.img} alt="" className='image' />  
                  {row.product}
                </div>  
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ProductTable