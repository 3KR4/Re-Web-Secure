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
        typeSpeed={80}
        backSpeed={80}
        loop 
        className='mainTitle'
      />
    </div>

        <p>{page.detailes}</p>
      </div>
      <div className='imgHolder'>
        <img src={page.img} className='mainImg'/>
      </div>
    </div>
  )
}


