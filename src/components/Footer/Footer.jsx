import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { IconButton } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
  const [whoIsClick,setWhoIsClick]=useState({
    Home:true,
    Category:false,
    Profile:false
  })
  return (
    <footer  className=" fixed bottom-0 left-0 z-[100] w-full py-3 px-3 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
         <FooterIcon clickFun={{whoIsClick, setWhoIsClick}} Icon={HomeOutlinedIcon} iconText="Home"/>
         <FooterIcon clickFun={{whoIsClick, setWhoIsClick}} Icon={AppsIcon} iconText="Category"/>
         <FooterIcon clickFun={{whoIsClick, setWhoIsClick}} Icon={AccountCircleOutlinedIcon}iconText="Profile"/>
        
    </footer>
  )
}

export default Footer;

const FooterIcon = ({Icon, iconText ,clickFun})=>{
  
  const clickHandle=()=>{
    const obj= {
      Home:true,
      Category:false,
      Profile:false,
    }
    if(iconText==="Category"){
      obj.Category=true;
      obj.Home=false;
      obj.Profile=false;
      
    }else if(iconText==="Profile"){
     obj.Profile=true;
     obj.Home=false;
     obj.Category=false;
    }
    clickFun.setWhoIsClick(obj)
  }
  
  return(
    <Link to={iconText==="Home"?"/":`/${String(iconText).toLowerCase()}`}>
<IconButton sx={{
            padding:'4px',
            paddingTop:'0px',
            borderRadius : "5px",
            color :"#4b19ee",
         }}onClick={clickHandle}
         
         >
            <div style={
              {
                color: clickFun.whoIsClick[iconText] &&"#4b19ee", 
              }}
              
              className= 'text-gray-700 hover:text-[#4b19ee] transition-all duration-300ms'
              
              >
                <Icon/>
                <p className="text-xs font-semibold">{iconText}</p>
            </div>
</IconButton> </Link>
)
            };