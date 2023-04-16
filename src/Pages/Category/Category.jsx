import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";


const categoryArr = [
    {
        imageUrl : 'https://wallpapers.com/images/featured/autumn-kquin5jg1dtbyxgc.jpg',
        title : 'Category Title 1',
        CategoryId:'category1'
    },
    {
        imageUrl : 'https://wallpapers.com/images/featured/autumn-kquin5jg1dtbyxgc.jpg',
        title : 'Category Title 2',
         CategoryId:'category2'
    },
    {
        imageUrl : 'https://wallpapers.com/images/featured/autumn-kquin5jg1dtbyxgc.jpg',
        title : 'Category Title 3',
         CategoryId:'category3'
    },
    {
        imageUrl : 'https://wallpapers.com/images/featured/autumn-kquin5jg1dtbyxgc.jpg',
        title : 'Category Title 4',
         CategoryId:'category4'
    },
    {
        imageUrl : 'https://wallpapers.com/images/featured/autumn-kquin5jg1dtbyxgc.jpg',
        title : 'Category Title 5',
         CategoryId:'category5'
    },
]


const Category = () => {
  return (
    
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
            <section
             style={{
            boxShadow:"rgba(30, 8, 108, 0.24) 0px 3px 8px",
        }} className="w-full p-2 ">
            <h1 className="text-lg font-bold mb-3 mt-2 ml-2 ">Main Categories</h1>
                    <div className="grid grid-cols-3 grid-flow-row-[auto] gap-5">
                        {categoryArr.map(({imageUrl,title,CategoryId},index)=><CategoryItems key= {index} imageUrl={imageUrl} title={title} CategoryId={CategoryId}/>)}

                    
                    </div>
            </section>
    </div>
   
  );
};

export default Category;

const CategoryItems = ({imageUrl,title,CategoryId})=>(
    <Link to={`/category/${CategoryId}`}>
<IconButton sx={{
        color:'gray',
        padding:'1px',
        borderRadius:"6px",
    }}>

<div
  style={{
    boxShadow:"rgba(30, 8, 108, 0.24) 0px 3px 8px",
}}
className="m-1 w-full py-6 px-3 mt-3 rounded-md  flex flex-col items-center">
    <img src={imageUrl} alt={title}
    className=" rounded-full w-[50px] h-[50px]"/>
    <h2 className=" text-[10px] text-black font-bold ">{title} </h2>
    

</div>
</IconButton></Link>
);
