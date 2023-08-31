import React from 'react';
import PdfEncoder from './components/pdfEncoder';
import PdfDecoder from './components/pdfDecoder';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {path: "/" , element: <PdfDecoder/>},
  {path: "/encode" , element: <PdfEncoder/>},
])

function App() {
  return (
    <div className="w-full h-[100vh] bg-dark ">
     <RouterProvider router={router}/>
    </div>


  );
}

export default App;
