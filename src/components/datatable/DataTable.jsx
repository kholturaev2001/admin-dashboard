import { DataGrid } from '@mui/x-data-grid';

import './datatable.scss'
import { userColumns, userRows } from '../../tabledatasource';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const DataTable = () => {
    const [data, setData] = useState(userRows)

    function handleDelete(id) {
        setData(data.filter(item => item.id !== id))
    }

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => (
                <div className="cellAction">
                    <Link to='/users/test_user' style={{ textDecoration: "none" }}>
                        <div className="viewButton">View</div>
                    </Link>
                    <button className="deleteButton button" onClick={() => handleDelete(params.row.id)}>Delete</button>
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
            <DataGrid
                className='datagrid'
                rows={data}
                columns={userColumns.concat(actionColumn)}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable