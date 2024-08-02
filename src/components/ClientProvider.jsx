"use client"; // This tells Next.js that this component should be treated as a Client Component

import { Provider } from "react-redux";
import store from "@/redux/store";
import Navbar from "@/components/header/Navbar";
import Slider from "@/pages/ads/main-ads/Slider";

export default function ClientProvider({ children }) {
  return (
    <Provider store={store}>
      <Navbar />
      {/* <Slider /> */}
      {children}
    </Provider>
  );
}
