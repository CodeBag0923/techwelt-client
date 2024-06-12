import React  from 'react'
import "./Try.css";

const Try = ({text}) => {
  return (
    <div className="position-relative">
      <img
        src="./assets/blueQuestion.svg" 
        alt="none"
        className="dropdown-toggle try-dropdown-img cursor-pointer"
        href="#"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      />
      <div className="dropdown-menu try-dropdown-div text-center bg-black">
        <p className='text-white mb-0'>{text}</p>
      </div>
    </div>
  )
}

export default Try