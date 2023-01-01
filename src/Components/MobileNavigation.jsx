import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import GitHubIcon from '@mui/icons-material/GitHub';

const MobileNavigation = (_) => {
  const [value, setValue] = React.useState(0);

  return (
    <Box id="mobileNavigation">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Contact"
          icon={<ContactPageIcon />}
          href="https://tranquil-castle-40340.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        />
        <BottomNavigationAction
          label="Github"
          icon={<GitHubIcon />}
          href="https://github.com/JordanVera/trivia"
          target="_blank"
          rel="noreferrer"
        />
        <BottomNavigationAction
          label="Questions"
          icon={<QuestionMarkIcon />}
          href="https://the-trivia-api.com/"
          target="_blank"
          rel="noreferrer"
        />
      </BottomNavigation>
    </Box>
  );
};
export default MobileNavigation;
