import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/table/Datatable'

function Security() {
  return (
    <div className='securty'>
      <div className="securityContainer">
        <Navbar />
        <div className="datatable">
          <Datatable department="secuirty"/>
        </div>
      </div>
    </div>
  )
}

export default Security
