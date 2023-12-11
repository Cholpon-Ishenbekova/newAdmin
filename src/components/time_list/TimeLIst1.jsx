import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import Button from '@mui/material/Button';
import "./list.scss"

function TimeLIst1() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    };
    
    const handleEdit = (row) => {
        console.log('Edit clicked for row:', row);
    };

    const handleDelete = (row) => {
        console.log('Delete clicked for row:', row);
    };
  const rows = [
    {
      date: "4/27/2023",
      in: "6:27",
      out: "20:41",
    },
    {
      date: "10/2/2023",
      in: "23:39",
      out: "15:25",
    },
    {
      date: "8/27/2023",
      in: "20:37",
      out: "0:12",
    },
    {
      date: "5/30/2023",
      in: "22:45",
      out: "9:03",
    },
    {
      date: "11/2/2023",
      in: "17:48",
      out: "16:57",
    },
    {
      date: "1/4/2023",
      in: "5:04",
      out: "12:04",
    },
    {
      date: "1/21/2023",
      in: "2:41",
      out: "4:32",
    },
    {
      date: "9/9/2023",
      in: "14:59",
      out: "16:57",
    },
    {
      date: "7/10/2023",
      in: "6:20",
      out: "18:34",
    },
    {
      date: "7/11/2023",
      in: "5:38",
      out: "4:05",
    },
    {
      date: "7/8/2023",
      in: "12:52",
      out: "19:16",
    },
    {
      date: "10/25/2023",
      in: "3:03",
      out: "6:59",
    },
    {
      date: "4/27/2023",
      in: "12:25",
      out: "0:27",
    },
    {
      date: "12/30/2022",
      in: "19:02",
      out: "7:07",
    },
    {
      date: "4/5/2023",
      in: "18:07",
      out: "9:27",
    },
    {
      date: "3/7/2023",
      in: "12:13",
      out: "1:32",
    },
    {
      date: "11/26/2023",
      in: "20:48",
      out: "14:15",
    },
    {
      date: "4/8/2023",
      in: "2:29",
      out: "7:50",
    },
    {
      date: "5/10/2023",
      in: "0:28",
      out: "12:44",
    },
    {
      date: "3/15/2023",
      in: "16:04",
      out: "16:20",
    },
    {
      date: "8/20/2023",
      in: "1:39",
      out: "2:18",
    },
    {
      date: "2/7/2023",
      in: "11:44",
      out: "6:16",
    },
    {
      date: "6/28/2023",
      in: "5:31",
      out: "20:26",
    },
    {
      date: "12/30/2022",
      in: "16:02",
      out: "22:38",
    },
    {
      date: "6/25/2023",
      in: "22:34",
      out: "12:42",
    },
    {
      date: "4/22/2023",
      in: "20:49",
      out: "5:11",
    },
    {
      date: "6/15/2023",
      in: "18:45",
      out: "6:15",
    },
    {
      date: "5/21/2023",
      in: "18:56",
      out: "4:35",
    },
    {
      date: "9/27/2023",
      in: "4:53",
      out: "16:25",
    },
    {
      date: "12/21/2022",
      in: "22:59",
      out: "18:26",
    },
  ];
  return (
    <>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">IN</TableCell>
              <TableCell className="tableCell">OUT</TableCell>
              <TableCell className="tableCell">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="tableCell">{row.date}</TableCell>
                  <TableCell className="tableCell"><span className="in">{row.in}</span></TableCell>
                  <TableCell className="tableCell"><span className="out">{row.out}</span></TableCell>
                      <TableCell className="tableCell">
                          <div className="cellAction">
                              <Button onClick={() => handleEdit(row)}><span className="edit">Edit</span></Button>
                              <Button onClick={() => handleDelete(row)}><span className="delete" >Delete</span></Button>
                          </div>
                    </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

export default TimeLIst1;
