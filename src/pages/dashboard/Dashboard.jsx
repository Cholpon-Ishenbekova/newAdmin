import React from 'react'
import "./dashboard.scss"
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Photo from './background.png'

function Dashboard() {
  return (
      <div className='dashboard photo'>
          <div className="dashboardConatiner">
          <Navbar />
              <div className="widgets">
                <Widget type="staff" />
                <Widget type="in"/>
                <Widget type="out" />
                <Widget type="visits"/>
              </div>
          </div>
    </div>
  )
}

export default Dashboard
