import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <main>
      <section className='bg-dark flex flex-col min-h-screen'>
        <Nav />
        {children}
        <Footer />
      </section>
    </main>
  );
};

export default Layout;
