import React, {useState, useEffect} from 'react'
import "./list.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useLocation } from 'react-router-dom';

function List() {
    const [latestItems, setLatestItems] = useState ([
        {
          id: 1,
          Name: "Parnell Swaden",
          Department: "Security",
          email: "pswaden0@hubpages.com",
          status: "IN",
          time: "9:59",
          img: "https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 2,
          Name: "Salaidh Ainsworth",
          Department: "Kitchen",
          email: "sainsworth1@cisco.com",
          status: "OUT",
          time: "17:59",
          img: "https://images.pexels.com/photos/6000065/pexels-photo-6000065.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 3,
          Name: "Horacio Normadell",
          Department: "IT",
          email: "hnormadell2@infoseek.co.jp",
          status: "IN",
          time: "8:59",
          img:"https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 4,
          Name: "Sloane Dennis",
          Department: "Finance",
          email: "sdennis3@harvard.edu",
          status: "OUT",
          time: "15:59",
          img: "https://images.pexels.com/photos/6976943/pexels-photo-6976943.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 5,
          Name: "Dot Pudner",
          Department: "Kitchen",
          email: "dpudner4@about.com",
          status: "IN",
          time: "10:59",
          img: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?b=1&s=612x612&w=0&k=20&c=jc27S9EzcqPWne91HrtCaveIe8qazVsGhDjYRdwNLoU=",
        },
     
    ]);

    const location = useLocation();
    const [state, setLocationState] = useState(null);
  
    useEffect(() => {
      setLocationState(location.state);
    }, [location.state]);
  
    useEffect(() => {
      if (state) {
        const newItem = {
          id: Date.now(),
          Name: state.name,
          Department: state.department,
          email: state.email,
          status: state.status,
          time: state.time,
          img: state.img,
        };
        setLatestItems(prevItems => [newItem, ...prevItems.slice(0, 4)]); // Keep the latest 5 items
      }
    }, [state]);
  
    return (
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">ID</TableCell>
              <TableCell className="tableCell">Name</TableCell>
              <TableCell className="tableCell">Department</TableCell>
              <TableCell className="tableCell">Email</TableCell>
              <TableCell className="tableCell">Status</TableCell>
              <TableCell className="tableCell">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {latestItems.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="profile" className="image" />
                    {row.Name}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.Department}</TableCell>
                <TableCell className="tableCell">{row.email}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
                <TableCell className="tableCell">{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  
  export default List;





   // {
        //   id: 6,
        //   Name: "Nobie Ruller",
        //   Department: "Security",
        //   email: "nruller5@ehow.com",
        //   status: "OUT",
        //   time: "17:59",
        //   img: "https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=600",
        // },
        // {
        //   id: 7,
        //   Name: "Rosco Lowles",
        //   Department: "IT",
        //   email: "rlowles6@bloglovin.com",
        //   status: "IN",
        //   time: "9:59",
        //   img: "https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=600",
        // },
        // {
        //   id: 8,
        //   Name: "Desmund Topley",
        //   Department: "Security",
        //   email: "dtopley7@berkeley.edu",
        //   status: "OUT",
        //   time: "17:59",
        //   img: "https://images.pexels.com/photos/8420889/pexels-photo-8420889.jpeg?auto=compress&cs=tinysrgb&w=600",
        // },
        // {
        //   id: 9,
        //   Name: "Massimo Olive",
        //   Department: "Finance",
        //   email: "molive8@diigo.com",
        //   status: "IN",
        //   time: "10:59",
        //   img: "https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&w=600",
        // },
        // {
        //   id: 10,
        //   Name: "Aube Ziem",
        //   Department: "Security",
        //   email: "aziem9@umn.edu",
        //   status: "OUT",
        //   time: "2:59",
        //   img: "https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600",
        // },