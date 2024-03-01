import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function IconHolder () {
  return (
    <ul className="iconHolder">
      <li><LinkedInIcon  className='icon'/> </li>
      <li><FacebookIcon  className='icon'/> </li>
      <li><InstagramIcon className='icon'/> </li>
      <li><TwitterIcon   className='icon'/> </li>
      <li><WhatsAppIcon  className='icon'/> </li>
    </ul>
  )
}