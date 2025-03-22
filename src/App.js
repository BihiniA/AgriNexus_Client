import "./App.css";
import CreatePlant from "./components/plant/createPlant"; 
import GetPlant from "./components/plant/getPlant";  
import UpdatePlant from "./components/plant/updatePlant";  
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",  
      element: <CreatePlant />,  
    },
    {
      path: "/getplant",
      element: <GetPlant />,  
    },
    {
      path: "/updateplant",
      element: <UpdatePlant />,  
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
