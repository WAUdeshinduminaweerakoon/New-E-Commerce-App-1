

const Category = () => {
  return (
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
        <div style={{
        boxShadow:"rgba(30, 8, 108, 0.24) 0px 3px 8px",
    }} className="w-full p-2 grid grid-cols-3 grid-rows-[auto] gap-5">
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
    </div>
  );
};

export default Category;

const CategoryItems = ()=> <div className="w-full rounded-md  border-2 border-pink-800 flex flex-col items-center" >
    <img src="https://wallpapers.com/images/featured/autumn-kquin5jg1dtbyxgc.jpg" alt="category item"/>
    <h2>Catergory Name</h2>
</div>