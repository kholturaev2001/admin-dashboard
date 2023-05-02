import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom'

import './sidebar.scss'
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';


const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)

    return (
        <div className='sidebar'>
            <div className="top">
                <Link to='/' style={{ textDecoration: "none" }}>
                    <span className="logo">m_admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to='/' style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className='icon' />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to='/users' style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineOutlinedIcon className='icon' />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to='/products' style={{ textDecoration: "none" }}>
                        <li>
                            <ProductionQuantityLimitsIcon className='icon' />
                            <span>Products</span>
                        </li>
                    </Link>
                    <Link to='/orders' style={{ textDecoration: "none" }}>
                        <li>
                                <CreditCardOutlinedIcon className='icon' />
                                <span>Orders</span>
                        </li>
                    </Link>
                    <li>
                        <button>
                            <LocalShippingIcon className='icon' />
                            <span>Delivery</span>
                        </button>
                    </li>
                    <p className="title">USEFUL</p>

                    <li>
                        <button>
                            <AssessmentIcon className='icon' />
                            <span>Stats</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <NotificationsNoneIcon className='icon' />
                            <span>Notifications</span>
                        </button>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <button>
                            <SettingsSystemDaydreamIcon className='icon' />
                            <span>System Health</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <PsychologyOutlinedIcon className='icon' />
                            <span>Logs</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <SettingsSuggestIcon className='icon' />
                            <span>Settings</span>
                        </button>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <button>
                            <AccountCircleOutlinedIcon className='icon' />
                            <span>Profile</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <LogoutOutlinedIcon className='icon' />
                            <span>Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({type: 'LIGHT'})}></div>
                <div className="colorOption" onClick={() => dispatch({type: 'DARK'})}></div>
            </div>

        </div>
    )
}

export default Sidebar