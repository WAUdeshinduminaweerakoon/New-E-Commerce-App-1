import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Grid, Pagination,Mousewheel, Keyboard } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { IconButton,Rating } from "@mui/material";
import './style.css'





    const productArr = [
        {
        imageUrl:"https://wallpapers.com/images/featured/autumn-kquin5jg1dtbyxgc.jpg" ,price : "200",productTitle:"product title 1"
    },
        {
        imageUrl:"https://w0.peakpx.com/wallpaper/265/481/HD-wallpaper-nature.jpg" ,price : "300",productTitle:"product title 2"
    },
        {
        imageUrl:"https://wallpapers.com/images/featured/autumn-kquin5jg1dtbyxgc.jpg" ,price : "200",productTitle:"product title 3"
    },
        {
        imageUrl:"https://w0.peakpx.com/wallpaper/265/481/HD-wallpaper-nature.jpg" ,price : "300",productTitle:"product title 4"
    },
        {
        imageUrl:"https://wallpapers.com/images/featured/autumn-kquin5jg1dtbyxgc.jpg" ,price : "200",productTitle:"product title 5"
    },
        {
        imageUrl:"https://w0.peakpx.com/wallpaper/265/481/HD-wallpaper-nature.jpg" ,price : "300",productTitle:"product title 6"
    },
        {
        imageUrl:"https://wallpapers.com/images/featured/autumn-kquin5jg1dtbyxgc.jpg" ,price : "200",productTitle:"product title 7"
    },
        {
        imageUrl:"https://w0.peakpx.com/wallpaper/265/481/HD-wallpaper-nature.jpg" ,price : "300",productTitle:"product title 8"
    },
        {
        imageUrl:"https://wallpapers.com/images/featured/autumn-kquin5jg1dtbyxgc.jpg" ,price : "200",productTitle:"product title 9"
    },
        {
        imageUrl:"https://w0.peakpx.com/wallpaper/265/481/HD-wallpaper-nature.jpg" ,price : "300",productTitle:"product title 10"
    },

];


const Product = ({title,rowsCount,slidesPerView}) => {
  return (
    <section style={{
        boxShadow:"rgba(30, 8, 108, 0.24) 0px 3px 8px",
    }} className="w-full mt-6 p-2">
        <h1 className="text-lg font-bold mb-3 mt-2 ml-2 ">{title}</h1>
        <Swiper
        slidesPerView={3}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        pagination={{
           
           clickable: true,
        }}
        keyboard={true}
        mousewheel={true}
        modules={[Grid, Pagination,Mousewheel, Keyboard]}
       
      >
        {productArr.map(({imageUrl,price,productTitle},index)=>(
            <SwiperSlide key={index}>
                <ProductUnit 
                    imageUrl={imageUrl}
                    price={price}
                    productTitle={productTitle}
                    id={index}
                    
                />
            </SwiperSlide>
            )
        )}
        
     </Swiper>
    </section>
  );
};

export default Product;

const ProductUnit=({imageUrl,price,productTitle,id})=>(
    <IconButton sx={{
        padding:'4px',
        borderRadius:'5px',
        color:"#4b19ee",
        marginBottom :'40px',
    }}>
        <div className="w-full">
            <img src={imageUrl} alt={`product_unit_${id}`} className="w-full object-contain" />
            <h3 className="text-sm font-semibold text-stone-900">{productTitle}</h3>
            <Rating 
             name={imageUrl}
             value={3.3}
             precision={0.1}
             size="small"
             readOnly/>
            <h3 className="text-stone-900 font-bold text-lg">Rs. {price} /=</h3>

        </div>
    </IconButton>
)