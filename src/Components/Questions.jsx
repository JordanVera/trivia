import React, { useEffect } from 'react';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';
import shuffle from '../utils/shuffle';
import Link from '@mui/material/Link';
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
  const correctAnswer = questions[currentQuestion].correctAnswer;

  useEffect(() => {
    setLoading(false);
  });

  const optionClicked = (data) => {
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

  return (
    <div id="questions">
      <h2 className="question font-bold text-xl mb-5">{`${
        currentQuestion + 1
      }. ${questions[currentQuestion].question}`}</h2>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name={`${questions[currentQuestion].id}`}
        className={`${questions[currentQuestion].id} mb-10`}
      >
        {shuffle([
          ...questions[currentQuestion].incorrectAnswers,
          questions[currentQuestion].correctAnswer,
        ]).map((choice, y) => {
          return (
            <FormControlLabel
              key={`${y}`}
              value={`${choice}`}
              control={<Radio />}
              label={`${choice}`}
              onChange={() => optionClicked(choice)}
            />
          );
        })}
      </RadioGroup>

      <Button onClick={refreshPage} dark block className="mb-5 ">
        <p className="capitalize">Restart</p>
      </Button>
    </div>
  );
};

export default Questions;
