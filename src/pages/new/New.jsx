import { useEffect, useState } from 'react';
import {
  doc,
  serverTimestamp,
  setDoc
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';


import './new.scss'
import Sidebar from './../../components/sidebar/Sidebar';
import Navbar from './../../components/navbar/Navbar';
import { db, auth, storage } from './../../firebase';
import GoBackBtn from '../../components/goBackBtn/GoBackBtn';

const New = ({ inputs, title }) => {
  const [file, setFile] = useState('')
  const [data, setData] = useState({})
  const [percent, setPercent] = useState(null)
  const navigate = useNavigate()


  useEffect(() => {
    const uploadFile = () => {
      const uniqueName = new Date().getTime() + file.name
      const storageRef = ref(storage, uniqueName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setPercent(progress)
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break
          }
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }))
          });
        }
      );

    }

    file && uploadFile()
  }, [file])

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({
      ...data,
      [id]: value
    })

  }

  const handleAdd = async (e) => {
    e.preventDefault()
    try {
      if (inputs?.length < Object.keys(data).length
        || inputs?.length === Object.keys(data).length) {
        const res = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        )
        await setDoc(doc(db, "users", res.user.uid), {
          ...data,
          timeStamp: serverTimestamp()
        });
        navigate(-1)
        notification["success"]({
          message: "Added!",
          description: "A new user is successfully added!",
        });
      } else {
        notification["warning"]({
          message: "Warning!",
          description: "All fields should filled!",
        });
      }

    } catch (error) {
      notification["error"]({
        message: "Error!",
        description: error.toString(),
      });
    }
  }

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
            <GoBackBtn />
            <img
              className='photo'
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleAdd} >

              <div className="formInput">
                <label htmlFor='file'>
                  Image: <DriveFolderUploadOutlinedIcon className='icon' />
                </label>
                <input
                  id='file'
                  style={{ display: 'none' }}
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {
                inputs.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label htmlFor={input.label}>{input.label}</label>
                    <input
                      autoComplete='off'
                      type={input.type}
                      id={input.id}
                      placeholder={input.placeholder}
                      onChange={handleInput}
                    />
                  </div>
                ))
              }
              <button type='submit' disabled={percent !== null && percent < 100} >Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New