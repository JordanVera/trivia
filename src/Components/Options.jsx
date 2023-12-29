import React, { useState } from 'react';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Slider,
  Typography,
} from '@mui/material';
import { Button } from 'ui-neumorphism';

import { styled } from '@mui/system';

const NeumorphicSelect = styled(Select)`
  background-color: #444;
  border-radius: 8px;
  box-shadow: -2px -2px 8px rgba(255, 255, 255, 0.1),
    2px 2px 8px rgba(0, 0, 0, 0.5);
  padding: 8px 16px;
  transition: box-shadow 0.3s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3),
      -6px -6px 12px rgba(255, 255, 255, 0.7), 0 0 0 2px #1976d2;
    border: none !important;
  }
`;

const Options = ({ setQuestions, setLoading }) => {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [limit, setLimit] = React.useState(10);

  const [value, setValue] = useState(10);

  const handleRangeChange = (event) => {
    setValue(event.target.value);
  };

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
      <h1 className="neonHeader capitalize font-bold mb-5 text-2xl">
        Please select a category to be quized on
      </h1>
      <form onSubmit={onFormSubmit} className="m-0 p-0" id="contactForm">
        {/* Category */}
        <FormControl
          size="small"
          sx={{ my: 2, border: 'none' }}
          required
          fullWidth
        >
          <InputLabel id="demo-simple-select-label">Quiz Category</InputLabel>

          <NeumorphicSelect
            labelid="demo-simple-select-label"
            id="categorySelect"
            value={category}
            label="category"
            onChange={handleChange}
            className="h-10"
            sx={{ border: 'none' }} // BEGIN: Added this line to remove border
          >
            <MenuItem value="arts_and_literature" selected>
              Arts & Lierature
            </MenuItem>
            <MenuItem value="film_and_tv">Film & TV</MenuItem>
            <MenuItem value="food_and_drink">Food & Drink</MenuItem>
            <MenuItem value="general_knowledge">General Knowledge</MenuItem>
            <MenuItem value="geography">Geography</MenuItem>
            <MenuItem value="history">History</MenuItem>
            <MenuItem value="music">Music</MenuItem>
            <MenuItem value="science">Science</MenuItem>
            <MenuItem value="society_and_culture">Society & Culture</MenuItem>
            <MenuItem value="sport_and_leisure">Sport & Leisure</MenuItem>
            {/* MenuItems */}
          </NeumorphicSelect>
        </FormControl>

        {/* Dificulty */}
        <FormControl size="small" sx={{ my: 2 }} required fullWidth>
          <InputLabel id="difficultyLabel">Difficulty</InputLabel>
          <NeumorphicSelect
            labelid="difficultyLabel"
            id="difficultyLabel"
            value={difficulty}
            label="difficulty"
            onChange={handleDifficulty}
            className="h-10"
            sx={{ border: 'none' }} // BEGIN: Added this line to remove border
          >
            <MenuItem value="easy">Easy</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
          </NeumorphicSelect>
        </FormControl>
        <div className="mb-10 mt-5">
          {/* ...existing code... */}
          <h2 className="text-left text-sm  mb-2">
            Number of questions: <span className="range-value">{limit}</span>
          </h2>
          <input
            type="range"
            className="range-style"
            min={1}
            max={20}
            defaultValue={10}
            value={limit}
            onChange={handleLimit}
            required
          />
          {/* ...existing code... */}
        </div>

        <button className="w-full">
          {' '}
          <Button dark block className="mb-5">
            Submit{' '}
          </Button>
        </button>
      </form>
      {/* <div id="google_translate_element"></div> */}
    </>
  );
};
export default Options;
