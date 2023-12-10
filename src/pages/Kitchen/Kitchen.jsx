import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/table/Datatable"

function Kitchen() {
  return (
    <div className='kitchen'>
      <div className="kitchenContainer">
        <Navbar />
        <div className="datatable">
          <Datatable department="kitchen"/>
        </div>
      </div>
    </div>
  )
}

export default Kitchen
