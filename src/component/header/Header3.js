import React, { useState, useContext, useEffect } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconHolder from '../elements/iconHolder';
import { useParams } from 'react-router-dom';


export default function Header3() {
  const [activeIndex, setActiveIndex] = useState(0);
  const allProjects = document.querySelectorAll(".projectsHolder .box");
  const { type } = useParams();

  useEffect(() => {
    setActiveIndex(0)
  }, [type]);

  useEffect(() => {
    document.querySelector(`.projectsHolder .box:nth-child(1)`).classList.add('active');
    console.log(activeIndex);
}, []);

  useEffect(() => {
    if (!allProjects || allProjects.length === 0) return; // Check if allProjects is defined and not empty

    allProjects.forEach(box => {
      box.classList.remove('active');
    });
    const newIndex = (activeIndex + allProjects.length) % allProjects.length;
    document.querySelector(`.projectsHolder .box:nth-child(${activeIndex == NaN ? 2 : newIndex + 1})`).classList.add('active');
  }, [activeIndex, allProjects])

  function clickScrollUp() {
    setActiveIndex(prevIndex => (prevIndex == -4 ? 3 : prevIndex - 1));
  }

  function clickScrollDown() {
    setActiveIndex(prevIndex => (prevIndex + 1));
  }

  return (
    <div className="header3">
      <IconHolder />
      <div className='scroll'>
        <span onClick={clickScrollUp}><ChevronRightIcon className='icon up' /></span>
        <h4>Scroll</h4>
        <span onClick={clickScrollDown}><ChevronLeftIcon className='icon down' /></span>
      </div>
    </div>
  );
}