import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const FinalResults = ({
  setQuestions,
  score,
  questions,
  setFinalResults,
  setScore,
}) => {
  const refreshPage = () => {
    setFinalResults(false);
    setQuestions(null);
    setScore(0);
  };

  const percentageGrade = ((score / questions.length) * 100).toFixed(1);
  return (
    <>
      <div>
        {score} out of {questions.length} correct - {percentageGrade}%
      </div>
      {percentageGrade >= 70 ? (
        <div className="mb-12">you passed!</div>
      ) : (
        <div className="mb-12">you failed!</div>
      )}

      <Link onClick={refreshPage} className="pink refreshLink">
        Try Another Quiz!
      </Link>
    </>
  );
};

export default FinalResults;
