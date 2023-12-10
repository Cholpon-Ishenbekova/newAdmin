import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/table/Datatable"

function Finance() {
  return (
    <div className='finace'>
      <div className="financeContainer">
        <Navbar />
        <div className="datatable">
          <Datatable department="finance"/>
        </div>
      </div>
    </div>
  )
}

export default Finance
