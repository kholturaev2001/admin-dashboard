import { useNavigate } from 'react-router-dom'

import goBack from '../../images/goBack.svg'
import './goBack.scss'

const GoBackBtn = () => {
    const navigate = useNavigate()
    return (
        <div className='goBack'>
            <button onClick={() => navigate(-1)}>
                <img src={goBack} alt="" />
            </button>
        </div>
    )
}

export default GoBackBtn