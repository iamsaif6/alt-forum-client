import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Shared/Navbar';
import Footer from '../../Components/Shared/Footer';

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
