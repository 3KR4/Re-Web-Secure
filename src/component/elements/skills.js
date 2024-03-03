import React, { useEffect, useState } from "react";

const ourSkills = [
  {
    id: 1,
    name: "Satisfaction",
    goal: 100,
    class: "num1",
    info: "%",
    value: 0,
  },
  {
    id: 2,
    name: "Happy Users",
    goal: 120,
    class: "num2",
    info: "K",
    value: 0,
  },
  {
    id: 3,
    name: "Downloads",
    goal: 135,
    class: "num3",
    info: "K+",
    value: 0,
  },
  {
    id: 4,
    name: "Buying Process",
    goal: 165,
    class: "num4",
    info: "$",
    value: 0,
  },
];

export default function OurSkills() {
  const [skills, setSkills] = useState([...ourSkills]);
  let progress; // Declare progress variable outside the useEffect

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > document.querySelector(".about .counter").offsetTop - 900) {
        const percentageIncreasePerInterval = 1; // Adjust as needed

        progress = setInterval(() => {
          setSkills((prevSkills) => {
            const updatedSkills = prevSkills.map((skill) => {
              const newValue = Math.min(
                skill.value + percentageIncreasePerInterval,
                skill.goal
              );

              return {
                ...skill,
                value: newValue,
              };
            });

            return updatedSkills;
          });
        }, 150);

        return () => clearInterval(progress);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(progress); // Clear the interval on component unmount
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="counter">
      <div className="mainTitle">
        <h1>6000+ Ratings Review</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
      </div>
      <div className="container">
          {skills.map((x) => {
            return (
              <div key={x.id} className={`num ${x.class}`}>
                <div><h1>{x.value}</h1>{x.info}</div> 
                <p>{x.name}</p>
              </div>
            );
          })}
        </div>
      </div>
  );
}
