
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconHolder from './iconHolder';




export default function Header3 () {
  return(
    <div className="header3">
      <IconHolder/>
      <div className='scroll'>
        <span><ChevronRightIcon className='icon up'/></span>
        <h4>Scroll</h4>
        <span><ChevronLeftIcon className='icon down'/></span>
      </div>
    </div>
  )
}