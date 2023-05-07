import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CopyToClipboard from "reactjs-copy-to-clipboard";
import { signInWithEmailAndPassword } from "firebase/auth";

import './login.scss'
import { auth } from '../../firebase';
import { AuthContext } from './../../context/AuthContext';
import copyIcon from '../../images/copy-icon.png'

const Login = () => {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [statusLogin, setStatusLogin] = useState({
    copied: false,
    allowCopy: false,
  });
  const [statusPassword, setStatusPassword] = useState({
    copied: false,
    allowCopy: false,
  });


  const navigate = useNavigate()

  const { dispatch } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user })
        navigate('/')
      })
      .catch((error) => {
        setError(error)
      });
  }

  const copyLogin = () => {
    setStatusLogin({ copied: true, allowCopy: true });
    setTimeout(() => {
      setStatusLogin({ copied: false, allowCopy: false });
    }, 3000)
  }

  const copyPassword = () => {
    setStatusPassword({ copied: true, allowCopy: true });
    setTimeout(() => {
      setStatusPassword({ copied: false, allowCopy: false });
    }, 3000)
  }

  return (
    <div className="loginMain">
      <div className='login'>
        <div className='loginTxt'>
          <h4>Here's an account to log in...</h4>
          <section>
            <div className='copyRow'>
              <span>Email: </span>
              <b> <code>example_email@gmail.com</code></b>
              <button
                title='copy'
                onClick={copyLogin}
                style={{
                  display: statusLogin.allowCopy
                    ? "none"
                    : 'block'
                }}>
                <CopyToClipboard text={'example_email@gmail.com'}>
                  <img src={copyIcon} alt="copy" />
                </CopyToClipboard>
              </button>
              {statusLogin.copied && <code className='status'>Copied!</code>}
            </div>
            <div className='copyRow'>
              <span>Password: </span>
              <b> <code>example_password</code></b>
              <button
                title='copy'
                onClick={copyPassword}
                style={{
                  display: statusPassword.allowCopy
                    ? "none"
                    : 'block'
                }}>
                <CopyToClipboard text={'example_password'}>
                  <img src={copyIcon} alt="copy" />
                </CopyToClipboard>
              </button>
              {statusPassword.copied && <code className='status'>Copied!</code>}
            </div>
          </section>
        </div>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder='email'
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='password'
            onChange={e => setPassword(e.target.value)}
          />
          <button type='submit'>Login</button>
          {error &&
            <span>{error.message}</span>
          }

        </form>
      </div>
    </div>
  )
}

export default Login