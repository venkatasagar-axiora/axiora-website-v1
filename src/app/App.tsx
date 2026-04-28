import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
// import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export default function App() {
  return <RouterProvider router={router as any} />;
  <ToastContainer position="top-right" autoClose={3000} />

}
