import { DataGrid } from '@mui/x-data-grid';

import './datatable.scss'
import { userColumns, userRows } from '../../tabledatasource';

const DataTable = () => {

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: () => (
                <div className="cellAction">
                    <button className="viewButton button">View</button>
                    <button className="deleteButton button">Delete</button>
                </div>
            )
        }
    ]
    return (
        <div className='datatable'>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable