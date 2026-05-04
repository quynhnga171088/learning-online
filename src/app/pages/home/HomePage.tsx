import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';

const featuredArticles = [
  {
    id: 4,
    tag: 'AI & Tự động hóa',
    title: 'Cách AI đang thay đổi công việc văn phòng',
    excerpt:
      'Từ việc soạn thảo email đến phân tích dữ liệu phức tạp, trí tuệ nhân tạo đang định nghĩa lại năng suất lao động trong kỷ nguyên số.',
    imgClass: 'hp-card__img--ai'
  },
  {
    id: 6,
    tag: 'Năng suất',
    title: 'Xây dựng hệ thống Second Brain hiệu quả',
    excerpt:
      'Khám phá cách quản lý kiến thức cá nhân để không bao giờ bỏ lỡ một ý tưởng sáng tạo nào trong cuộc sống bận rộn.',
    imgClass: 'hp-card__img--productivity'
  },
  {
    id: 2,
    tag: 'Khởi nghiệp',
    title: 'Tìm kiếm Product-Market Fit năm 2024',
    excerpt:
      'Những bài học thực tế từ các startup thành công tại Đông Nam Á trong việc thích nghi với thị trường biến động.',
    imgClass: 'hp-card__img--startup'
  }
];

const categories = [
  { icon: 'psychology',     label: 'Trí tuệ nhân tạo (AI)', desc: 'Cập nhật những xu hướng, công cụ và tác động của AI đối với cuộc sống và công việc hàng ngày.', featured: true },
  { icon: 'rocket_launch',  label: 'Khởi nghiệp',   desc: '', featured: false },
  { icon: 'speed',          label: 'Năng suất',      desc: '', featured: false },
  { icon: 'handyman',       label: 'Công cụ số',     desc: '', featured: false },
  { icon: 'terminal',       label: 'Công nghệ',      desc: '', featured: false }
];

const latestPosts = [
  { id: 1, date: '12 Tháng 10, 2024', title: 'Đánh giá chi tiết bộ xử lý mới từ Apple M4',              excerpt: 'Sức mạnh xử lý vượt trội và khả năng tiết kiệm điện năng ấn tượng cho các dòng iPad Pro mới nhất.' },
  { id: 2, date: '10 Tháng 10, 2024', title: 'Tại sao SaaS đang trở nên khó khăn hơn?',                excerpt: 'Thị trường bão hòa và sự thay đổi trong hành vi người dùng đang buộc các công ty phần mềm phải chuyển mình.' },
  { id: 3, date: '08 Tháng 10, 2024', title: 'Tương lai của làm việc từ xa tại Việt Nam',              excerpt: 'Những thống kê mới nhất về mô hình hybrid và xu hướng chuyển dịch văn phòng ra khỏi trung tâm thành phố.' }
];

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSubscribed(true); setEmail(''); }
  };

  return (
    <div className="hp-page">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="hp-wrap hp-hero-wrap">
        <div className="hp-hero">
          {/* Background image */}
          <img
            className="hp-hero__bg"
            src="/images/background_home_title.jpg"
            alt=""
          />

          <div className="hp-hero__grid">
            {/* Left — Author card */}
            <div className="hp-hero__author">
              <div className="hp-hero__avatar">
                <img src="/logo/avatar_cream.svg" alt="Minh Nguyễn" />
              </div>
              <p className="hp-hero__role">Editor-in-Chief</p>
              <h2 className="hp-hero__name">Minh Nguyễn</h2>
              <p className="hp-hero__bio">
                Kỹ sư phần mềm và nhà quan sát công nghệ với hơn 10 năm kinh nghiệm tại Thung lũng Silicon. Đam mê chia sẻ kiến thức về AI và văn hóa khởi nghiệp.
              </p>
            </div>

            {/* Right — Headline */}
            <div className="hp-hero__headline-col">
              <h1 className="hp-hero__headline">
                Khám phá <span className="hp-hero__accent">Tương lai</span> Công nghệ &amp; Tư duy <em className="hp-hero__italic">Khởi nghiệp</em>
              </h1>
              <div className="hp-hero__actions">
                <Link to="/articles" className="hp-btn-primary">Đọc ngay</Link>
                <Link to="/about" className="hp-btn-secondary">Tư vấn startup</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Articles ─────────────────────────────────────────────── */}
      <section className="hp-wrap hp-featured-wrap">
        <div className="hp-section-header">
          <h3 className="hp-section-heading">Bài viết Tiêu điểm</h3>
          <Link to="/articles" className="hp-view-all">
            Xem tất cả <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        <div className="hp-cards-grid">
          {featuredArticles.map(article => (
            <article key={article.id} className="hp-card">
              <Link to={`/articles/${article.id}`} className="hp-card__img-wrap">
                <div className={`hp-card__img ${article.imgClass}`} />
              </Link>
              <span className="hp-card__tag">{article.tag}</span>
              <h4 className="hp-card__title">
                <Link to={`/articles/${article.id}`}>{article.title}</Link>
              </h4>
              <p className="hp-card__excerpt">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Categories Bento Grid ─────────────────────────────────────────── */}
      <section className="hp-categories-section">
        <div className="hp-wrap">
          <h3 className="hp-categories-title">Chuyên mục Phổ biến</h3>
          <div className="hp-bento">
            {/* Large featured card */}
            <Link to="/articles" className="hp-bento__featured">
              <div>
                <div className="hp-bento__icon-box">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <h5 className="hp-bento__featured-title">{categories[0]?.label}</h5>
                <p className="hp-bento__featured-desc">{categories[0]?.desc}</p>
              </div>
              <span className="hp-bento__featured-cta">
                Khám phá ngay <span className="material-symbols-outlined">east</span>
              </span>
            </Link>

            {/* Small cards */}
            {categories.slice(1).map(cat => (
              <Link key={cat.label} to="/articles" className="hp-bento__small">
                <span className="material-symbols-outlined hp-bento__small-icon">{cat.icon}</span>
                <h6 className="hp-bento__small-label">{cat.label}</h6>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Posts ──────────────────────────────────────────────────── */}
      <section className="hp-wrap hp-latest-wrap">
        <h3 className="hp-section-heading">Mới cập nhật</h3>
        <div className="hp-latest-grid">
          {latestPosts.map(post => (
            <div key={post.id} className="hp-latest-item">
              <p className="hp-latest-item__date">{post.date}</p>
              <h5 className="hp-latest-item__title">{post.title}</h5>
              <p className="hp-latest-item__excerpt">{post.excerpt}</p>
              <Link to={`/articles/${post.id}`} className="hp-latest-item__link">
                Đọc tiếp <span className="material-symbols-outlined">open_in_new</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Newsletter ────────────────────────────────────────────────────── */}
      <section className="hp-wrap hp-nl-wrap">
        <div className="hp-nl">
          <div className="hp-nl__bg-icon">
            <span className="material-symbols-outlined">mail</span>
          </div>

          <div className="hp-nl__left">
            <h3 className="hp-nl__title">Nhận bản tin TechJournal</h3>
            <p className="hp-nl__desc">
              Tham gia cùng <strong>50,000+</strong> độc giả nhận những phân tích công nghệ sâu sắc nhất mỗi sáng thứ Hai hàng tuần.
            </p>
          </div>

          <div className="hp-nl__right">
            {subscribed ? (
              <div className="hp-nl__success">
                <span className="material-symbols-outlined">check_circle</span>
                Cảm ơn bạn đã đăng ký!
              </div>
            ) : (
              <form className="hp-nl__form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  className="hp-nl__input"
                  placeholder="Email của bạn..."
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="hp-nl__btn">Đăng ký</button>
              </form>
            )}
            <p className="hp-nl__note">Chúng tôi cam kết không spam. Bạn có thể hủy đăng ký bất cứ lúc nào.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
