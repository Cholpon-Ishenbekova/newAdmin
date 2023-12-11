import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'date',
    headerName: 'Date',
    type: 'number',
    width: 90,
  },
  {
    field: 'in',
    headerName: 'IN',
    type: 'number',
    width: 90,
    },
    {
        field: 'out',
        headerName: 'OUT',
        type: 'number',
        width: 90,
       },
 
];

const rows = [
    {
        id: 1,
        date: "4/27/2023",
        in: "6:27",
        out: "20:41",
    },
    {
        id: 2,
        date: "10/2/2023",
        in: "23:39",
        out: "15:25",
    },
    {
        id: 3,
        date: "8/27/2023",
        in: "20:37",
        out: "0:12",
    },
];

export default function DataTime() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}