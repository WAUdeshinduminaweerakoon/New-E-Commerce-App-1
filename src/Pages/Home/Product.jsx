import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Grid, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { IconButton } from "@mui/material";





    const productArr = [
        {
        imageUrl:"https://wallpapers.com/images/featured/autumn-kquin5jg1dtbyxgc.jpg" ,price : "200",productTitle:"product title 1"
    },
        {
        imageUrl:"https://w0.peakpx.com/wallpaper/265/481/HD-wallpaper-nature.jpg" ,price : "300",productTitle:"product title 2"
    },
        {
        imageUrl:"https://wallpapers.com/images/featured/autumn-kquin5jg1dtbyxgc.jpg" ,price : "200",productTitle:"product title 1"
    },
        {
        imageUrl:"https://w0.peakpx.com/wallpaper/265/481/HD-wallpaper-nature.jpg" ,price : "300",productTitle:"product title 2"
    },
        {
        imageUrl:"https://wallpapers.com/images/featured/autumn-kquin5jg1dtbyxgc.jpg" ,price : "200",productTitle:"product title 1"
    },
        {
        imageUrl:"https://w0.peakpx.com/wallpaper/265/481/HD-wallpaper-nature.jpg" ,price : "300",productTitle:"product title 2"
    },
        {
        imageUrl:"https://wallpapers.com/images/featured/autumn-kquin5jg1dtbyxgc.jpg" ,price : "200",productTitle:"product title 1"
    },
        {
        imageUrl:"https://w0.peakpx.com/wallpaper/265/481/HD-wallpaper-nature.jpg" ,price : "300",productTitle:"product title 2"
    },
        {
        imageUrl:"https://wallpapers.com/images/featured/autumn-kquin5jg1dtbyxgc.jpg" ,price : "200",productTitle:"product title 1"
    },
        {
        imageUrl:"https://w0.peakpx.com/wallpaper/265/481/HD-wallpaper-nature.jpg" ,price : "300",productTitle:"product title 2"
    },

];


const Product = ({title,rowsCount,slidesPerView}) => {
  return (
    <section className="w-full mt-6">
        <h1 className="text-lg font-bold mb-3">{title}</h1>
        <Swiper
        slidesPerView={Number(slidesPerView)}
        grid={{
          rows: Number(rowsCount),
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
       
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
    }}>
        <div className="w-full">
            <img src={imageUrl} alt={`product_unit_${id}`} className="w-full object-contain" />
            <h3 className="text-sm font-semibold text-stone-900">{productTitle}</h3>
            <h3 className="text-stone-900 font-bold text-lg">Rs. {price} /=</h3>

        </div>
    </IconButton>
)