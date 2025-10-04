'use client'

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const LiDARQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const questions = [
    {
      question: "How does LiDAR calculate distance to an object?",
      options: [
        "By measuring sound waves",
        "Using the time-of-flight principle with laser pulses",
        "Through radio wave reflection",
        "By analyzing photographic data"
      ],
      correct: 1,
      explanation: "LiDAR uses the time-of-flight principle, measuring how long it takes for a laser pulse to travel to an object and return to calculate distance."
    },
    {
      question: "What is a key advantage of solid-state LiDAR over mechanical LiDAR?",
      options: [
        "Lower cost",
        "Better range",
        "No moving parts to wear out",
        "Higher power efficiency"
      ],
      correct: 2,
      explanation: "Solid-state LiDAR systems eliminate moving parts, which reduces wear and tear and potentially increases reliability."
    },
    {
      question: "What is a point cloud in LiDAR technology?",
      options: [
        "A collection of weather data points",
        "A group of laser emitters",
        "A 3D assembly of measured coordinates",
        "A cluster of GPS satellites"
      ],
      correct: 2,
      explanation: "A point cloud is a collection of 3D coordinates measured by the LiDAR system, forming a detailed representation of the scanned environment."
    },
    {
      question: "Which environmental condition does NOT typically affect LiDAR performance?",
      options: [
        "Wind",
        "Heavy rain",
        "Fog",
        "Dust"
      ],
      correct: 0,
      explanation: "While rain, fog, and dust can interfere with laser pulses, wind generally doesn't affect LiDAR performance significantly."
    }
  ];

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setShowExplanation(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          LiDAR Technology Quiz
        </CardTitle>
      </CardHeader>
      <CardContent>
        {showScore ? (
          <div className="text-center">
            <h2 className="text-xl mb-4">Quiz Complete!</h2>
            <p className="text-lg mb-4">You scored {score} out of {questions.length}</p>
            <button
              onClick={resetQuiz}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Retry Quiz
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">Question {currentQuestion + 1} of {questions.length}</p>
              <h3 className="text-lg font-medium mb-4">{questions[currentQuestion].question}</h3>
              <div className="space-y-2">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => !showExplanation && handleAnswer(index)}
                    className={`w-full p-3 text-left rounded border ${
                      showExplanation
                        ? index === questions[currentQuestion].correct
                          ? 'bg-green-100 border-green-500'
                          : 'bg-gray-100'
                        : 'hover:bg-gray-100'
                    }`}
                    disabled={showExplanation}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            
            {showExplanation && (
              <div className="mt-4">
                <Alert>
                  <AlertTitle>Explanation</AlertTitle>
                  <AlertDescription>
                    {questions[currentQuestion].explanation}
                  </AlertDescription>
                </Alert>
                <button
                  onClick={nextQuestion}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  {currentQuestion + 1 === questions.length ? 'See Results' : 'Next Question'}
                </button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LiDARQuiz;

