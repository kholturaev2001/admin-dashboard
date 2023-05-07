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
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';

import './sidebar.scss'
import { DarkModeContext } from '../../context/darkModeContext';
import ConfirmModal from '../modal/ConfirmModal';


const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate()

    const logout = () => {
        sessionStorage.removeItem('dashboard_user')
        setIsModalOpen(false);
        navigate('/login')
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const showLogoutModal = () => {
        setIsModalOpen(true);
    }

    return (
        <div className='sidebar'>
            <div className="top">
                <NavLink to='/' style={{ textDecoration: "none" }}>
                    <span className="logo">m_admin</span>
                </NavLink>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? "isActive" : ""}
                        style={{ textDecoration: "none" }}
                    >
                        <li>
                            <DashboardIcon className='icon' />
                            <span>Dashboard</span>
                        </li>
                    </NavLink>
                    <p className="title">LISTS</p>
                    <NavLink className={({ isActive }) => isActive ? "isActive" : ""} to='/users' style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineOutlinedIcon className='icon' />
                            <span>Users</span>
                        </li>
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "isActive" : ""} to='/products' style={{ textDecoration: "none" }}>
                        <li>
                            <ProductionQuantityLimitsIcon className='icon' />
                            <span>Products</span>
                        </li>
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "isActive" : ""} to='/orders' style={{ textDecoration: "none" }}>
                        <li>
                            <CreditCardOutlinedIcon className='icon' />
                            <span>Orders</span>
                        </li>
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "isActive" : ""} to='/delivery' style={{ textDecoration: "none" }}>
                        <li>
                            <LocalShippingIcon className='icon' />
                            <span>Delivery</span>
                        </li>
                    </NavLink>
                    <p className="title">USEFUL</p>
                    <NavLink className={({ isActive }) => isActive ? "isActive" : ""} to='/stats' style={{ textDecoration: "none" }}>

                        <li>
                            <AssessmentIcon className='icon' />
                            <span>Stats</span>
                        </li>
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "isActive" : ""} to='/notifications' style={{ textDecoration: "none" }}>

                        <li>
                            <NotificationsNoneIcon className='icon' />
                            <span>Notifications</span>
                        </li>
                    </NavLink>
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
                        <button onClick={showLogoutModal}>
                            <LogoutOutlinedIcon className='icon' />
                            <span>Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <button className="colorOption" onClick={() => dispatch({ type: 'LIGHT' })}></button>
                <button className="colorOption" onClick={() => dispatch({ type: 'DARK' })}></button>
            </div>

            <ConfirmModal
                icon={<LogoutOutlinedIcon />}
                title='Logging out'
                open={isModalOpen}
                onOk={logout}
                question='Are you sure you want to log out?'
                onCancel={handleCancel}
            />
        </div>
    )
}

export default Sidebar