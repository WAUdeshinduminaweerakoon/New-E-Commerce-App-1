import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper";
// Import Swiper styles
import "swiper/css";

const adsElement=[
     {
        imageUrl:"https://wallpapers.com/images/featured/ztbad1qj8vdjqe0p.jpg"
     },
     {
        imageUrl:"https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301__340.jpg"
     },
     {
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/a/a2/1121098-pink-nature-wallpaper-1920x1080-lockscreen.jpg"
     },
     {
        imageUrl:"https://c4.wallpaperflare.com/wallpaper/388/726/456/laptop-backgrounds-nature-images-1920x1200-wallpaper-preview.jpg"
     },
     {
        imageUrl:"https://wallpapers.com/images/featured/autumn-kquin5jg1dtbyxgc.jpg"
     },


]



const Ads = () => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
       className="rounded-lg overflow-hidden"
      >
       {adsElement.map(({imageUrl},index)=>(
           <SwiperSlide key={index}>
               <AdUnit imageUrl={imageUrl} id={index}/>
           </SwiperSlide>
            ))} 

     
      </Swiper>
  )
}

export default Ads;

//https://wallpapers.com/images/featured/ztbad1qj8vdjqe0p.jpg
//https://upload.wikimedia.org/wikipedia/commons/a/a2/1121098-pink-nature-wallpaper-1920x1080-lockscreen.jpg
//https://wallpapers.com/images/featured/autumn-kquin5jg1dtbyxgc.jpg

const AdUnit = ({imageUrl,id})=>(

    <img 
    src = {imageUrl}
    alt={`ad${id}`}
    className="w-full ogject-contain rounded-lg"
    />

);