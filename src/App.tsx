import { Outlet } from 'react-router-dom';

import './app.scss';
import Footer from 'app/pages/layout/footer';
import Navbar from 'app/pages/layout/navbar/navbar';


const App = () => {
  return (
    <div className="site">
      <Navbar />
      <div className="site-content g-margin-top-65">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;