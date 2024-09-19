import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/shared/Navbar";

import Inbox from "./Components/Inbox";
import Mail from "./Components/Mail";
import Body from "./Components/Body";
import SendMail from "./Components/SendMail";
import Login from "./Components/Login";
import { useSelector } from "react-redux";
// import { div } from "framer-motion/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
]);
function App() {
  const { user } = useSelector((store) => store.appSlice);
  return (
    <div>
      <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
        {!user ? (
          <Login />
        ) : (
          <>
            <Navbar />
            <RouterProvider router={router} />
            <div className="absolute w-[30%] bottom-0 right-20 z-10">
              <SendMail />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
