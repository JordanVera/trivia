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

  const refreshPage = (_) => {
    setFinalResults(false);
    setQuestions(null);
    setScore(0);
    setWrongChoices([]);
    setCurrentQuestion(0);
  };

  return loading ? (
    <Spinner />
  ) : (
    <>
      {!questions && (
        <Options setQuestions={setQuestions} setLoading={setLoading} />
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

      <div className="flex flex-row justify-between">
        <div className="w-[215px]">
          <p
            className="createdBy py-2 px-5 rounded-lg"
            style={{
              boxShadow:
                ' 4px 4px 4px 0px #363636 inset, -4px -4px 4px 0px #525252 inset',
            }}
          >
            Created by{' '}
            <a
              href="https://www.jordanvera.com/"
              target="_blank"
              rel="noreferrer"
              className="pink"
            >
              Jordan Vera
            </a>
          </p>
        </div>

        {questions && (
          <div>
            <btn
              className="py-2 px-5 rounded-lg pink"
              style={{
                boxShadow:
                  ' 4px 4px 4px 0px #363636 inset, -4px -4px 4px 0px #525252 inset',
              }}
              onClick={refreshPage}
            >
              Restart
            </btn>
          </div>
        )}
      </div>
    </>
  );
};

export default TriviaForm;
