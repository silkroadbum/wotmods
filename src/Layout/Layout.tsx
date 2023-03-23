import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import './Layout.scss';

type LayoutProps = {
  children?: JSX.Element;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
