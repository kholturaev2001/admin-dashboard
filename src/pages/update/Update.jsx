import { useEffect, useState } from 'react';
import {
  doc,
  serverTimestamp,
  setDoc,
  getDoc,
  updateDoc
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider
} from "firebase/auth";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";


import './update.scss'
import Sidebar from './../../components/sidebar/Sidebar';
import Navbar from './../../components/navbar/Navbar';
import { db, auth, storage } from './../../firebase';
import { useNavigate, useParams } from 'react-router-dom';
import { notification } from 'antd';

const Update = ({ inputs, title }) => {
  const [file, setFile] = useState('')
  const [percent, setPercent] = useState(null)
  const navigate = useNavigate()

  const { id } = useParams()

  const [data, setData] = useState({})
  const [inputValues, setInputValues] = useState({});


  useEffect(() => {

    const getData = async () => {
      const docRef = doc(db, "users", id);
      const docSnap = await getDoc(docRef)
      setData({
        ...docSnap.data()
      })
    }
    return () => {
      getData()
    }
  }, [id])


  useEffect(() => {
    setInputValues(data);
  }, [data]);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setInputValues({
      ...inputValues,
      [id]: value
    });
  };


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

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      if (inputs?.length < Object.keys(inputValues).length
        || inputs?.length === Object.keys(inputValues).length) {
          /* UPDATING EMAIL & PASSWORD */
          /* VERSION 1 */
        // await updateEmail(auth.currentUser, inputValues.email).then(() => {
        //   console.log('EMAIL CHANGED')
        // }).catch((error) => {
        //   console.log('ERROR OCCURED WHILE CHANGING EMAIL', error)
        // });

        // await updatePassword(auth.currentUser, inputValues.password).then(() => {
        //   console.log('PASSWORD CHANGED')
        // }).catch((error) => {
        //   console.log('ERROR OCCURED WHILE CHANGING PASSWORD', error)
        // });




          /* UPDATING EMAIL & PASSWORD */
          /* VERSION 2 */
        // const credential = EmailAuthProvider.credential(
        //   auth.currentUser.email,
        //   // data?.email,
        //   data?.password
        // )
        // reauthenticateWithCredential(auth.currentUser, credential)
        //   .then(() => {
        //     // Update the user's email address
        //     updateEmail(auth.currentUser, inputValues.email)
        //       .then(() => {
        //         console.log('EMAIL CHANGED')
        //       }).catch((error) => {
        //         console.log('ERROR OCCURED WHILE CHANGING EMAIL', error)
        //       });
        //   }).catch((error) => {
        //     console.log('ERROR OCCURED WHILE RE-AUTHENTICATING USER', error)
        //   });




        await updateDoc(doc(db, "users", id), {
          ...inputValues,
          timeStamp: serverTimestamp()
        });
        navigate(-1)
        notification["success"]({
          message: "Updated!",
          description: "The user is successfully updated!",
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
            <img
              className='photo'
              src={
                file
                  ? URL.createObjectURL(file)
                  : inputValues?.img
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleUpdate} >

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
              {data &&
                inputs.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label htmlFor={input.label}>{input.label}</label>
                    <input
                      autoComplete='off'
                      type={input.type}
                      id={input.id}
                      value={inputValues[input.id] || ''}
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

export default Update