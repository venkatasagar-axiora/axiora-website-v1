import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { Services } from "./components/pages/Services";
import { Products } from "./components/pages/Products";
import { Career } from "./components/pages/Careers";
import { ContactUs } from "./components/pages/ContactUs";
import AboutUS from "./components/pages/AboutUS";
import { ProductDetails } from "./components/pages/ProductDetails";
import Sales from "./components/productsAi/Sales";
import Aiinterviewer from "./components/productsAi/Aiinterviewer";
import PayWithEasy from "./components/productsAi/PayWithEasy";
import UdyogaaAI from "./components/productsAi/Udyogaaai";
import UpadiAI from "./components/productsAi/UpadiAi";
import AIPersonal from "./components/productsAi/AIPersonal";
import HologramAI from "./components/productsAi/Hologramai";
import ImagineAI from "./components/productsAi/ImagineAI";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "products", Component: Products },
      // { path: "products/:id", Component: ProductDetails },
      { path: "products/sales-crm", Component: Sales },
      { path: "products/autonomous-hiring", Component: Aiinterviewer },
      { path: "products/paywithease", Component: PayWithEasy },
      { path: "products/udyogaa-ai", Component: UdyogaaAI },
      { path: "products/upadi-ai", Component: UpadiAI },
      { path: "products/ai-personal-assistant", Component: AIPersonal },
      { path: "products/hologram-ai", Component: HologramAI },
      { path: "products/imagine-ai", Component: ImagineAI },
      { path: "career", Component: Career },
      { path: "contact-us", Component: ContactUs },
      { path: "about-us", Component: AboutUS },
    ],
  },
]);
