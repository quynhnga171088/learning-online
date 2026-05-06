import { useEffect, useRef, useState } from 'react';
import './test.scss';

interface QuizOption {
  value: string;
  label: string;
}

interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  correct: string;
  feedbackCorrect: string;
  feedbackIncorrect: string;
}

const QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Trong một công ty outsource, bước đầu tiên để một dự án phần mềm bắt đầu là gì?',
    options: [
      { value: 'a', label: 'Tổ chức Kickoff Meeting với toàn bộ team dự án' },
      { value: 'b', label: 'Bộ phận Sales tiếp cận và mang dự án từ khách hàng về' },
      { value: 'c', label: 'Developer bắt đầu viết code theo yêu cầu' },
      { value: 'd', label: 'BA tạo tài liệu SRS và đặc tả yêu cầu' },
    ],
    correct: 'b',
    feedbackCorrect: '✅ Chính xác! Sales là bộ phận khởi đầu — tìm kiếm, tiếp cận khách hàng tiềm năng, giới thiệu năng lực công ty và đưa dự án về cho đội phát triển.',
    feedbackIncorrect: '❌ Chưa đúng. Bước khởi đầu là bộ phận Sales tiếp cận khách hàng để mang dự án về — chứ không phải bắt đầu từ kỹ thuật.',
  },
  {
    id: 2,
    question: 'Nhiệm vụ của bộ phận Sales trong quy trình phát triển phần mềm là gì?',
    options: [
      { value: 'a', label: 'Viết tài liệu đặc tả yêu cầu (SRS) và Basic Design' },
      { value: 'b', label: 'Kiểm thử sản phẩm trước khi bàn giao cho khách hàng' },
      { value: 'c', label: 'Tiếp cận khách hàng, giới thiệu công ty và thu thập nhu cầu ban đầu' },
      { value: 'd', label: 'Quản lý tiến độ phát triển và báo cáo với khách hàng' },
    ],
    correct: 'c',
    feedbackCorrect: '✅ Đúng! Sales tìm kiếm & tiếp cận khách hàng tiềm năng, giới thiệu năng lực công ty, thu thập nhu cầu ban đầu rồi đưa dự án về cho đội phát triển.',
    feedbackIncorrect: '❌ Chưa đúng. Nhiệm vụ của Sales là tiếp cận khách hàng, giới thiệu công ty và thu thập nhu cầu ban đầu — không liên quan đến kỹ thuật hay kiểm thử.',
  },
  {
    id: 3,
    question: 'Giai đoạn Bidding (Đấu thầu) là trách nhiệm của ai?',
    options: [
      { value: 'a', label: 'Presales / BU / SBU / PM / BrSE (tùy công ty)' },
      { value: 'b', label: 'Chỉ có Tester và QA thực hiện' },
      { value: 'c', label: 'Chỉ có khách hàng và Sales thực hiện' },
      { value: 'd', label: 'Developer tự phân tích yêu cầu và estimate' },
    ],
    correct: 'a',
    feedbackCorrect: '✅ Chính xác! Giai đoạn Bidding do phòng phát triển đảm nhận — có thể là Presales, BU, SBU, PM hoặc BrSE tùy theo cơ cấu của từng công ty.',
    feedbackIncorrect: '❌ Chưa đúng. Giai đoạn Bidding là trách nhiệm của Presales / BU / SBU / PM / BrSE — không phải Tester hay Sales thuần túy.',
  },
  {
    id: 4,
    question: 'Trong giai đoạn Bidding, đội ngũ kỹ thuật cần tạo ra những tài liệu nào để gửi cho khách hàng?',
    options: [
      { value: 'a', label: 'SRS và Basic Design' },
      { value: 'b', label: 'Function List và Prototype chi tiết' },
      { value: 'c', label: 'Source code và Test Report' },
      { value: 'd', label: 'Proposal (đề xuất) và Estimate (ước lượng chi phí, thời gian)' },
    ],
    correct: 'd',
    feedbackCorrect: '✅ Đúng rồi! Giai đoạn Bidding cần tạo Proposal (bản đề xuất dự án) và Estimate (ước lượng chi phí & thời gian thực hiện) để gửi cho khách hàng xem xét.',
    feedbackIncorrect: '❌ Chưa đúng. Giai đoạn Bidding cần tạo Proposal và Estimate — SRS và Basic Design thuộc về giai đoạn Specs (Bước 3.1) sau khi đã có hợp đồng.',
  },
  {
    id: 5,
    question: 'Tại sao việc tạo Draft Prototype (bản mẫu giao diện sơ bộ) trong giai đoạn Bidding lại có giá trị?',
    options: [
      { value: 'a', label: 'Vì đó là yêu cầu bắt buộc theo quy định của mọi hợp đồng outsource' },
      { value: 'b', label: 'Vì khi nhìn thấy hình ảnh trực quan, khách hàng dễ hình dung và ra quyết định nhanh hơn' },
      { value: 'c', label: 'Vì Developer cần prototype để bắt đầu code ngay lập tức' },
      { value: 'd', label: 'Vì Tester cần prototype để viết test case từ sớm' },
    ],
    correct: 'b',
    feedbackCorrect: '✅ Chính xác! Draft Prototype giúp khách hàng hình dung trực quan về sản phẩm sẽ được xây dựng, từ đó dễ dàng ra quyết định và chốt hợp đồng nhanh hơn.',
    feedbackIncorrect: '❌ Chưa đúng. Lý do chính là để khách hàng dễ hình dung sản phẩm và ra quyết định nhanh hơn — đây là công cụ hỗ trợ bán hàng, không phải yêu cầu bắt buộc.',
  },
  {
    id: 6,
    question: 'Kickoff Meeting diễn ra ở thời điểm nào trong quy trình dự án?',
    options: [
      { value: 'a', label: 'Ngay khi Sales mới gặp khách hàng lần đầu' },
      { value: 'b', label: 'Sau khi giai đoạn Test hoàn thành' },
      { value: 'c', label: 'Sau khi khách hàng đồng ý và dự án chính thức bắt đầu' },
      { value: 'd', label: 'Sau khi bàn giao phần mềm cho khách hàng' },
    ],
    correct: 'c',
    feedbackCorrect: '✅ Đúng! Kickoff Meeting được tổ chức sau khi khách hàng đồng ý hợp tác, đánh dấu thời điểm dự án chính thức khởi động với sự tham gia của khách hàng, Sales, PM và toàn bộ team dự án.',
    feedbackIncorrect: '❌ Chưa đúng. Kickoff Meeting diễn ra sau khi khách hàng đã đồng ý — đây là cuộc họp khởi động chính thức của dự án, không phải lúc Sales mới gặp lần đầu.',
  },
  {
    id: 7,
    question: 'Những ai tham gia buổi Kickoff Meeting?',
    options: [
      { value: 'a', label: 'Khách hàng + Sales + PM + toàn bộ team dự án' },
      { value: 'b', label: 'Chỉ có PM và Developer nội bộ' },
      { value: 'c', label: 'Chỉ có Sales và khách hàng — team kỹ thuật không tham gia' },
      { value: 'd', label: 'Chỉ có BrSE và Tester' },
    ],
    correct: 'a',
    feedbackCorrect: '✅ Đúng! Kickoff Meeting là buổi họp quy tụ đầy đủ: Khách hàng + Sales + PM + toàn bộ team dự án — để cùng thống nhất mục tiêu, phạm vi và kế hoạch dự án.',
    feedbackIncorrect: '❌ Chưa đúng. Kickoff Meeting cần có Khách hàng + Sales + PM + toàn bộ team dự án — đây là buổi họp quan trọng để tất cả các bên cùng thống nhất từ đầu.',
  },
  {
    id: 8,
    question: 'Trong giai đoạn tạo Specs (Bước 3.1), ai là người "hearing" (lắng nghe) khách hàng để nắm bắt yêu cầu chi tiết?',
    options: [
      { value: 'a', label: 'Developer và Tester' },
      { value: 'b', label: 'BA (Business Analyst) và/hoặc BrSE' },
      { value: 'c', label: 'Sales và PM' },
      { value: 'd', label: 'Khách hàng tự viết tài liệu và gửi cho team' },
    ],
    correct: 'b',
    feedbackCorrect: '✅ Chính xác! BA (Business Analyst) và/hoặc BrSE đóng vai trò lắng nghe, khai thác yêu cầu từ khách hàng rồi chuyển hóa thành các tài liệu đặc tả kỹ thuật.',
    feedbackIncorrect: '❌ Chưa đúng. Người trực tiếp "hearing" khách hàng trong giai đoạn Specs là BA (Business Analyst) và/hoặc BrSE — họ là cầu nối giữa nghiệp vụ và kỹ thuật.',
  },
  {
    id: 9,
    question: 'Tài liệu nào KHÔNG thuộc danh sách được tạo trong giai đoạn Specs (Bước 3.1)?',
    options: [
      { value: 'a', label: 'Function List (Danh sách chức năng)' },
      { value: 'b', label: 'SRS (Software Requirement Specification)' },
      { value: 'c', label: 'Test Report (Báo cáo kiểm thử)' },
      { value: 'd', label: 'Basic Design (Thiết kế cơ bản)' },
    ],
    correct: 'c',
    feedbackCorrect: '✅ Đúng! Test Report thuộc giai đoạn kiểm thử (Bước 3.2), không phải giai đoạn tạo Specs. Giai đoạn 3.1 tạo ra: Function List, Prototype, SRS và Basic Design.',
    feedbackIncorrect: '❌ Chưa đúng. Test Report mới là tài liệu không thuộc giai đoạn Specs — nó được tạo ra trong quá trình kiểm thử (Bước 3.2), sau khi Coding đã hoàn thành.',
  },
  {
    id: 10,
    question: 'Sau khi hoàn thành tài liệu Specs, điều kiện bắt buộc để chuyển sang giai đoạn Coding là gì?',
    options: [
      { value: 'a', label: 'PM xem xét và tự quyết định cho phép bắt đầu' },
      { value: 'b', label: 'Developer đọc và hiểu hết tài liệu' },
      { value: 'c', label: 'Tester đã chuẩn bị xong test case' },
      { value: 'd', label: 'Khách hàng đã phê duyệt (approve) tài liệu Specs' },
    ],
    correct: 'd',
    feedbackCorrect: '✅ Chính xác! Tài liệu Specs phải được khách hàng phê duyệt (approve) trước khi team bắt tay vào phát triển — điều này đảm bảo mọi người hiểu đúng yêu cầu và tránh làm lại sau này.',
    feedbackIncorrect: '❌ Chưa đúng. Bắt buộc phải có sự phê duyệt (approve) của khách hàng — không ai tự ý bắt đầu Coding mà không có chữ ký chấp thuận từ phía khách.',
  },
  {
    id: 11,
    question: 'Thứ tự đúng của các giai đoạn trong Bước 3.2 là gì?',
    options: [
      { value: 'a', label: 'Coding → Test (nội bộ) → UAT (khách hàng nghiệm thu)' },
      { value: 'b', label: 'UAT → Coding → Test nội bộ' },
      { value: 'c', label: 'Test nội bộ → Coding → UAT' },
      { value: 'd', label: 'Coding → UAT → Test nội bộ' },
    ],
    correct: 'a',
    feedbackCorrect: '✅ Đúng! Thứ tự chuẩn là Coding → Test → UAT: Developer viết code → Tester/QA kiểm thử nội bộ → Khách hàng nghiệm thu (UAT).',
    feedbackIncorrect: '❌ Chưa đúng. Thứ tự đúng là Coding → Test → UAT. Phải viết code trước, kiểm thử nội bộ tiếp theo, rồi mới mời khách hàng nghiệm thu cuối cùng.',
  },
  {
    id: 12,
    question: 'UAT (User Acceptance Testing) là gì, và ai chịu trách nhiệm thực hiện?',
    options: [
      { value: 'a', label: 'Unit Automated Testing — do hệ thống CI/CD tự chạy' },
      { value: 'b', label: 'User Acceptance Testing — do khách hàng thực hiện để nghiệm thu sản phẩm' },
      { value: 'c', label: 'User Application Testing — do Tester nội bộ thực hiện thay mặt khách hàng' },
      { value: 'd', label: 'Unified Assurance Testing — do QA Lead thực hiện sau khi release' },
    ],
    correct: 'b',
    feedbackCorrect: '✅ Chính xác! UAT = User Acceptance Testing — khách hàng trực tiếp kiểm thử và nghiệm thu sản phẩm, quyết định chấp nhận hay yêu cầu chỉnh sửa thêm.',
    feedbackIncorrect: '❌ Chưa đúng. UAT là User Acceptance Testing — chính khách hàng là người thực hiện để nghiệm thu, không phải team kỹ thuật hay hệ thống tự động.',
  },
  {
    id: 13,
    question: 'Trong giai đoạn Test nội bộ, nếu Tester phát hiện bug thì bước xử lý tiếp theo là gì?',
    options: [
      { value: 'a', label: 'Báo ngay cho khách hàng và chờ khách hàng quyết định' },
      { value: 'b', label: 'Tester tự fix bug luôn để tiết kiệm thời gian' },
      { value: 'c', label: 'Tester yêu cầu Developer fix bug trước khi chuyển sang bước tiếp theo' },
      { value: 'd', label: 'PM quyết định bỏ qua bug và đẩy thẳng lên UAT' },
    ],
    correct: 'c',
    feedbackCorrect: '✅ Đúng! Khi phát hiện bug, Tester báo lại để Developer fix — đây là vòng lặp kiểm thử chuẩn, đảm bảo sản phẩm hoạt động đúng theo Specs trước khi đến tay khách hàng.',
    feedbackIncorrect: '❌ Chưa đúng. Khi có bug, Tester yêu cầu Developer fix — không tự fix, không bỏ qua, và không báo thẳng ra khách hàng khi đang ở giai đoạn kiểm thử nội bộ.',
  },
  {
    id: 14,
    question: 'Điều kiện để chuyển sang Bước 4 (Release & Bảo hành) là gì?',
    options: [
      { value: 'a', label: 'Developer hoàn thành toàn bộ code và không còn lỗi kỹ thuật' },
      { value: 'b', label: 'Tester xác nhận đã kiểm thử xong 100% test case' },
      { value: 'c', label: 'PM gửi báo cáo dự án lên ban giám đốc' },
      { value: 'd', label: 'Khách hàng chấp nhận sản phẩm sau khi hoàn thành UAT' },
    ],
    correct: 'd',
    feedbackCorrect: '✅ Chính xác! Chỉ khi khách hàng nghiệm thu và chấp nhận sản phẩm qua UAT, team mới chính thức chuyển sang Bước 4 để tiến hành bàn giao và bảo hành.',
    feedbackIncorrect: '❌ Chưa đúng. Điều kiện quyết định là khách hàng chấp nhận sản phẩm sau UAT — dù Dev xong hay Tester xong, vẫn phải chờ khách hàng xác nhận mới được chuyển sang bàn giao.',
  },
  {
    id: 15,
    question: 'BrSE giỏi và BrSE thông thường khác nhau ở phạm vi công việc đảm nhận như thế nào?',
    options: [
      { value: 'a', label: 'BrSE giỏi phụ trách từ Bước 2 (Bidding) đến Bước 3.1 (Specs); BrSE thông thường từ Bước 3.2 đến Bước 4' },
      { value: 'b', label: 'BrSE giỏi chỉ làm Bước 1 (Sales); BrSE thông thường làm tất cả các bước còn lại' },
      { value: 'c', label: 'Cả hai đều phụ trách như nhau, chỉ khác nhau ở tốc độ làm việc' },
      { value: 'd', label: 'BrSE giỏi chỉ phụ trách Bước 4 (Release); BrSE thông thường phụ trách Bước 1 đến Bước 3' },
    ],
    correct: 'a',
    feedbackCorrect: '✅ Chính xác! BrSE giỏi tham gia ngay từ giai đoạn đấu thầu và đặc tả (Bước 2–3.1). BrSE thông thường vào từ giai đoạn phát triển, bàn giao và bảo hành (Bước 3.2–4).',
    feedbackIncorrect: '❌ Chưa đúng. BrSE giỏi phụ trách từ Bước 2 (Bidding) đến Bước 3.1 (Specs). BrSE thông thường phụ trách từ Bước 3.2 (Dev & Test) đến Bước 4 (Release & Bảo hành).',
  },
];

