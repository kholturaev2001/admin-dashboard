import { DataGrid } from '@mui/x-data-grid';

import './datatable.scss'
import { userColumns, userRows } from '../../tabledatasource';
import { Link } from 'react-router-dom';

const DataTable = () => {

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: () => (
                <div className="cellAction">
                    <Link to='/users/test_user' style={{ textDecoration: "none" }}>
                        <div className="viewButton">View</div>
                    </Link>
                    <button className="deleteButton button">Delete</button>
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
                    style={{ textDecoration: 'none'}}
                    className='link'
                >
                        Add New
                
                </Link>
            </div>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable