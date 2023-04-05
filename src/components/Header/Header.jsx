import menu from'../../img/menu-hamburger-svgrepo-com.svg'
import search from'../../img/search-folder-svgrepo-com.svg'
import cart from'../../img/cart-check-fill-svgrepo-com.svg'


const Header = () => {
  return (
    <header className=" fixed top-0 left-0 z-[100] w-full p-5 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
       {/* header left  */}
       <div className='flex items-center'>
            <img src={menu} alt='menu' className="w-6 h-6 object-contain cursor-pointer"/>
            <h1 className="ml-2 text-sm font-bold">Udesh<span className="ml-2 text-[#4b19ee]">DEV</span></h1>
            <div className=" overflow-hidden ml-2 flex items-center rounded-full bg-[#5262f4]">
                <input type="text" placeholder="Search" className="ml-1  p-2 outline-none font-semibold text-sm w-[200px] bg-inherit"/>
                <img src={search} alt='search'className="w-6 h-6 object-contain cursor-pointer mr-2"/>
            </div>
        </div>
       
       {/* hedar right  */}
       <img src={cart} alt='cart' className="w-6 h-6 object-contain cursor-pointer"/>
    </header>
  );
}

export default Header;
// search-folder-svgrepo-com.svg
// menu-hamburger-svgrepo-com.svg
// cart-check-fill-svgrepo-com.svg