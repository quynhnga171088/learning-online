export type IQuiz = Record<string, IQuizData>

export interface IQuizData {
  description: string;
  content: IQuizQuestion[];
}

export interface IQuizQuestion {
  id: number;
  question: string;
  options: IQuizOption[];
  correct: string;
  feedbackCorrect: string;
  feedbackIncorrect: string;
}

export interface IQuizOption {
  value: string;
  label: string;
}