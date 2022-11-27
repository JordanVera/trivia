import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import FinalResults from './FinalResults';
import Options from './Options';
import Questions from './Questions';

export default function TriviaForm({ loading }) {
  const [questions, setQuestions] = useState(null);
  const [finalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);

  return !loading ? (
    <p>loading....</p>
  ) : (
    <>
      {!questions && (
        <>
          <Options setQuestions={setQuestions} />{' '}
          <Grid container spacing={2}>
            <Grid item sm={6}>
              {' '}
              <p className="createdBy">
                created by{' '}
                <a
                  href="https://tranquil-castle-40340.herokuapp.com/"
                  target="_blank"
                >
                  Jordan Vera
                </a>
              </p>
            </Grid>
            <Grid item sm={6}>
              <p className="apiShoutout">
                Questions from{' '}
                <a href="https://the-trivia-api.com/" target="_blank">
                  The Trivia API
                </a>
              </p>
            </Grid>
          </Grid>
        </>
      )}
      {questions && (
        <Questions
          questions={questions}
          score={score}
          setQuestions={setQuestions}
          setScore={setScore}
          setFinalResults={setFinalResults}
        />
      )}
      {finalResults && (
        <FinalResults
          setQuestions={setQuestions}
          setFinalResults={setFinalResults}
          questions={questions}
          score={score}
          setScore={setScore}
        />
      )}
    </>
  );
}
