import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { ChatWindow } from "./pages/ChatWindow";




export const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:'',
        Component:ChatWindow
      }
    ]
  }
]);

