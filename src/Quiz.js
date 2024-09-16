import React, { useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Quiz = () => {
  const questions = [
    {
      question: "จงหารพหุนาม \\(x^3 + 3x^2 + 3x + 1\\) ด้วย \\(x + 1\\)",
      options: [
        "\\(x^2 + 2x + 1\\)",
        "\\(x^2 + x + 1\\)",
        "\\(x^2 - x + 1\\)",
        "\\(x^2 + 3x + 1\\)",
      ],
      answer: "\\(x^2 + 2x + 1\\)",
    },
    {
      question: "จงหารพหุนาม \\(2x^3 - 4x^2 + 6x - 8\\) ด้วย \\(x - 2\\)",
      options: [
        "\\(2x^2 - 6x + 2\\)",
        "\\(2x^2 + 2x + 4\\)",
        "\\(2x^2 + 6x\\) เศษ 12",
        "\\(2x^2 + 6x\\) เศษ 4",
      ],
      answer: "\\(2x^2 + 6x\\) เศษ 4",
    },
    {
      question: "จงหารพหุนาม \\(x^3 - x^2 - 4x + 4\\) ด้วย \\(x - 2\\)",
      options: [
        "\\(x^2 + x - 2\\)",
        "\\(x^2 - 2x - 2\\)",
        "\\(x^2 - x - 2\\)",
        "\\(x^2 + 3x + 2\\)",
      ],
      answer: "\\(x^2 + x - 2\\)",
    },
    {
      question: "จงแยกตัวประกอบพหุนาม \\(x^2 + 5x + 6\\)",
      options: [
        "\\((x + 2)(x + 3)\\)",
        "\\((x - 2)(x - 3)\\)",
        "\\((x + 1)(x + 6)\\)",
        "\\((x + 3)(x + 6)\\)",
      ],
      answer: "\\((x + 2)(x + 3)\\)",
    },
    {
      question: "จงแยกตัวประกอบพหุนาม \\(x^2 + 7x + 12\\)",
      options: [
        "\\((x + 4)(x + 3)\\)",
        "\\((x - 4)(x + 3)\\)",
        "\\((x + 2)(x + 6)\\)",
        "\\((x + 7)(x + 12)\\)",
      ],
      answer: "\\((x + 4)(x + 3)\\)",
    },
    {
      question: "จงแยกตัวประกอบพหุนาม \\(x^2 - 9x + 20\\)",
      options: [
        "\\((x - 4)(x - 5)\\)",
        "\\((x - 5)(x - 6)\\)",
        "\\((x + 4)(x + 5)\\)",
        "\\((x + 5)(x - 6)\\)",
      ],
      answer: "\\((x - 4)(x - 5)\\)",
    },
    {
      question: "จงแยกตัวประกอบพหุนาม \\(2x^2 + 5x + 3\\)",
      options: [
        "\\((2x + 3)(x + 1)\\)",
        "\\((2x + 1)(x + 3)\\)",
        "\\((x + 2)(2x + 1)\\)",
        "\\((2x + 2)(x + 1)\\)",
      ],
      answer: "\\((2x + 3)(x + 1)\\)",
    },
    {
      question: "จงแยกตัวประกอบพหุนาม \\(3x^2 + 8x + 4\\)",
      options: [
        "\\((3x + 4)(x + 1)\\)",
        "\\((3x + 2)(x + 2)\\)",
        "\\((x + 2)(3x + 1)\\)",
        "\\((3x + 3)(x + 1)\\)",
      ],
      answer: "\\((3x + 2)(x + 2)\\)",
    },
    {
      question: "จงแยกตัวประกอบ \\(x^2 - 16\\)",
      options: [
        "\\((x - 4)(x + 4)\\)",
        "\\((x - 2)(x + 8)\\)",
        "\\((x + 2)(x - 4)\\)",
        "\\((x + 4)(x + 4)\\)",
      ],
      answer: "\\((x - 4)(x + 4)\\)",
    },
    {
      question: "จงแยกตัวประกอบ \\(x^2 - 25\\)",
      options: [
        "\\((x - 5)(x + 5)\\)",
        "\\((x - 3)(x + 7)\\)",
        "\\((x + 5)(x + 5)\\)",
        "\\((x - 5)(x + 7)\\)",
      ],
      answer: "\\((x - 5)(x + 5)\\)",
    },
    {
      question: "จงแยกตัวประกอบ \\(x^2 - 36\\)",
      options: [
        "\\((x - 6)(x + 6)\\)",
        "\\((x - 3)(x + 12)\\)",
        "\\((x - 6)(x + 3)\\)",
        "\\((x + 6)(x + 6)\\)",
      ],
      answer: "\\((x - 6)(x + 6)\\)",
    },
    {
      question: "จงแยกตัวประกอบพหุนาม \\(10x^2 + 11x - 6\\)",
      options: [
        "\\((2x + 3)(5x - 2)\\)",
        "\\((2x - 3)(5x + 2)\\)",
        "\\((x + 3)(10x - 2)\\)",
        "\\((5x + 2)(2x - 3)\\)",
      ],
      answer: "\\((2x + 3)(5x - 2)\\)",
    },
    {
      question: "จงแยกตัวประกอบพหุนาม \\(-15x^2 + 14x + 8\\)",
      options: [
        "\\((-3x + 4)(5x - 2)\\)",
        "\\((-5x + 4)(3x + 2)\\)",
        "\\((5x - 4)(-3x + 2)\\)",
        "\\((3x + 2)(-5x + 4)\\)",
      ],
      answer: "\\((3x + 2)(-5x + 4)\\)",
    },
    {
      question: "จงแยกตัวประกอบพหุนาม \\(6x^2 - 17x + 12\\)",
      options: [
        "\\((2x - 3)(3x - 4)\\)",
        "\\((3x - 4)(2x + 3)\\)",
        "\\((x - 3)(6x + 2)\\)",
        "\\((2x + 3)(3x - 4)\\)",
      ],
      answer: "\\((2x - 3)(3x - 4)\\)",
    },
    {
      question: "จงแยกตัวประกอบพหุนาม \\(-7x^2 + 18x + 9\\)",
      options: [
        "\\((-7x + 3)(x - 3)\\)",
        "\\((7x - 9)(x + 1)\\)",
        "\\((7x + 3)(x - 3)\\)",
        "\\((-7x + 9)(x + 1)\\)",
      ],
      answer: "\\((7x + 3)(x - 3)\\)",
    },
    {
      question: "จงแยกตัวประกอบ \\(x^2 + 6x + 9\\)",
      options: [
        "\\((x + 3)^2\\)",
        "\\((x - 3)^2\\)",
        "\\((x + 2)^2\\)",
        "\\((x + 9)^2\\)",
      ],
      answer: "\\((x + 3)^2\\)",
    },
    {
      question: "จงแยกตัวประกอบ \\(x^2 - 4x + 4\\)",
      options: [
        "\\((x - 2)^2\\)",
        "\\((x + 2)^2\\)",
        "\\((x - 4)^2\\)",
        "\\((x - 3)^2\\)",
      ],
      answer: "\\((x - 2)^2\\)",
    },
    {
      question: "จงแยกตัวประกอบ \\(x^2 - 10x + 25\\)",
      options: [
        "\\((x - 5)^2\\)",
        "\\((x + 5)^2\\)",
        "\\((x - 2)^2\\)",
        "\\((x - 7)^2\\)",
      ],
      answer: "\\((x - 5)^2\\)",
    },
    {
      question: "จงแยกตัวประกอบ \\(x^2 + 8x + 16\\)",
      options: [
        "\\((x + 4)^2\\)",
        "\\((x - 4)^2\\)",
        "\\((x + 8)^2\\)",
        "\\((x + 3)^2\\)",
      ],
      answer: "\\((x + 4)^2\\)",
    },
    {
      question: "จงแยกตัวประกอบ \\(x^2 - 12x + 36\\)",
      options: [
        "\\((x - 6)^2\\)",
        "\\((x + 6)^2\\)",
        "\\((x - 5)^2\\)",
        "\\((x - 3)^2\\)",
      ],
      answer: "\\((x - 6)^2\\)",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
      setIsCorrect(true); // Correct answer
    } else {
      setIsCorrect(false); // Incorrect answer
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption("");
      setIsCorrect(null);
    } else {
      setShowScore(true);
    }
  };

  return (
    <MathJaxContext>
      <div className="quiz-container">
        {showScore ? (
          <div className="score-section">
            คุณได้คะแนน {score} / {questions.length}
          </div>
        ) : (
          <div>
            <div className="question-section">
              <div className="question-count">
                <span>ข้อ {currentQuestion + 1}</span> / {questions.length}
              </div>
              <div className="question-text">
                <MathJax>{questions[currentQuestion].question}</MathJax>
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={selectedOption === option ? "selected" : ""}
                  onClick={() => handleAnswerOptionClick(option)}
                  disabled={selectedOption !== ""} // Disable once an option is selected
                >
                  <MathJax>{option}</MathJax>
                </button>
              ))}
            </div>

            {/* Show correct answer and feedback */}
            {selectedOption && (
              <div className="feedback-section">
                {isCorrect ? (
                  <p>
                    ถูกต้อง! คำตอบคือ{" "}
                    <MathJax>{questions[currentQuestion].answer}</MathJax>
                  </p>
                ) : (
                  <p>
                    ไม่ถูกต้อง. คำตอบที่ถูกต้องคือ{" "}
                    <MathJax>{questions[currentQuestion].answer}</MathJax>
                  </p>
                )}
                <button onClick={handleNextQuestion}>ข้อถัดไป</button>
              </div>
            )}
          </div>
        )}
      </div>
    </MathJaxContext>
  );
};

export default Quiz;
