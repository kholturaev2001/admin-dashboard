import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
    collection,
    deleteDoc,
    doc,
    onSnapshot
} from "firebase/firestore";

import './datatable.scss'
import { userColumns } from '../../tabledatasource';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { notification } from 'antd';
import ConfirmModal from '../modal/ConfirmModal';
import DeleteIcon from '../../images/icons/DeleteIcon';
import Loading from '../Loading';

const DataTable = () => {
    const [data, setData] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentUserId, setCurrentUserId] = useState(null);
    const [dataLoading, setDataLoading] = useState(false)

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    useEffect(() => {
        setDataLoading(true)
        const unsub = onSnapshot(collection(db, "users"), (snapShot) => {
            let list = [];
            snapShot.docs.forEach((doc) => {
                list.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setData(list)
            setDataLoading(false)
        },
            (error) => {
                console.log(error)
            });

        return () => {
            unsub()
        }

    }, [])


    const handleDelete = async (id) => {
        handleCancel()
        try {
            await deleteDoc(doc(db, "users", id));
            notification["success"]({
                message: "Deleted!",
                description: "The user is successfully deleted!",
            });
        } catch (error) {
            console.log("🚀 ~ file: DataTable.jsx:40 ~ handleDelete ~ error:", error)
        }
        setData(data.filter(item => item.id !== id))
    }

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => (
                <div className="cellAction">
                    <Link
                        to='/users/test_user'
                        style={{ textDecoration: "none" }}
                    >
                        <div className="viewButton">View</div>
                    </Link>
                    <button
                        className="deleteButton button"
                        onClick={() => {
                            setIsModalOpen(true)
                            setCurrentUserId(params.row.id)
                        }}
                    >
                        Delete
                    </button>
                    <Link
                        to={`/users/update/${params.row.id}`}
                        style={{ textDecoration: "none" }}
                    >
                        <div className="editButton">Edit</div>
                    </Link>
                </div>
            )
        }
    ]
    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Add New User
                <Link
                    to='new'
                    style={{ textDecoration: 'none' }}
                    className='link'
                >
                    Add New

                </Link>
            </div>
            {!dataLoading 
                ? <DataGrid
                className='datagrid'
                rows={data}
                columns={userColumns.concat(actionColumn)}
                checkboxSelection
            /> : <Loading />}
            <ConfirmModal
                icon={<DeleteIcon />}
                title='Delete user'
                open={isModalOpen}
                onOk={() => handleDelete(currentUserId)}
                question='Are you sure you want delete the user?'
                onCancel={handleCancel}
            />
        </div>
    )
}

export default DataTable