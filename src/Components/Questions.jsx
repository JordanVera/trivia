import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import shuffle from '../utils/shuffle';

const Questions = ({ questions, setFinalResults, setScore, score }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const optionClicked = (data) => {
    if (data === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      console.log(true);
    }
    console.log(false);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
      document.getElementById('questions').hidden = true;
    }
  };

  return (
    <div id="questions">
      <h2>{`${currentQuestion + 1}. ${
        questions[currentQuestion].question
      }`}</h2>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name={`${questions[currentQuestion].id}`}
        className={`${questions[currentQuestion].id}`}
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
              onClick={() => optionClicked(choice)}
            />
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default Questions;
