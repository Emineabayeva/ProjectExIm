import ROUTES from "./Routes/Routes"
import MainContext from "./context/Context";
import { createBrowserRouter,RouterProvider } from "react-router-dom";


import './App.css'

function App() {
  const router = createBrowserRouter(ROUTES) 
  const contextData={

  }
  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router}/>
     </MainContext.Provider>
   

  );
}

export default App;
