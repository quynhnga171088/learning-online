import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedPage.scss';

interface PriorityStory {
  id: number;
  tag: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  views?: string;
  type: 'main' | 'side' | 'bottom';
}

const priorityStories: PriorityStory[] = [
  {
    id: 1,
    tag: 'Kinh tế số',
    title: 'Sự trỗi dậy của AI trong các chuỗi cung ứng khu vực Đông Nam Á',
    excerpt:
      'Các tập đoàn công nghệ lớn đang đổ hàng tỷ USD vào hạ tầng dữ liệu tại Việt Nam và Thái Lan, mở ra một kỷ nguyên mới cho tự động hóa và tối ưu hóa vận hành kinh doanh xuyên biên giới.',
    author: 'Minh Triết',
    date: 'Tháng 5, 2024',
    type: 'main'
  },
  {
    id: 2,
    tag: 'Góc nhìn chuyên gia',
    title: 'Web3 và tương lai của thanh toán phi tập trung',
    excerpt:
      'Liệu Blockchain có thực sự thay thế được hệ thống ngân hàng truyền thống trong 5 năm tới?',
    author: '',
    date: '',
    type: 'side'
  },
  {
    id: 3,
    tag: 'Khởi nghiệp',
    title: 'Hành trình gọi vốn 50 triệu USD của TechVina',
    excerpt:
      'Câu chuyện đằng sau những vòng đàm phán căng thẳng tại thung lũng Silicon.',
    author: '',
    date: '',
    views: '12.5k views',
    type: 'side'
  }
];

const bottomArticles = [
  {
    id: 4,
    tag: 'Kỹ thuật',
    title: 'Làm thế nào để tối ưu hóa hiệu năng vi xử lý thế hệ mới?'
  },
  {
    id: 5,
    tag: 'Tài chính',
    title: 'Thị trường tài sản số: Những rủi ro cần nhận diện trong năm 2024'
  },
  {
    id: 6,
    tag: 'Phân tích',
    title: 'Dữ liệu lớn và bài toán cá nhân hóa trải nghiệm người dùng'
  }
];

const FeaturedPage = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="fp-page">
      {/* ── Hero ── */}
      <section className="fp-hero">
        <div className="fp-inner">
          <div className="fp-hero__label">Editorial Focus</div>
          <div className="fp-hero__meta">
            <span className="material-icons-round">person</span>
            Nguyễn Thành Nam
            <span className="fp-hero__sep">•</span>
            <span className="material-icons-round">schedule</span>
            12 Phút đọc
          </div>
          <h1 className="fp-hero__title">
            Tương lai của công nghệ và cơ hội kinh doanh online
          </h1>
        </div>
      </section>

      {/* ── Main content ── */}
      <div className="fp-inner fp-content">
        {/* Priority Stories */}
        <section className="fp-priority">
          <div className="fp-section-header">
            <span className="fp-section-title">Priority Stories</span>
            <Link to="/articles" className="fp-view-all">
              Xem tất cả <span className="material-icons-round">arrow_forward</span>
            </Link>
          </div>

          <div className="fp-priority__grid">
            {/* Main story */}
            {priorityStories[0] && (
              <article className="fp-priority__main">
                <div className="fp-priority__main-img" />
                <div className="fp-priority__main-body">
                  <span className="fp-tag">{priorityStories[0].tag}</span>
                  <h2 className="fp-priority__main-title">{priorityStories[0].title}</h2>
                  <p className="fp-priority__main-excerpt">{priorityStories[0].excerpt}</p>
                  <div className="fp-priority__main-meta">
                    <span>{priorityStories[0].author}</span>
                    <span>{priorityStories[0].date}</span>
                  </div>
                </div>
              </article>
            )}

            {/* Side stories */}
            <div className="fp-priority__side">
              {priorityStories.slice(1).map(story => (
                <article key={story.id} className="fp-priority__side-item">
                  <span className="fp-tag">{story.tag}</span>
                  <h3 className="fp-priority__side-title">{story.title}</h3>
                  <p className="fp-priority__side-excerpt">{story.excerpt}</p>
                  {story.views && (
                    <span className="fp-priority__views">
                      <span className="material-icons-round">visibility</span>
                      {story.views}
                    </span>
                  )}
                  <Link to="/articles/1" className="fp-read-link">
                    Đọc bài viết <span className="material-icons-round">arrow_right_alt</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="fp-newsletter">
          <h2 className="fp-newsletter__title">Nhận bản tin công nghệ hàng tuần</h2>
          <p className="fp-newsletter__desc">
            Đăng ký để không bỏ lỡ những phân tích sâu sắc nhất về thị trường công nghệ Việt Nam và thế giới.
          </p>
          {subscribed ? (
            <div className="fp-newsletter__success">
              <span className="material-icons-round">check_circle</span>
              Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên lạc sớm.
            </div>
          ) : (
            <form className="fp-newsletter__form" onSubmit={handleSubscribe}>
              <input
                type="email"
                className="fp-newsletter__input"
                placeholder="Nhập email của bạn..."
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="fp-newsletter__btn">Đăng ký ngay</button>
            </form>
          )}
        </section>

        {/* Bottom articles */}
        <section className="fp-bottom">
          <div className="fp-bottom__grid">
            {bottomArticles.map(art => (
              <Link key={art.id} to="/articles/1" className="fp-bottom__item">
                <span className="fp-tag">{art.tag}</span>
                <h3 className="fp-bottom__title">{art.title}</h3>
                <span className="material-icons-round fp-bottom__arrow">arrow_forward</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturedPage;
