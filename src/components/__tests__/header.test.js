import { render, screen } from "@testing-library/react";
import Header from "../Header";
import {BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../utilies/Store";
import '@testing-library/jest-dom';


test("should load header component",()=>{

   

    render(
         <BrowserRouter>
        <Provider store={store}>

        <Header/>
      </Provider>
      </BrowserRouter>
      )

    const button = screen.getByText('Home')

    expect(button).toBeInTheDocument()
})