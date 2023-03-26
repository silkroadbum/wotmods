import './Footer.scss';
import SocialList from '../SocialList/SocialList';
import NavList from '../NavList/NavList';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <div className="container container--footer">
        {/* <NavList /> */}
        <p className="copyright">Анатолий Егоров &copy; {year}</p>
        <SocialList />
      </div>
    </footer>
  );
}

export default Footer;
