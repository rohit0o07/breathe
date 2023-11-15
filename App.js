import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [stage, setStage] = useState('Get Ready');
  const [counter, setCounter] = useState(0);
  const [duration, setDuration] = useState(1);

  useEffect(() => {
    const stages = {
      'Get Ready': 5,
      'Inhale': 4,
      'Hold': 7,
      'Exhale': 8
    };

    if (counter === 0) {
      const nextStage = {
        'Get Ready': 'Inhale',
        'Inhale': 'Hold',
        'Hold': 'Exhale',
        'Exhale': 'Inhale'
      };

      setStage(nextStage[stage]);
      setCounter(stages[nextStage[stage]]);
    } else {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter]);

  const startExercise = (minutes) => {
    setDuration(minutes * 60);
    setStage('Get Ready');
    setCounter(5);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="radio-input">
          <input name="challenge" value="Option 1" type="radio" id="1id" />
          <label for="1id">Never</label>
          <br />
          <input name="challenge" value="Option 2" type="radio" id="2id" />
          <label for="2id">Stop</label>
          <br />
          <input name="challenge" value="Option 3" type="radio" id="3id" />
          <label for="3id">Breathing </label>
          <br />
        </div>
      </div>
      <div className="app">
        <h1>Breathing Exercise</h1>
        <p>{stage}</p>
        <div
          className="circle"
          style={{ animationDuration: `${duration}s` }}
        ></div>
        <p>{counter}</p>
        <button onClick={() => startExercise(1)}>
          Start 1 Minute Exercise
        </button>
        <button onClick={() => startExercise(2)}>
          Start 2 Minute Exercise
        </button>
        <button onClick={() => startExercise(3)}>
          Start 3 Minute Exercise
        </button>
        <button onClick={() => startExercise(5)}>
          Start 5 Minute Exercise
        </button>
      </div>
    </div>
  );
};

export default App;
