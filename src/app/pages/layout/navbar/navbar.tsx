import { NavLink } from 'react-router-dom';
import 'app/pages/layout/navbar/navbar.scss';

const navbarMenu = [
  { to: '/', icon: 'home', label: 'Trang chủ' },
  { to: '/articles', icon: 'auto_stories', label: 'Bài viết' },
  { to: '/featured', icon: 'star', label: 'Nổi bật' },
  { to: '/test', icon: 'edit_note', label: 'Test' },
  { to: '/about', icon: 'handshake', label: 'Giới thiệu' },
  { to: '/author', icon: 'cruelty_free', label: 'Tác giả' }
];

const Navbar = () => {
  return (
    <div className="site-navbar">
      <nav className="navbar">
        <div className="navbar-brand">
          <img
            src="/logo/avatar_cream.svg"
            alt="Nguyễn Thị Quỳnh Nga — Business Analyst"
            style={{ height: '60px', objectFit: 'cover', objectPosition: 'top center' }}
          />
        </div>
        <ul className="navbar-nav">
          {navbarMenu.map(({ to, icon, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                <span className="nav-icon material-icons-round material-symbols-outlined">{icon}</span>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
