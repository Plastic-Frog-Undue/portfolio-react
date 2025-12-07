import React from 'react'
import './MyWork.css'
import logo from '../../assets/logo.svg'
import myWork_data from '../../assets/myWork_data.js'
import arrow_icon from '../../assets/left_arrow.svg'

const MyWork = () => {
  return (
    <div id='work' className='myWork'>
        <div className="myWork-title">
            <h1>My Latest Work</h1>
            <img src={logo} alt="" />
        </div>
        <div className="myWork-container">
        {myWork_data.map((work, index) =>{
             return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="myWork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork