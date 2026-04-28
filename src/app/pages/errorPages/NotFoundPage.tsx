import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        background: 'var(--background)',
        color: 'var(--on-surface)',
        fontFamily: 'var(--font-body)',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <span className="material-icons-round" style={{ fontSize: '5rem', color: 'var(--primary)', opacity: 0.6 }}>
          explore_off
        </span>
        <h1 style={{ fontSize: '6rem', fontWeight: 900, margin: 0, lineHeight: 1, color: 'var(--primary)' }}>
          404
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--on-surface-variant)', maxWidth: '420px' }}>
          Trang bạn tìm kiếm không tồn tại hoặc đã được di chuyển.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.75rem',
            background: 'var(--primary)',
            color: 'var(--on-primary)',
            borderRadius: '2rem',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.9375rem',
            transition: 'opacity 0.2s'
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          <span className="material-icons-round" style={{ fontSize: '1.1rem' }}>home</span>
          Về trang chủ
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
