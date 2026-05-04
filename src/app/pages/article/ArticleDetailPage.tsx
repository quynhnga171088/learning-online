import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ArticleDetailPage.scss';

interface Comment {
  id: number;
  author: string;
  time: string;
  content: string;
}

const articles: Record<
  string,
  {
    tag: string;
    category: string;
    title: string;
    author: string;
    authorBio: string;
    date: string;
    readTime: string;
    content: React.ReactNode;
  }
> = {
  '4': {
    tag: 'TRÍ TUỆ NHÂN TẠO',
    category: 'AI & Tự động hóa',
    title: 'Cách AI đang thay đổi công việc văn phòng',
    author: 'Minh Nguyễn',
    authorBio:
      'Chuyên gia phân tích dữ liệu và AI với hơn 10 năm kinh nghiệm trong ngành công nghệ. Minh hiện là biên tập viên cao cấp tại TechJournal Việt, tập trung vào việc đưa các giải pháp AI vào đời sống hàng ngày.',
    date: '05/05/2026',
    readTime: '8 phút đọc',
    content: (
      <>
        <p>
          ChatGPT đã trở thành một hiện tượng toàn cầu, nhưng không phải ai cũng biết cách khai thác tối đa sức mạnh của nó. Để bắt đầu, bạn cần hiểu rằng ChatGPT không chỉ là một cỗ máy trả lời, mà là một cộng sự tư duy tài năng.
        </p>

        <h2>Công thức Prompt chuẩn</h2>
        <p>
          Việc đặt câu hỏi (prompting) quyết định 80% chất lượng đầu ra. Một prompt hoàn hảo thường bao gồm 4 yếu tố: Bối cảnh, Nhiệm vụ, Ràng buộc và Định dạng.
        </p>

        <div className="ad-example-box">
          <div className="ad-example-box__label">Ví dụ Prompt Tốt:</div>
          <p>
            "Với tư cách là một chuyên gia Marketing, hãy viết 3 tiêu đề quảng cáo cho dòng tai nghe chống ồn mới. Tiêu đề cần ngắn gọn, đánh vào tâm lý người làm việc từ xa, và có giọng văn trẻ trung."
          </p>
        </div>

        <p>
          Khi bạn cung cấp đủ bối cảnh "với tư cách là...", mô hình ngôn ngữ sẽ kích hoạt các tập dữ liệu liên quan nhất để đưa ra phản hồi chính xác và có chiều sâu hơn.
        </p>

        <blockquote className="ad-quote">
          "ChatGPT không thay thế con người, nhưng người biết dùng ChatGPT sẽ thay thế người không biết dùng."
        </blockquote>

        <h2>Mẹo tối ưu câu trả lời</h2>
        <p>
          Nếu câu trả lời chưa ưng ý, đừng vội vàng bỏ cuộc. Hãy thử áp dụng kỹ thuật 'Chain of Thought' - yêu cầu AI suy nghĩ từng bước một trước khi đưa ra kết luận cuối cùng.
        </p>

        <ul className="ad-list">
          <li>Luôn yêu cầu trích dẫn nguồn nếu cần độ chính xác cao.</li>
          <li>Sử dụng dấu ngoặc kép để nhấn mạnh các từ khóa quan trọng.</li>
          <li>Yêu cầu AI đóng vai một phản biện để kiểm tra lỗ hổng trong ý tưởng của bạn.</li>
        </ul>

        <p>
          Cuối cùng, hãy nhớ rằng ChatGPT vẫn có những giới hạn về dữ liệu thời gian thực và đôi khi có thể tạo ra các thông tin không chính xác (hallucinations). Luôn kiểm chứng lại các thông tin quan trọng trước khi sử dụng chính thức.
        </p>
      </>
    )
  }
};

const defaultArticle = {
  tag: 'CÔNG NGHỆ',
  category: 'Công nghệ',
  title: 'Bài viết không tìm thấy',
  author: 'TechJournal Việt',
  authorBio: '',
  date: '',
  readTime: '',
  content: <p>Bài viết bạn tìm kiếm không tồn tại hoặc đã bị xóa.</p>
};

