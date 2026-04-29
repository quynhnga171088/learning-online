import 'app/pages/layout/navbar/navbar.scss';

const navbarMenu = [
  { id: 'home', icon: 'home', label: 'Trang chủ' },
  { id: 'article', icon: 'auto_stories', label: 'Bài viết' },
  { id: 'outstanding', icon: 'star', label: 'Nổi bật' },
  { id: 'Introduce', icon: 'handshake', label: 'Giới thiệu' },
  { id: 'author', icon: 'cruelty_free', label: 'Tác giả' }
];

const Navbar = () => {

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-navbar">
      <nav className={`navbar`}>
        <div className="navbar-brand">
          <img
            src="/logo/avatar_cream.svg"
            alt="Nguyễn Thị Quỳnh Nga — Business Analyst"
            style={{ height: '60px', objectFit: 'cover', objectPosition: 'top center' }}
          />
        </div>
        <ul className="navbar-nav">
          {navbarMenu.map(({ id, icon, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={e => { e.preventDefault(); scrollTo(id); }}
              >
                <span className="nav-icon material-icons-round material-symbols-outlined">{icon}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;