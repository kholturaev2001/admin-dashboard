import React from 'react'
import './sidebar.scss'
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




const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">m_admin</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <button>
                            <DashboardIcon className='icon' />
                            <span>Dashboard</span>
                        </button>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <button>
                            <PersonOutlineOutlinedIcon className='icon' />
                            <span>Users</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <ProductionQuantityLimitsIcon className='icon' />
                            <span>Products</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <CreditCardOutlinedIcon className='icon' />
                            <span>Orders</span>
                        </button>
                    </li>
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
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>

        </div>
    )
}

export default Sidebar