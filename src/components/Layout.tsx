import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div id="site-wrapper">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
