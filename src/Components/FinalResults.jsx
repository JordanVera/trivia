import Link from '@mui/material/Link';
import { Button } from 'ui-neumorphism';

const FinalResults = ({
  setQuestions,
  score,
  questions,
  setFinalResults,
  setScore,
  wrongChoices,
  setWrongChoices,
  setCurrentQuestion,
}) => {
  const refreshPage = (_) => {
    setFinalResults(false);
    setQuestions(null);
    setScore(0);
    setWrongChoices([]);
    setCurrentQuestion(0);
  };

  const percentageGrade = ((score / questions.length) * 100).toFixed(1);
  return (
    <>
      <div id="grade" className="mb-10">
        <h3 className>
          {score} out of {questions.length} correct - {percentageGrade}%
        </h3>
        {percentageGrade >= 70 ? (
          <h2 className="greenGlow passOrFail">you passed!</h2>
        ) : (
          <h2 className="redGlow">you failed!</h2>
        )}
      </div>

      <div id="wrongChoices" className="mb-10">
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

      <Button onClick={refreshPage} dark block className="mb-5">
        <p className="capitalize">Try Another Quiz</p>
      </Button>
    </>
  );
};

export default FinalResults;
