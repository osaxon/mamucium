import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='bg-dark'>
      <section className='flex min-h-screen flex-col'>
        <Nav />
        {children}
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
