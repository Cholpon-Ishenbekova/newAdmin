import React, { useState } from 'react'
import "./newstaff.scss"
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';


const NewStaff = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  return (
    <div className="new">
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file ? URL.createObjectURL(file) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdcH0qkZOx5IaqQ9sUcnT8tJ6NmIvj7darDA&usqp=CAU"}
              alt="empty profile"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{ display: "none" }} />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{ input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewStaff
