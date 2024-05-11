import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Shared/Footer';
import Navbar from '../../Components/Shared/Navbar';

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
