import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function TimeList() {

    const rows = [
        {
            "date": "4/27/2023",
            "in": "8:00",
            "out": "18:00",
            "total": 0 
        },
        {
            "date": "10/2/2023",
            "in": "7:39",
            "out": "18:25",
            "total": 0
        }
    ];
    
    function calculateTotalHours(inTime, outTime) {
        const [inHours, inMinutes] = inTime.split(':').map(Number);
        const [outHours, outMinutes] = outTime.split(':').map(Number);
        let totalHours = (outHours - inHours) + (outMinutes - inMinutes) / 60;
        totalHours = Math.round(totalHours * 100) / 100;
        
        return totalHours;
    }
    
    rows.forEach(row => {
        const inTime = row.in;
        const outTime = row.out;
        const totalHours = calculateTotalHours(inTime, outTime);
        row.total = totalHours;
    });
    
    console.log(rows);
    
    // const rows = [
    //     {
    //         "date": "4/27/2023",
    //         "in": "6:27",
    //         "out": "20:41",
    //         "total": total
    //     },
    //     {
    //         "date": "10/2/2023",
    //         "in": "23:39",
    //         "out": "15:25",
    //         "total": total
    //     },
    //     {
    //         "date": "8/27/2023",
    //         "in": "20:37",
    //         "out": "0:12",
    //         "total": total
    //     },
    //     {
    //         "date": "5/30/2023",
    //         "in": "22:45",
    //         "out": "9:03",
    //         "total": total
    //     },
    //     {
    //         "date": "11/2/2023",
    //         "in": "17:48",
    //         "out": "16:57",
    //         "total": total
    //     },
    //     {
    //         "date": "1/4/2023",
    //         "in": "5:04",
    //         "out": "12:04",
    //         "total": total
    //     },
    //     {
    //         "date": "1/21/2023",
    //         "in": "2:41",
    //         "out": "4:32",
    //         "total": total
    //     },
    //     {
    //         "date": "9/9/2023",
    //         "in": "14:59",
    //         "out": "16:57",
    //         "total": total
    //     },
    //     {
    //         "date": "7/10/2023",
    //         "in": "6:20",
    //         "out": "18:34",
    //         "total": total
    //     },
    //     {
    //         "date": "7/11/2023",
    //         "in": "5:38",
    //         "out": "4:05",
    //         "total": total
    //     },
    //     {
    //         "date": "7/8/2023",
    //         "in": "12:52",
    //         "out": "19:16",
    //         "total": total
    //     },
    //     {
    //         "date": "10/25/2023",
    //         "in": "3:03",
    //         "out": "6:59",
    //         "total": total
    //       }, {
    //         "date": "4/27/2023",
    //         "in": "12:25",
    //         "out": "0:27",
    //         "total": total
    //       }, {
    //         "date": "12/30/2022",
    //         "in": "19:02",
    //         "out": "7:07",
    //         "total": total
    //       }, {
    //         "date": "4/5/2023",
    //         "in": "18:07",
    //         "out": "9:27",
    //         "total": total
    //       }, {
    //         "date": "3/7/2023",
    //         "in": "12:13",
    //         "out": "1:32",
    //         "total": total
    //       }, {
    //         "date": "11/26/2023",
    //         "in": "20:48",
    //         "out": "14:15",
    //         "total": total
    //       }, {
    //         "date": "4/8/2023",
    //         "in": "2:29",
    //         "out": "7:50",
    //         "total": total
    //       }, {
    //         "date": "5/10/2023",
    //         "in": "0:28",
    //         "out": "12:44",
    //         "total": total
    //       }, {
    //         "date": "3/15/2023",
    //         "in": "16:04",
    //         "out": "16:20",
    //         "total": total
    //       }, {
    //         "date": "8/20/2023",
    //         "in": "1:39",
    //         "out": "2:18",
    //         "total": total
    //       }, {
    //         "date": "2/7/2023",
    //         "in": "11:44",
    //         "out": "6:16",
    //         "total": total
    //       }, {
    //         "date": "6/28/2023",
    //         "in": "5:31",
    //         "out": "20:26",
    //         "total": total
    //       }, {
    //         "date": "12/30/2022",
    //         "in": "16:02",
    //         "out": "22:38",
    //         "total": total
    //       }, {
    //         "date": "6/25/2023",
    //         "in": "22:34",
    //         "out": "12:42",
    //         "total": total
    //       }, {
    //         "date": "4/22/2023",
    //         "in": "20:49",
    //         "out": "5:11",
    //         "total": total
    //       }, {
    //         "date": "6/15/2023",
    //         "in": "18:45",
    //         "out": "6:15",
    //         "total": total
    //       }, {
    //         "date": "5/21/2023",
    //         "in": "18:56",
    //         "out": "4:35",
    //         "total": total
    //       }, {
    //         "date": "9/27/2023",
    //         "in": "4:53",
    //         "out": "16:25",
    //         "total": total
    //       }, {
    //         "date": "12/21/2022",
    //         "in": "22:59",
    //         "out": "18:26",
    //         "total": total
    //       }
    //   ];
    return (
        <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">IN</TableCell>
              <TableCell className="tableCell">OUT</TableCell>
              <TableCell className="tableCell">Total Working Hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.in}</TableCell>
                <TableCell className="tableCell">{row.out}</TableCell>
                <TableCell className="tableCell">{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
    )
  
}

export default TimeList