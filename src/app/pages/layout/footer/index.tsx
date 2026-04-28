import 'app/pages/layout/footer/footer.scss';

const Footer = () => {
  return (
    <div className="site-footer">
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">NGUYỄN THỊ QUỲNH NGA</div>
          <div className="footer-copy">© 2024 Professional Portfolio.</div>
          <div className="footer-links">
            <a href="https://linkedin.com/in/quynhngaba" title="LinkedIn" target="_blank" rel="noreferrer" className="material-icons-round">share</a>
            <a href="https://github.com" title="GitHub" target="_blank" rel="noreferrer" className="material-icons-round">code</a>
            <a href="mailto:nga.quynh@example.com" title="Email" className="material-icons-round">mail</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;