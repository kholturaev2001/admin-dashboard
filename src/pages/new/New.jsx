import { useState } from 'react';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

import './new.scss'
import Sidebar from './../../components/sidebar/Sidebar';
import Navbar from './../../components/navbar/Navbar';

const New = ({ inputs, title }) => {
  const [file, setFile] = useState('')

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file ? URL.createObjectURL(file) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>

              <div className="formInput">
                <label htmlFor='file'>Image: <DriveFolderUploadOutlinedIcon className='icon' /></label>
                <input id='file' style={{ display: 'none' }} type="file" onChange={(e) => setFile(e.target.files[0])} />
              </div>
              {
                inputs.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label htmlFor={input.label}>{input.label}</label>
                    <input autoComplete='off' type={input.type} id={input.label} placeholder={input.placeholder} />
                  </div>
                ))
              }
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New