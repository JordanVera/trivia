import React, { useEffect, useState } from 'react';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';
import shuffle from '../utils/shuffle';
import { Button } from 'ui-neumorphism';

const Questions = ({
  questions,
  setQuestions,
  setFinalResults,
  setScore,
  score,
  setWrongChoices,
  wrongChoices,
  setLoading,
  currentQuestion,
  setCurrentQuestion,
}) => {
  const [selectedAnswer, setselectedAnswer] = useState(null);
  const [shuffledChoices, setShuffledChoices] = useState([]);
  const correctAnswer = questions[currentQuestion].correctAnswer;

  useEffect(() => {
    setLoading(false);
  });

  const submitQuestion = (data) => {
    const badChoiceData = {
      data,
      correctAnswer,
      question: questions[currentQuestion].question,
      questionNumber: currentQuestion + 1,
    };

    if (data === correctAnswer) {
      setScore(score + 1);
    }

    if (data !== correctAnswer) {
      setWrongChoices([...wrongChoices, badChoiceData]);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
      document.getElementById('questions').hidden = true;
    }
  };

  const refreshPage = (_) => {
    setFinalResults(false);
    setQuestions(null);
    setScore(0);
    setWrongChoices([]);
    setCurrentQuestion(0);
  };

  useEffect(() => {
    const choicesToShuffle = [
      ...questions[currentQuestion].incorrectAnswers,
      questions[currentQuestion].correctAnswer,
    ];
    setShuffledChoices(shuffle(choicesToShuffle));
  }, [currentQuestion, questions]);

  return (
    <div id="questions">
      <h2 className="question font-bold text-xl mb-5">{`${
        currentQuestion + 1
      }. ${questions[currentQuestion].question}`}</h2>
      <div className="radiogroup mb-5 text-left">
        {shuffledChoices.map((choice, y) => {
          const choiceId = `choice-${y}`;
          return (
            <div key={choiceId} className="wrapper">
              <input
                className="state"
                type="radio"
                name={`${questions[currentQuestion].id}`}
                id={choiceId}
                value={choice}
                onChange={(e) => setselectedAnswer(e.target.value)}
              />
              <label className="label" htmlFor={choiceId}>
                <div className="indicator"></div>
                <span className="text">{choice}</span>
              </label>
            </div>
          );
        })}
      </div>

      <Button
        dark
        block
        className="mb-5 "
        onClick={() => submitQuestion(selectedAnswer)}
      >
        <p className="capitalize">Submit</p>
      </Button>
      <Button onClick={refreshPage} dark block className="mb-5 ">
        <p className="capitalize">Restart</p>
      </Button>
    </div>
  );
};

export default Questions;