const TOTAL = QUESTIONS.length;

function getScoreInfo(pct: number): { emoji: string; msg: string } {
  if (pct === 100) return { emoji: '🏆', msg: 'Xuất sắc! Bạn nắm vững toàn bộ kiến thức!' };
  if (pct >= 80)  return { emoji: '⭐', msg: 'Rất tốt! Bạn đã hiểu sâu phần lớn nội dung.' };
  if (pct >= 67)  return { emoji: '👍', msg: 'Tốt! Bạn nắm được những điểm cốt lõi.' };
  if (pct >= 50)  return { emoji: '📖', msg: 'Khá ổn, nhưng nên xem lại một số phần nhé.' };
  return { emoji: '💪', msg: 'Bạn cần ôn lại bài học kỹ hơn — cố lên nhé!' };
}

export default function TestPage() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [scoreBarWidth, setScoreBarWidth] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scoreRef = useRef<HTMLDivElement>(null);

  const answeredCount = Object.keys(answers).length;
  const progressPct = (answeredCount / TOTAL) * 100;

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((el) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
            obs.disconnect();
          }
        },
        { threshold: 0.08 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  function handleSelect(questionId: number, value: string) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function handleSubmit() {
    if (answeredCount < TOTAL) {
      alert('Vui lòng trả lời tất cả 15 câu hỏi trước khi nộp bài!');
      return;
    }
    setSubmitted(true);
    const correct = QUESTIONS.filter((q) => answers[q.id] === q.correct).length;
    const pct = Math.round((correct / TOTAL) * 100);
    setTimeout(() => setScoreBarWidth(pct), 100);
    setTimeout(() => scoreRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
    setScoreBarWidth(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const correctCount = submitted
    ? QUESTIONS.filter((q) => answers[q.id] === q.correct).length
    : 0;
  const scorePct = submitted ? Math.round((correctCount / TOTAL) * 100) : 0;
  const { emoji, msg } = submitted ? getScoreInfo(scorePct) : { emoji: '', msg: '' };

  return (
    <div className="test-page">
      <div className="tq-wrapper">

        {/* HEADER */}
        <div className="tq-header tq-animate-in">
          <div className="tq-header__badge">Kiểm tra kiến thức</div>
          <h1 className="tq-header__title">
            Toàn cảnh vòng đời<br />dự án phần mềm
          </h1>
          <p className="tq-header__sub">15 câu hỏi trắc nghiệm — Kiểm tra mức độ tiếp thu bài học</p>
          <p className="tq-header__trainer">Quỳnh Nga BrSE Japan — Đồng Hành Cùng Bạn</p>
          <p className="tq-header__meta">Đọc kỹ câu hỏi &bull; Chọn đáp án &bull; Nộp bài khi hoàn thành</p>
        </div>

        {/* PROGRESS */}
        <div className="tq-progress tq-animate-in tq-delay-1">
          <span className="tq-progress__label">Tiến độ</span>
          <div className="tq-progress__track">
            <div
              className="tq-progress__fill"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <span className="tq-progress__count">{answeredCount} / {TOTAL}</span>
        </div>

        {/* QUESTIONS */}
        {QUESTIONS.map((q, idx) => {
          const selected = answers[q.id];
          const isCorrect = submitted && selected === q.correct;
          const isWrong = submitted && selected !== undefined && selected !== q.correct;

          return (
            <div
              key={q.id}
              ref={(el) => { cardRefs.current[idx] = el; }}
              className={[
                'tq-card',
                submitted && isCorrect ? 'correct' : '',
                submitted && isWrong ? 'incorrect' : '',
              ].filter(Boolean).join(' ')}
            >
              <div className="tq-card__num">Câu hỏi {String(q.id).padStart(2, '0')}</div>
              <div className="tq-card__question">{q.question}</div>

              <div className="tq-options">
                {q.options.map((opt) => {
                  const isSelected = selected === opt.value;
                  const showCorrect = submitted && opt.value === q.correct && !isSelected;
                  const optCorrect = submitted && isSelected && opt.value === q.correct;
                  const optWrong = submitted && isSelected && opt.value !== q.correct;

                  return (
                    <div
                      key={opt.value}
                      className={[
                        'tq-option',
                        isSelected ? 'selected' : '',
                        optCorrect ? 'is-correct' : '',
                        optWrong ? 'is-wrong' : '',
                        showCorrect ? 'show-correct' : '',
                        submitted ? 'submitted-option' : '',
                      ].filter(Boolean).join(' ')}
                      onClick={() => handleSelect(q.id, opt.value)}
                    >
                      <div className="tq-radio">
                        <div className="tq-radio__dot" />
                      </div>
                      <span>{opt.label}</span>
                    </div>
                  );
                })}
              </div>

              {submitted && (
                <div className={`tq-feedback show ${isCorrect ? 'correct-fb' : 'incorrect-fb'}`}>
                  {isCorrect ? q.feedbackCorrect : q.feedbackIncorrect}
                </div>
              )}
            </div>
          );
        })}

        {/* SUBMIT AREA */}
        <div className="tq-submit-area" ref={scoreRef}>
          {submitted && <div className="tq-score-emoji">{emoji}</div>}
          <button className="tq-btn-submit" onClick={handleSubmit}>Nộp bài</button>
          <button className="tq-btn-reset" onClick={handleReset}>Làm lại từ đầu</button>
          {submitted && (
            <>
              <div className="tq-score-result show">
                Kết quả: <strong>{correctCount}/{TOTAL}</strong> câu đúng ({scorePct}%)
                <br />
                <span className="tq-score-msg">{msg}</span>
              </div>
              <div className="tq-score-bar show">
                <div className="tq-score-bar__fill" style={{ width: `${scoreBarWidth}%` }} />
              </div>
            </>
          )}
        </div>

        {/* FOOTER */}
        <div className="tq-footer">
          <p>Tài liệu đào tạo bởi <span className="tq-footer__trainer">Quỳnh Nga BrSE Japan — Đồng Hành Cùng Bạn</span></p>
          <p style={{ marginTop: '6px' }}>Bài kiểm tra: Toàn cảnh vòng đời dự án phần mềm &bull; 15 câu hỏi trắc nghiệm</p>
        </div>

      </div>
    </div>
  );
}
