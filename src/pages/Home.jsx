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
      <Card dark id="wrapper" className=" p-5">
        <CardContent>
          <TriviaForm />

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
        </CardContent>
      </Card>

      <Navigation />
      <MobileNavigation />
    </>
  );
};

export default Home;
