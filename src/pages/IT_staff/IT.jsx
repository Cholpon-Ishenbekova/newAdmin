import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/table/Datatable"

function IT() {
  return (
    <div className='it'>
      <div className="itnContainer">
        <Navbar />
        <div className="datatable">
          <Datatable department="IT"/>
        </div>
      </div>
    </div>
  )
}

export default IT
