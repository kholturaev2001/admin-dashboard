import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import './widget.scss'
import { db } from './../../firebase';

const Widget = ({ type }) => {

    //temporary
    const [amount, setAmount] = useState(null)
    const [diff, setDiff] = useState(null)

    let data;

    switch (type) {
        case 'user':
            data = {
                title: "USERS",
                isMoney: false,
                link: 'See all users',
                query: 'users',
                icon: (
                    <PersonOutlineOutlinedIcon
                        className='icon'
                        style={{
                            backgroundColor: 'rgba(255, 0, 0, 0.2)',
                            color: 'crimson'
                        }}
                    />),
            };
            break;
        case 'order':
            data = {
                title: "ORDERS",
                isMoney: false,
                link: 'View all orders',
                icon: (
                    <ShoppingCartOutlinedIcon
                        className='icon'
                        style={{
                            backgroundColor: 'rgba(218, 168, 32, 0.2)',
                            color: 'goldenrod'
                        }}
                    />),
            };
            break;
        case 'earning':
            data = {
                title: "EARNING",
                isMoney: true,
                link: 'View net earning',
                icon: (
                    <MonetizationOnOutlinedIcon
                        className='icon'
                        style={{
                            backgroundColor: 'rgba(0, 128, 0, 0.2)',
                            color: 'green'
                        }}
                    />),
            };
            break;
        case 'product':
            data = {
                title: "Products",
                query: 'products',
                link: 'See details',
                icon: (
                    <AccountBalanceWalletOutlinedIcon
                        className='icon'
                        style={{
                            backgroundColor: 'rgba(128, 0, 128, 0.2)',
                            color: 'purple'
                        }}
                    />),
            };
            break;
        default:
            break;
    }

    useEffect(() => {
        const fetchData = async () => {
            const today = new Date();
            const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1))
            const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2))

            const lastMonthQuery = query(
                collection(db, data.query),
                where('timeStamp', '<=', today),
                where('timeStamp', '>', lastMonth)
            )
            const prevMonthQuery = query(
                collection(db, data.query),
                where('timeStamp', '<=', lastMonth),
                where('timeStamp', '>', prevMonth   )
            )

            const lastMonthData = await getDocs(lastMonthQuery);
            const prevMonthData = await getDocs(prevMonthQuery)

            setAmount(lastMonthData.docs.length)
            setDiff((lastMonthData?.docs.length - prevMonthData?.docs.length) / prevMonthData?.docs.length * 100)
        }
        fetchData()
    }, [])

    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data?.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <button className="link button">{data.link}</button>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlinedIcon />
                    {diff} %
                </div>
                {data.icon}

            </div>
        </div>
    )
}

export default Widget