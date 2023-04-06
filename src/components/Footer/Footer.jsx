import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { IconButton } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Footer = () => {
  return (
    <footer  className=" fixed bottom-0 left-0 z-[100] w-full py-3 px-3 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
         <FooterIcon Icon={HomeOutlinedIcon} iconText="Home"/>
         <FooterIcon Icon={AppsIcon} iconText="Category"/>
         <FooterIcon Icon={AccountCircleOutlinedIcon}iconText="Profile"/>
        
    </footer>
  )
}

export default Footer;

const FooterIcon = ({Icon, iconText})=>(
<IconButton sx={{
            padding:'4px',
            paddingTop:'0px',
            borderRadius : "5px",
            color :"#4b19ee",
         }}>
            <div className= 'text-gray-700 hover:text-[#4b19ee] transition-all duration-300ms'>
                <Icon/>
                <p className="text-xs font-semibold">{iconText}</p>
            </div>
</IconButton> 
);