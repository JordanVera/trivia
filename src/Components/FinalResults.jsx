import Link from '@mui/material/Link';

const FinalResults = ({
  setQuestions,
  score,
  questions,
  setFinalResults,
  setScore,
  wrongChoices,
  setWrongChoices,
}) => {
  const refreshPage = () => {
    setFinalResults(false);
    setQuestions(null);
    setScore(0);
    setWrongChoices([]);
  };

  const percentageGrade = ((score / questions.length) * 100).toFixed(1);
  return (
    <>
      <div id="grade">
        <h3>
          {score} out of {questions.length} correct - {percentageGrade}%
        </h3>
        {percentageGrade >= 70 ? (
          <h2 className="greenGlow passOrFail">you passed!</h2>
        ) : (
          <h2 className="redGlow">you failed!</h2>
        )}
      </div>

      <div id="wrongChoices">
        {wrongChoices.map((badChoice) => {
          return (
            <>
              <h3>{badChoice.question}</h3>
              <p>
                <span className="bold redGlow">Your Answer:</span>{' '}
                {badChoice.data}
              </p>
              <p>
                <span className="bold greenGlow">Correct Answer:</span>{' '}
                {badChoice.correctAnswer}
              </p>
            </>
          );
        })}
      </div>

      <Link onClick={refreshPage} className="pink refreshLink">
        Try Another Quiz!
      </Link>
    </>
  );
};

export default FinalResults;
