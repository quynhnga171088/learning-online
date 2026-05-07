import { Link } from 'react-router-dom';

import testData from 'app/pages/test/tests.json';
import 'app/pages/test/test.scss';

const TestPage = () => {

  return (
    <div className="test-page">
      <div className="tq-wrapper">
        <div className="tq-header tq-animate-in">
          <div className="tq-header__badge">Kiểm tra kiến thức</div>
          <div className="tq-header__title">
            Các đề thi trắc nghiệm — Kiểm tra mức độ tiếp thu bài học.
          </div>
          {Object.keys(testData).map((testId: string) => (
            <Link key={testId} to={`/test/${testId}`}>
              <div
                className="tq-progress tq-animate-in tq-delay-1"
                dangerouslySetInnerHTML={{ __html: (testData as any)[testId].description }}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
