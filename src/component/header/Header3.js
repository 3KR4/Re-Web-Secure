import React, { useState, useContext, useEffect } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconHolder from './iconHolder';


export default function Header3() {
  const [activeIndex, setActiveIndex] = useState(0);

  let allProjects = document.querySelectorAll(".projectsHolder .box")

  useEffect(() => {
    allProjects.forEach(box => {
      box.classList.remove('active');
    });
    document.querySelector(`.projectsHolder .box:nth-child(${activeIndex + 1})`).classList.add('active');
  }, [activeIndex])

  function clickScrollDown() {
    setActiveIndex((prevIndex) => (prevIndex - 1 + allProjects.length) % allProjects.length);
  }

  function clickScrollUp() {
    setActiveIndex((prevIndex) => (prevIndex + 1) % allProjects.length);
  }

  return (
    <div className="header3">
      <IconHolder />
      <div className='scroll'>
        <span onClick={clickScrollDown}><ChevronRightIcon className='icon up' /></span>
        <h4>Scroll</h4>
        <span onClick={clickScrollUp}><ChevronLeftIcon className='icon down' /></span>
      </div>
    </div>
  );
}