//ICONS
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

export default function StarsHolder () {

  return (
    <div class="rating">
      <StarIcon className='icon'/>
      <StarIcon className='icon'/>
      <StarIcon className='icon'/>
      <StarHalfIcon className='icon'/>
      <StarBorderIcon className='icon'/>
    </div>
  )
}