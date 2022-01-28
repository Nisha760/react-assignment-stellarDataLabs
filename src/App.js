import React from 'react';
import './App.css';
import Candidates from './components/Candidates';
import NewCandidate from './components/NewCandidate';
import ContextWrapper from './context/ContextWrapper';

function App() {
  return (
    <>
      <ContextWrapper>
        <div>
          <Candidates></Candidates>
        </div>
        <div>
          <NewCandidate></NewCandidate>
        </div>
      </ContextWrapper>
    </>
  );
}

export default App;
