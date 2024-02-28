import { ReactTyped } from "react-typed";

export default function HomeText (props) {
  const page = props.nowPage
  return(
    <div className='textHolder'>
      <div className='text'>

    <div>
      <ReactTyped
        strings={[
          page.title,
        ]}
        typeSpeed={70}
        backSpeed={50}
        loop 
        className='mainTitle'
      />
    </div>

        <p>{page.detailes}</p>
      </div>
      <div className='imgHolder'>
        <img src={localStorage.getItem("theme") == "dark-mode" ? page.img1 : page.img2} className='mainImg'/>
      </div>
    </div>
  )
}


