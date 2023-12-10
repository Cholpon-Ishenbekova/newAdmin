export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "user",
    headerName: "User",
    width: 280,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="profile" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "department",
    headerName: "Department",
    width: 200,
  },
  {
    field: "email",
    headerName: "Email",
    width: 290,
  },
];

export const userRows = (department) => [
  {
    id: 1,
    name: "Parnell Swaden",
    department: department,
    email: "pswaden0@hubpages.com",
    img: "https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Salaidh Ainsworth",
    department: department,
    email: "sainsworth1@cisco.com",
    img: "https://images.pexels.com/photos/6000065/pexels-photo-6000065.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Horacio Normadell",
    department: department,
    email: "sainsworth1@cisco.com",
    img: "https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Sloane Dennis",
    department: department,
    email: "sainsworth1@cisco.com",
    img: "https://images.pexels.com/photos/6976943/pexels-photo-6976943.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "Dot Pudner",
    department: department,
    email: "dpudner4@about.com",
    img: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?b=1&s=612x612&w=0&k=20&c=jc27S9EzcqPWne91HrtCaveIe8qazVsGhDjYRdwNLoU=",
  },
  {
    id: 6,
    name: "Nobie Ruller",
    department: department,
    email: "nruller5@ehow.com",
    img: "https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    name: "Rosco Lowles",
    department: department,
    email: "rlowles6@bloglovin.com",
    img: "https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    name: "Rosco Lowles",
    department: department,
    email: "dtopley7@berkeley.edu",
    img: "https://images.pexels.com/photos/8420889/pexels-photo-8420889.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 9,
    name: "Massimo Olive",
    department: department,
    email: "molive8@diigo.com",
    img: "https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 10,
    name: "Aube Ziem",
    department: department,
    email: "aziem9@umn.edu",
    img: "https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
