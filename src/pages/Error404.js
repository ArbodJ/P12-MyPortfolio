import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';

const Error404 = () => {
  return (
    <div>
      <Header />
      <h1>!!! AOUCH !!!</h1>
      <p>What you mean, yes, no, maybe, i don't know, can you repeat the question ?</p>
      <Navigation />
    </div>
  );
};

export default Error404;