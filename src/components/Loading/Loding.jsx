import style from "./Loading.module.css";
const Loding = () => {
  return (
    <div className=" relative top-0 left-0 w-screen h-screen flex flex-col items-center gap-2  justify-center bg-white z-[101]">
        <div className={style.loading_dots}></div>
         Loding</div>


  );
};

export default Loding;