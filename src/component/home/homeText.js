import { ReactTyped } from "react-typed";

export default function HomeText (props) {
  const page = props.nowPage

  let whyUs = page.info.map((info) => {
    return <li key={info.id}>
      <span>{info.title}</span>
      {info.text}
    </li>
  })
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
        <h4>Why Chose Us</h4>
        <ul className="whyUs">
          {whyUs}
        </ul>
      </div>
      <div className='imgHolder'>
        <img src={page.img} className='mainImg'/>
      </div>
    </div>
  )
}


