

const Category = () => {
  return (
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
        <div style={{
        boxShadow:"rgba(30, 8, 108, 0.24) 0px 3px 8px",
    }} className="w-full p-2 grid grid-cols-3 grid-flow-row-[auto] gap-5 ">
        <CategoryItems/>
        <CategoryItems/>
        <CategoryItems/>
        <CategoryItems/>
        <CategoryItems/>
        <CategoryItems/>

        </div>
        
        Category
    </div>
  );
};

const CategoryItems = ()=><div className="w-full rounded-md border -2 border-pink-600 flex flex-col items-center">
    <img src="https://wallpapers.com/images/featured/autumn-kquin5jg1dtbyxgc.jpg" alt="categoryitem"/>
    <h2>Category</h2>

</div>

export default Category;