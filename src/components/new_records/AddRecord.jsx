import React, { useState } from 'react';
import "./addrecords.scss";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const AddRecord = ({ inputs, title }) => {
  const [inputData, setInputData] = useState({});
  const [inputarr, setInputarr] = useState([]);
  const [file, setFile] = useState("");

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputarr([...inputarr, { ...inputData }]);
    console.log(inputarr);
    console.log(inputData);
    setInputData({});
    // Add logic to handle the form submission, e.g., sending data to a server
  };

  return (
    <div className="new">
      <div className="newContainer">
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
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" onChange={handleFileChange} style={{ display: "none" }} />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} name={input.name} value={inputData[input.name] || ''} onChange={handleChange} placeholder={input.placeholder} />
                </div>
              ))}

              <button onClick={handleSubmit} state={setInputData} type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecord;

