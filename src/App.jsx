import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import router fuctions
import {createBrowserRouter, RouterProvider} from "react-router-dom";
//import components
import Layout from "./components/layout/Layout";
import Enunciado2 from "./components/Enuciado2/Enunciado";
import Enunciados from "./components/layout/Enunciados/Enunciados";
//Import state
import LayoutState from "./context/LayoutState";
import Enunciado3 from "./components/Enunciado3/Enunciado3";
import Enunciado4 from "./components/Enunciado4/Enunciado4";
function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Enunciados />,
      errorElement: "Error",
    },
    {
      path: "/enunciado2",
      element: <Enunciado2 />,
      errorElement: "Error",
    },
    {
      path: "/enunciado3",
      element: <Enunciado3 />,
      errorElement: "Error",
    },
    {
      path: "/enunciado4",
      element: <Enunciado4 />,
      errorElement: "Error",
    },
  ]);
  return (
    <>
      <LayoutState>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </LayoutState>
    </>
  );
}

export default App;
