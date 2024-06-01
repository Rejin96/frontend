import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider , createBrowserRouter,Route,createRoutesFromElements} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import AuthProvider from './context/AuthContext';


// const router = createBrowserRouter([
//   {
//     path :"/",
//     element: <App/>,
//     children:[
//       {
//         path :"",
//         element: <Home/>
//       },
//       {
//         path: "login",
//         element: <LoginPage/>
//       },
//     ]
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home/>} />
      <Route path="login" element={<LoginPage />} />
      <Route path="product/:productid" element={<ProductDetail/>} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
