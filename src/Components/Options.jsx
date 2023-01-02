import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const Options = ({ setQuestions, setLoading }) => {
  const [category, setCategory] = React.useState('');
  const [difficulty, setDifficulty] = React.useState('');
  const [limit, setLimit] = React.useState(10);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDifficulty = (event) => {
    setDifficulty(event.target.value);
  };

  const handleLimit = (event) => {
    setLimit(event.target.value);
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const quizData = await fetch(
      `https://the-trivia-api.com/api/questions?categories=${category}&limit=${limit}&difficulty=${difficulty}`
    );

    const response = await quizData.json();

    setQuestions(response);

    setTimeout(() => setLoading(false), 1000);

    const form = document.getElementById('contactForm');
    form.reset();
  };

  return (
    <>
      {' '}
      <Typography
        variant="h1"
        className="neonHeader"
        sx={{ fontSize: '30px', py: 2 }}
      >
        Please select a category to be quized on
      </Typography>
      <form id="contactForm" onSubmit={onFormSubmit}>
        {/* Category */}
        <FormControl size="small" sx={{ my: 2 }} required fullWidth>
          <InputLabel id="demo-simple-select-label">Quiz Category</InputLabel>
          <Select
            labelid="demo-simple-select-label"
            id="categorySelect"
            value={category}
            label="category"
            onChange={handleChange}
          >
            <MenuItem value="arts_and_literature">Arts & Lierature</MenuItem>
            <MenuItem value="film_and_tv">Film & TV</MenuItem>
            <MenuItem value="food_and_drink">Food & Drink</MenuItem>
            <MenuItem value="general_knowledge">General Knowledge</MenuItem>
            <MenuItem value="geography">Geography</MenuItem>
            <MenuItem value="history">History</MenuItem>
            <MenuItem value="music">Music</MenuItem>
            <MenuItem value="science">Science</MenuItem>
            <MenuItem value="society_and_culture">Society & Culture</MenuItem>
            <MenuItem value="sport_and_leisure">Sport & Leisure</MenuItem>
          </Select>
        </FormControl>
        {/* Dificulty */}
        <FormControl size="small" sx={{ my: 2 }} required fullWidth>
          <InputLabel id="difficultyLabel">Difficulty</InputLabel>
          <Select
            labelid="difficultyLabel"
            id="difficultyLabel"
            value={difficulty}
            label="difficulty"
            onChange={handleDifficulty}
          >
            <MenuItem value="easy">Easy</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
          </Select>
        </FormControl>
        {/* No. of question */}
        <Typography gutterBottom sx={{ textAlign: 'left', mt: 1 }}>
          Number of questions
        </Typography>
        <Slider
          size="small"
          labelid="limit"
          min={1}
          max={20}
          defaultValue={10}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={handleLimit}
          required
        />
        {/* Submit */}
        <Button
          className="submitButton"
          variant="contained"
          type="submit"
          sx={{ width: '100%', my: 3 }}
        >
          Submit{' '}
        </Button>{' '}
      </form>
      <div id="google_translate_element"></div>
    </>
  );
};
export default Options;
