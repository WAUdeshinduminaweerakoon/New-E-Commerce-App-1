import Ads from "./Ads";
import Product from "./Product";


const Home = () => {
  return (
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
        <Ads/>
        <Product title="Trending Products"/>
        <Product title="Electronic Items"/>
        <Product title="Laptop Items"/>
    </div>
  );
};

export default Home;