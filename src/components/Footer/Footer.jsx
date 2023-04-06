import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { IconButton } from '@mui/material';

const Footer = () => {
  return (
    <footer  className=" fixed bottom-0 left-0 z-[100] w-full py-5 px-2 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
         <IconButton>
            <HomeOutlinedIcon /> 
         </IconButton>
    </footer>
  )
}

export default Footer;