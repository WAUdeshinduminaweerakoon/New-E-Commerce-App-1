//import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import {  RouterProvider,  createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import User from "../Pages/User/User";
import Login from "../Pages/Login/Login";
import UserProtected from "./UserProtected";
import Category from "../Pages/Category/Category";
import CategoryItems from "../Pages/CategoryItems/CategoryItems";
import ItemPage from "../Pages/ItemPage/ItemPage";


const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout/>,
        children : [
            {
                index : true,
                element:<Home/>,
            },
            {
                path : "category",
                children: [
                    {
                        index: true,
                        element:<Category/>,
                    },
                    {
                        path:':categoryId',
                        children:[
                            {
                                index:true,
                                element:<CategoryItems/>
                            },
                            {
                                path:':itemId',
                                element:<ItemPage/>
                            }
                        ]
                    
                    },
                ],
            },
            {
                element : <UserProtected/>,
                children:[
                    {
                        path:'user',
                        element : <User/>,

                    },
                ],
            },
        ],
    },
    {
        path:"/profile",
        element:<Login/>,
    },
    {
        path : "/category",
                element:<Category/>,
    },

]);

const AppRouter = () => {
    return <RouterProvider router  ={router}/>;
};



// const AppRouter = () => {
//   return (
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<MainLayout/>}> 
//                 <Route index element={<Home/>}/>
//                 <Route element={<UserProtected/>}>
//                     <Route path= "user" element={<User/>}/>
//                 </Route>
//             </Route>
//             <Route path="/login"element={<Login/>}/>
//         </Routes>
//     </BrowserRouter>
//   );
// };

export default AppRouter;