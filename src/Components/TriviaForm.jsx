import React, { useState } from 'react';

import FinalResults from './FinalResults';
import Options from './Options';
import Questions from './Questions';
import Spinner from './Spinner';

const TriviaForm = (_) => {
  const [questions, setQuestions] = useState(null);
  const [finalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionsLength, setQuestionsLength] = useState(0);
  const [wrongChoices, setWrongChoices] = useState([]);
  const [loading, setLoading] = useState(false);

  return loading ? (
    <Spinner />
  ) : (
    <>
      {!questions && (
        <>
          <Options setQuestions={setQuestions} setLoading={setLoading} />{' '}
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
          setLoading={setLoading}
          setFinalResults={setFinalResults}
          wrongChoices={wrongChoices}
          setWrongChoices={setWrongChoices}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      )}
      {finalResults && (
        <FinalResults
          setQuestions={setQuestions}
          setFinalResults={setFinalResults}
          questions={questions}
          setCurrentQuestion={setCurrentQuestion}
          score={score}
          setScore={setScore}
          wrongChoices={wrongChoices}
          setWrongChoices={setWrongChoices}
        />
      )}
    </>
  );
};

export default TriviaForm;
