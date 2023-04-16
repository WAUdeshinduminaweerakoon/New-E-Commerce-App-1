import { IconButton } from "@mui/material";


const Category = () => {
  return (
    
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
            <section
             style={{
            boxShadow:"rgba(30, 8, 108, 0.24) 0px 3px 8px",
        }} className="w-full p-2 ">
            <h1 className="text-lg font-bold mb-3 mt-2 ml-2 ">Main Categories</h1>
                    <div className="grid grid-cols-3 grid-flow-row-[auto] gap-5">

                    <CategoryItems/>
                    <CategoryItems/>
                    <CategoryItems/>
                    <CategoryItems/>
                    <CategoryItems/>
                    <CategoryItems/>
                    <CategoryItems/>
                    <CategoryItems/>
                    <CategoryItems/>
                    
                    </div>
            </section>
    </div>
   
  );
};

const CategoryItems = ()=>(
<IconButton sx={{
        color:'blue'
    }}>

<div className="w-full rounded-md border -2 border-pink-600 flex flex-col items-center">
    <img src="https://wallpapers.com/images/featured/autumn-kquin5jg1dtbyxgc.jpg" alt="categoryitem"/>
    <h2>Category Name </h2>
    

</div>
</IconButton>
);

export default Category;