import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navigation = (_) => {
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
      id="speedDial"
    >
      <SpeedDialAction
        key={1}
        icon={<ContactPageIcon />}
        tooltipTitle="Contact"
        href="https://tranquil-castle-40340.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
      />
      <SpeedDialAction
        key={1}
        icon={<GitHubIcon />}
        tooltipTitle="Github Repo"
        href="https://github.com/JordanVera/trivia"
        target="_blank"
        rel="noreferrer"
      />
      <SpeedDialAction
        key={2}
        icon={<QuestionMarkIcon />}
        tooltipTitle="Question Data"
        href="https://the-trivia-api.com/"
        target="_blank"
        rel="noreferrer"
      />
    </SpeedDial>
  );
};

export default Navigation;
