import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import ResMenu from './components/ResMenu';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './utilies/Store';




const heading = React.createElement('h1',{},'Hello World 🔥');

const App =()=>{

    return (
        <div className='app '>
            <Provider store ={store}>
               
            <Header/>
            <Outlet/>
            <Footer/>
            </Provider>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
        path:'/',
        element:<Body/>
    },
   {
        path:'/about',
        element:<About/>
    },
    {
        path:'/contact',
        element:<Contact/>
    },
    {
        path:'/restaurant/:resid',
        element:<ResMenu/>
    },{

        path:'/Cart',
        element:<Cart/>
    }
        ],
        errorElement:<Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router}/>);

