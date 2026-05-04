import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ArticlesPage.scss';

interface Article {
  id: number;
  tag: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

const categories = ['Tất cả', 'Công nghệ', 'Trí tuệ nhân tạo', 'Khởi nghiệp', 'Phần mềm', 'Đời sống số', 'Bảo mật'];

const articles: Article[] = [
  {
    id: 1,
    tag: 'CÔNG NGHỆ',
    category: 'Công nghệ',
    title: '10 công cụ tăng năng suất tốt nhất năm 2026',
    excerpt:
      'Khám phá những bước tiến mới nhất trong việc tối ưu hóa quy trình làm việc với sự hỗ trợ của các trợ lý AI và công cụ cộng tác thế hệ mới.',
    author: 'Anh Tuấn',
    date: '12/05/2026'
  },
  {
    id: 2,
    tag: 'KHỞI NGHIỆP',
    category: 'Khởi nghiệp',
    title: 'Startup Việt Nam nên bắt đầu với AI như thế nào',
    excerpt:
      'Lời khuyên từ các chuyên gia hàng đầu về lộ trình tích hợp trí tuệ nhân tạo cho các doanh nghiệp trẻ tại thị trường Việt Nam hiện nay.',
    author: 'Minh Hạnh',
    date: '10/05/2026'
  },
  {
    id: 3,
    tag: 'BẢO MẬT',
    category: 'Bảo mật',
    title: 'Xu hướng an ninh mạng trong kỷ nguyên lượng tử',
    excerpt:
      'Làm thế nào để bảo vệ dữ liệu trước sức mạnh tính toán vượt trội của máy tính lượng tử trong tương lai gần.',
    author: 'Quốc Bảo',
    date: '08/05/2026'
  },
  {
    id: 4,
    tag: 'TRÍ TUỆ NHÂN TẠO',
    category: 'Trí tuệ nhân tạo',
    title: 'Cách AI đang thay đổi công việc văn phòng',
    excerpt:
      'Từ việc soạn thảo email đến phân tích dữ liệu phức tạp, trí tuệ nhân tạo đang định nghĩa lại năng suất lao động trong kỷ nguyên số.',
    author: 'Minh Nguyễn',
    date: '05/05/2026'
  },
  {
    id: 5,
    tag: 'PHẦN MỀM',
    category: 'Phần mềm',
    title: 'Tại sao SaaS đang trở nên khó khăn hơn?',
    excerpt:
      'Thị trường bão hòa và sự thay đổi trong hành vi người dùng đang buộc các công ty phần mềm phải chuyển mình.',
    author: 'Thanh Bình',
    date: '03/05/2026'
  },
  {
    id: 6,
    tag: 'ĐỜI SỐNG SỐ',
    category: 'Đời sống số',
    title: 'Xây dựng hệ thống Second Brain hiệu quả',
    excerpt:
      'Khám phá cách quản lý kiến thức cá nhân để không bao giờ bỏ lỡ một ý tưởng sáng tạo nào trong cuộc sống bận rộn.',
    author: 'Lan Anh',
    date: '01/05/2026'
  }
];

const ArticlesPage = () => {
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  const filtered =
    activeCategory === 'Tất cả'
      ? articles
      : articles.filter(a => a.category === activeCategory || a.tag.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className="ap-page">
      <div className="ap-inner">
        {/* ── Filter tabs ── */}
        <div className="ap-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`ap-filter-btn${activeCategory === cat ? ' ap-filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Article list ── */}
        <div className="ap-list">
          {filtered.map(article => (
            <article key={article.id} className="ap-card">
              <div className="ap-card__body">
                <span className="ap-card__tag">{article.tag}</span>
                <h2 className="ap-card__title">
                  <Link to={`/articles/${article.id}`}>{article.title}</Link>
                </h2>
                <p className="ap-card__excerpt">{article.excerpt}</p>
                <div className="ap-card__meta">
                  <span>{article.author}</span>
                  <span className="ap-card__sep">•</span>
                  <span>{article.date}</span>
                </div>
              </div>
              <div className="ap-card__action">
                <Link to={`/articles/${article.id}`} className="ap-card__arrow">
                  <span className="material-icons-round">arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}

          {filtered.length === 0 && (
            <div className="ap-empty">
              <span className="material-icons-round">search_off</span>
              <p>Không có bài viết nào trong chuyên mục này.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
