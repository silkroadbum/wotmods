import './Footer.scss';
import SocialList from '../SocialList/SocialList';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <div className="container container--footer">
        <p className="copyright">Анатолий Егоров &copy; {year}</p>
        <SocialList />
      </div>
    </footer>
  );
}

export default Footer;
