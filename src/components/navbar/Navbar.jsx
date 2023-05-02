import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';

import './navbar.scss'
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';


const Navbar = () => {
  const { dispatch, darkMode } = useContext(DarkModeContext)

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type='text' placeholder='Search...' />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <button className="item">
            <LanguageOutlinedIcon className='icon' />
            English
          </button>
          <button className="item" onClick={() => dispatch({ type: 'TOGGLE' })} >
            {
              !darkMode ? <DarkModeOutlinedIcon className='icon' /> : <LightModeIcon className='icon' />
            }

          </button>
          <button className="item">
            <FullscreenExitOutlinedIcon className='icon' />
          </button>
          <button className="item">
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className="counter">1</div>
          </button>
          <button className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className="counter">1</div>
          </button>
          <button className="item">
            <FormatListBulletedOutlinedIcon className='icon' />
          </button>
          <button className="item">
            <img className='avatar' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar