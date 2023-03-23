import Footer from '../Footer/Footer';
import Header from '../Header/Header';
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
