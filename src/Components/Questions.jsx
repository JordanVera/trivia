import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import shuffle from '../utils/shuffle';

const Questions = ({
  questions,
  setFinalResults,
  setScore,
  score,
  setWrongChoices,
  wrongChoices,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const correctAnswer = questions[currentQuestion].correctAnswer;

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

  return (
    <div id="questions">
      <h2 className='question'>{`${currentQuestion + 1}. ${
        questions[currentQuestion].question
      }`}</h2>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name={`${questions[currentQuestion].id}`}
        className={`${questions[currentQuestion].id}`}
      >
        {[
          ...questions[currentQuestion].incorrectAnswers,
          questions[currentQuestion].correctAnswer,
        ].map((choice, y) => {
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
    </div>
  );
};

export default Questions;