const sampleComments: Comment[] = [
  {
    id: 1,
    author: 'Hoàng Nam',
    time: '2 giờ trước',
    content:
      'Bài viết rất hữu ích cho người mới như mình. Đặc biệt là phần công thức Prompt, trước giờ mình toàn hỏi linh tinh nên kết quả không ra đâu vào đâu.'
  },
  {
    id: 2,
    author: 'Thu Hà',
    time: '5 giờ trước',
    content:
      'Kỹ thuật Chain of Thought thực sự hiệu quả. Mình đã thử và kết quả cải thiện rõ rệt, cảm ơn tác giả!'
  }
];

const ArticleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const article = (id && articles[id]) ? articles[id] : defaultArticle;
  const [commentText, setCommentText] = useState('');

  return (
    <div className="ad-page">
      <div className="ad-inner">
        <div className="ad-layout">
          {/* ── Article main ── */}
          <article className="ad-article">
            {/* Breadcrumb */}
            <nav className="ad-breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span className="material-icons-round">chevron_right</span>
              <Link to="/articles">Bài viết</Link>
              <span className="material-icons-round">chevron_right</span>
              <span>{article.category}</span>
            </nav>

            {/* Header */}
            <header className="ad-header">
              <span className="ad-tag">{article.tag}</span>
              <h1 className="ad-title">{article.title}</h1>
              <div className="ad-meta">
                <span className="ad-meta__author">{article.author}</span>
                {article.date && (
                  <>
                    <span className="ad-meta__sep">•</span>
                    <span>{article.date}</span>
                  </>
                )}
                {article.readTime && (
                  <>
                    <span className="ad-meta__sep">•</span>
                    <span className="material-icons-round">schedule</span>
                    <span>{article.readTime}</span>
                  </>
                )}
              </div>
            </header>

            {/* Cover image */}
            <div className="ad-cover" />

            {/* Body */}
            <div className="ad-body">{article.content}</div>

            {/* Author card */}
            {article.authorBio && (
              <div className="ad-author-card">
                <div className="ad-author-card__avatar">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <div className="ad-author-card__name">{article.author}</div>
                  <p className="ad-author-card__bio">{article.authorBio}</p>
                  <a href="#" className="ad-author-card__link">
                    Theo dõi Portfolio <span className="material-icons-round">open_in_new</span>
                  </a>
                </div>
              </div>
            )}

            {/* Comments */}
            <section className="ad-comments">
              <h2 className="ad-comments__title">
                Bình luận ({sampleComments.length})
              </h2>

              <form
                className="ad-comments__form"
                onSubmit={e => { e.preventDefault(); setCommentText(''); }}
              >
                <textarea
                  className="ad-comments__input"
                  placeholder="Chia sẻ suy nghĩ của bạn..."
                  value={commentText}
                  onChange={e => setCommentText(e.target.value)}
                  rows={3}
                />
                <button type="submit" className="ad-comments__submit">
                  Gửi bình luận
                </button>
              </form>

              <div className="ad-comments__list">
                {sampleComments.map(c => (
                  <div key={c.id} className="ad-comment">
                    <div className="ad-comment__avatar">
                      <span className="material-icons-round">person</span>
                    </div>
                    <div className="ad-comment__body">
                      <div className="ad-comment__header">
                        <span className="ad-comment__author">{c.author}</span>
                        <span className="ad-comment__time">{c.time}</span>
                      </div>
                      <p className="ad-comment__text">{c.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </article>

          {/* ── Sidebar ── */}
          <aside className="ad-sidebar">
            <div className="ad-sidebar__title">Bài viết liên quan</div>
            <div className="ad-sidebar__list">
              <Link to="/articles/1" className="ad-sidebar__item">
                <span className="ad-sidebar__item-tag">Công nghệ</span>
                <p className="ad-sidebar__item-title">10 công cụ tăng năng suất tốt nhất năm 2026</p>
              </Link>
              <Link to="/articles/2" className="ad-sidebar__item">
                <span className="ad-sidebar__item-tag">Khởi nghiệp</span>
                <p className="ad-sidebar__item-title">Startup Việt Nam nên bắt đầu với AI như thế nào</p>
              </Link>
              <Link to="/articles/6" className="ad-sidebar__item">
                <span className="ad-sidebar__item-tag">Đời sống số</span>
                <p className="ad-sidebar__item-title">Xây dựng hệ thống Second Brain hiệu quả</p>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
