import { Outlet } from "react-router-dom";

import Header from "./Header/Header.tsx";
import Footer from "./Footer/Footer.tsx";

const Layout = () => {
  return (
    <div id="site-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
