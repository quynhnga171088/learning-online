import { Link } from 'react-router-dom';
import './AboutPage.scss';

const stats = [
  { value: '500+', label: 'Bài phân tích' },
  { value: '15+', label: 'Đối tác quốc tế' },
  { value: '5', label: 'Giải thưởng báo chí' },
  { value: '100k', label: 'Subscriber' }
];

const timeline = [
  {
    period: '2023 - Nay',
    title: 'Top 10 Tech Media Vietnam',
    desc: 'Được bình chọn bởi Hiệp hội Truyền thông Kỹ thuật số cho những đóng góp trong việc phổ biến kiến thức AI và Blockchain.'
  },
  {
    period: '2020 - 2022',
    title: '1M+ Monthly Readers',
    desc: 'Cột mốc quan trọng khẳng định vị thế của TechJournal Việt trong lòng độc giả đam mê công nghệ tại Đông Nam Á.'
  }
];

const socials = [
  { icon: 'link', label: 'LinkedIn', href: '#' },
  { icon: 'alternate_email', label: 'X / Twitter', href: '#' },
  { icon: 'video_library', label: 'YouTube', href: '#' },
  { icon: 'rss_feed', label: 'Substack', href: '#' }
];

const coreValues = [
  {
    icon: 'auto_stories',
    title: 'Câu chuyện',
    desc: 'Khởi đầu từ một blog cá nhân vào năm 2018, TechJournal Việt đã nhanh chóng trở thành một trong những điểm đến tin cậy nhất cho những ai tìm kiếm chiều sâu trong các phân tích công nghệ. Chúng tôi nhìn thấu qua những lớp \'hype\' để tìm thấy giá trị thực sự.'
  },
  {
    icon: 'rocket_launch',
    title: 'Sứ mệnh',
    desc: 'Sứ mệnh của chúng tôi là dân chủ hóa thông tin công nghệ cao cấp, làm cho những khái niệm phức tạp trở nên dễ tiếp cận nhưng vẫn giữ nguyên vẹn sự tinh tế và chính xác của một tạp chí in truyền thống.'
  },
  {
    icon: 'verified',
    title: 'Giá trị',
    desc: 'Chính trực, Minh bạch và Thẩm mỹ. Mỗi bài viết là một tác phẩm được chăm chút về cả nội dung lẫn hình thức trình bày, đảm bảo một trải nghiệm đọc không bị xao nhãng.'
  }
];

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* ── Hero ── */}
      <section className="abt-hero">
        <div className="abt-inner">
          <div className="abt-hero__badge">
            <span className="abt-hero__badge-role">Founder &amp; Chief</span>
            <span className="abt-hero__badge-brand">TechJournal Việt</span>
          </div>
          <div className="abt-hero__label">Về tác giả</div>
          <h1 className="abt-hero__title">Dẫn dắt ngôn ngữ công nghệ tại Việt Nam.</h1>
          <blockquote className="abt-hero__quote">
            "Tại TechJournal Việt, chúng tôi không chỉ đưa tin về công nghệ; chúng tôi phân tích các tác động văn hóa và xã hội mà công nghệ mang lại cho tương lai người Việt."
          </blockquote>
          <div className="abt-hero__actions">
            <a href="#connect" className="abt-btn-primary">Kết nối ngay</a>
            <Link to="/articles" className="abt-btn-secondary">Xem bài viết</Link>
          </div>
        </div>
      </section>

      <div className="abt-inner">
        {/* ── Core values ── */}
        <section className="abt-values">
          {coreValues.map(v => (
            <div key={v.title} className="abt-value-card">
              <div className="abt-value-card__icon">
                <span className="material-icons-round">{v.icon}</span>
              </div>
              <h2 className="abt-value-card__title">{v.title}</h2>
              <p className="abt-value-card__desc">{v.desc}</p>
            </div>
          ))}
        </section>

        {/* ── Timeline ── */}
        <section className="abt-timeline">
          <div className="abt-section-label">Kinh nghiệm &amp; Thành tựu</div>
          <div className="abt-timeline__list">
            {timeline.map(item => (
              <div key={item.title} className="abt-timeline__item">
                <div className="abt-timeline__period">{item.period}</div>
                <div className="abt-timeline__body">
                  <h3 className="abt-timeline__title">{item.title}</h3>
                  <p className="abt-timeline__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="abt-stats">
          {stats.map(s => (
            <div key={s.label} className="abt-stat">
              <div className="abt-stat__value">{s.value}</div>
              <div className="abt-stat__label">{s.label}</div>
            </div>
          ))}
        </section>

        {/* ── Social ── */}
        <section className="abt-social" id="connect">
          <div className="abt-section-label">Mở rộng kết nối</div>
          <p className="abt-social__desc">
            Theo dõi chúng tôi trên các nền tảng mạng xã hội để cập nhật những phân tích mới nhất hàng ngày.
          </p>
          <div className="abt-social__grid">
            {socials.map(s => (
              <a key={s.label} href={s.href} className="abt-social__item">
                <span className="material-icons-round">{s.icon}</span>
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
