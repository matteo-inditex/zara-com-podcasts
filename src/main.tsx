import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import Routing from './Routing.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Routing />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
