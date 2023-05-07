import { Modal } from 'antd'

import './confirmModal.scss'
import QuestionMarkIcon from '../../images/icons/QuestionMarkIcon';

const ConfirmModal = ({
    icon,
    title,
    open,
    onOk,
    onCancel,
    question
}) => {
    return (
        <div>
            <Modal
                title={
                    <div className='logoutTitle'>
                        {icon} <span>{title}</span>
                    </div>} open={open
                    }
                onOk={onOk}
                onCancel={onCancel}
            >
                <div className='logoutContent'>
                    <QuestionMarkIcon />
                    <h2>{question}</h2>
                </div>
            </Modal>
        </div>
    )
}

export default ConfirmModal