import menu from'../../img/menu-hamburger-svgrepo-com.svg'
import search from'../../img/search-folder-svgrepo-com.svg'
import cart from'../../img/cart-check-fill-svgrepo-com.svg'


const Header = () => {
  return (
    <header>
       {/* header left  */}
       <div>
            <img src={menu} alt='menu'/>
            <h1>Udesh<span>DEV</span></h1>
            <div>
                <input type="text" placeholder="Search"/>
                <img src={search} alt='search'/>
            </div>
        </div>
       
       {/* hedar right  */}
       <img src={cart} alt='cart'/>
    </header>
  );
}

export default Header;
// search-folder-svgrepo-com.svg
// menu-hamburger-svgrepo-com.svg
// cart-check-fill-svgrepo-com.svg