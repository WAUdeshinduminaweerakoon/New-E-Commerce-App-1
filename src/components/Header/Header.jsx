// import menu from'../../img/menu-hamburger-svgrepo-com.svg'
// import search from'../../img/search-folder-svgrepo-com.svg'
// import cart from'../../img/cart-check-fill-svgrepo-com.svg'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton } from '@mui/material';
import { useState } from 'react';


const Header = () => {
    console.log('Header Re-renderring');
    const[isSearch, setIsSearch] = useState(false);
  return (
    <header className=" fixed top-0 left-0 z-[100] w-full py-3 px-2 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
       {/* header left  */}
       <div className='flex items-center'>
        <IconButton sx={{color:"#4b19ee"}}>
        <MenuIcon sx={{
                color:"#4b19ee"
            }}/>
        </IconButton>
            
            <h1  style={{
                    display :
                    window.innerWidth < 640
                    ? isSearch
                    ? "none"
                    : "inline-block"
                    : "inline-block",
                 }} className=" ml-2 text-sm font-bold">Udesh<span className=" text-[#4b19ee]" >DEV </span>
            </h1>
            <div  style={{
                    backgroundColor :
                    window.innerWidth < 640
                    ? isSearch
                    ? "#5262f4"
                    :"inherit"
                    :'#5262f4',
                 }} className=" overflow-hidden ml-2 flex items-center rounded-full bg-[#5262f4]">
                <input type="text"
                 placeholder="Search"
                 style={{
                    display :
                    window.innerWidth < 640
                    ? isSearch
                    ? "inline-block"
                    :"none"
                    :"inline-block",
                    transition: "all 400ms ease-in-out",
                 }}
                 className=" hidden sm:inline-block ml-1  p-2 outline-none font-semibold text-sm w-[200px] bg-inherit"/>
                <IconButton onClick={()=>{
                    if(window.innerWidth<640){
                        setIsSearch(!isSearch)
                    }
                }}>
                    {<SearchIcon  sx={{color: window.innerWidth < 640
                    ? isSearch
                    ? "rgb(156 163 178)"
                    :"inherit"
                    :"rgb(156 163 178)",
                }}
                     className="text-gray-500  "/> }
                </IconButton>
            </div>
        </div>
       
       {/* hedar right  */}
      <IconButton>
            <ShoppingCartOutlinedIcon/>
      </IconButton> 
    </header>
  );
}

export default Header;
// search-folder-svgrepo-com.svg
// menu-hamburger-svgrepo-com.svg
// cart-check-fill-svgrepo-com.svg