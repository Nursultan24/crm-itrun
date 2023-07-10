import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {BrowserRouter} from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const theme = extendTheme({
    colors: {
        brand: {
            100: "#ffffff",
            // ...
            900: "#ffffff",
        },
    },
})
root.render(
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ChakraProvider>
);
