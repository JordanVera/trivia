import React, { useState } from 'react';

import FinalResults from './FinalResults';
import Options from './Options';
import Questions from './Questions';

export default function TriviaForm({ loading }) {
  const [questions, setQuestions] = useState(null);
  const [finalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongChoices, setWrongChoices] = useState([]);

  return !loading ? (
    <p>loading....</p>
  ) : (
    <>
      {!questions && (
        <>
          <Options setQuestions={setQuestions} />{' '}
          <p className="createdBy">
            Created by{' '}
            <a
              href="https://tranquil-castle-40340.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Jordan Vera
            </a>
          </p>
        </>
      )}
      {questions && (
        <Questions
          questions={questions}
          score={score}
          setQuestions={setQuestions}
          setScore={setScore}
          setFinalResults={setFinalResults}
          wrongChoices={wrongChoices}
          setWrongChoices={setWrongChoices}
        />
      )}
      {finalResults && (
        <FinalResults
          setQuestions={setQuestions}
          setFinalResults={setFinalResults}
          questions={questions}
          score={score}
          setScore={setScore}
          wrongChoices={wrongChoices}
          setWrongChoices={setWrongChoices}
        />
      )}
    </>
  );
}
