import { useEffect, useRef, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';

import testData from 'app/pages/test/tests.json';
import { type IQuiz, type IQuizQuestion } from 'app/shared/util/entities';
import { getScoreInfo } from 'app/shared/util/util';
import 'app/pages/test/test.scss';



const TestPageDetail = () => {

  const { testId } = useParams<{ testId: string }>();

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [scoreBarWidth, setScoreBarWidth] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach(el => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            el.classList.add('visible');
            obs.disconnect();
          }
        },
        { threshold: 0.08 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  if (!testId || !(testId in testData)) {
    return <Navigate to="/test" replace />;
  }

  const currentTest = (testData as IQuiz)[testId];
  const TOTAL = currentTest ? currentTest.content.length : 0;

  const QUESTIONS: IQuizQuestion[] = currentTest ? currentTest.content : [];

  const answeredCount = Object.keys(answers).length;
  const progressPct = (answeredCount / TOTAL) * 100;

  function handleSelect(questionId: number, value: string) {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  }

  function handleSubmit() {
    if (answeredCount < TOTAL) {
      alert(`Vui lòng trả lời tất cả ${TOTAL} câu hỏi trước khi nộp bài!`);
      return;
    }
    setSubmitted(true);
    const correct = QUESTIONS.filter(q => answers[q.id] === q.correct).length;
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
    ? QUESTIONS.filter(q => answers[q.id] === q.correct).length
    : 0;
  const scorePct = submitted ? Math.round((correctCount / TOTAL) * 100) : 0;
  const { emoji, msg } = submitted ? getScoreInfo(scorePct) : { emoji: '', msg: '' };

  return (
    <div className="test-page">
      <div className="tq-wrapper">
        {/* HEADER */}
        <div className="tq-header tq-animate-in">
          <div className="tq-header__badge">Kiểm tra kiến thức</div>
          <div className="tq-header__title">
            Bài kiểm tra mức độ tiếp thu bài học.
          </div>
          <p className="tq-header__trainer">Quỳnh Nga BrSE Japan — Đồng Hành Cùng Bạn</p>
          <div className="tq-header__meta" dangerouslySetInnerHTML={{ __html: currentTest?.description || '' }} />
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
              ref={el => { cardRefs.current[idx] = el; }}
              className={[
                'tq-card',
                submitted && isCorrect ? 'correct' : '',
                submitted && isWrong ? 'incorrect' : ''
              ].filter(Boolean).join(' ')}
            >
              <div className="tq-card__num">Câu hỏi {String(q.id).padStart(2, '0')}</div>
              <div className="tq-card__question">{q.question}</div>

              <div className="tq-options">
                {q.options.map(opt => {
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
                        submitted ? 'submitted-option' : ''
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
};

export default TestPageDetail;
