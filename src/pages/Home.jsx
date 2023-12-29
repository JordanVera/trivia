import React, { useState } from 'react';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import TriviaForm from '../Components/TriviaForm';
import '../styles/App.scss';
import Navigation from '../Components/Navigation';
import MobileNavigation from '../Components/MobileNavigation';
import { Card, CardContent, CardAction, Button } from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';

const Home = (_) => {
  return (
    <>
      <Card dark id="wrapper">
        <CardContent>
          <TriviaForm />
        </CardContent>
        <CardAction>
          <p className="createdBy">
            Created by{' '}
            <a
              href="https://www.jordanvera.com/"
              target="_blank"
              rel="noreferrer"
            >
              Jordan Vera
            </a>
          </p>
        </CardAction>
      </Card>

      <Navigation />
      <MobileNavigation />
    </>
  );
};

export default Home;
