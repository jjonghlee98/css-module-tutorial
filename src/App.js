import React, { useState } from 'react';

import './App.css';
import CourseInput from './components/CoursGoals/CourseInput/CourseInput';
import CourseGoalList from './components/CoursGoals/CourseGoalList/CourseGoalList';

const App = () => {
  const [enteredGoal, setEnteredGoal] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' },
  ]);

  const addGoalHandler = (enteredText) => {
    setEnteredGoal((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteGoalHandler = (goalId) => {
    setEnteredGoal((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = <p style={{ textAlign: 'center' }}>Goals not found.</p>;

  if (enteredGoal.length > 0) {
    content = (
      <CourseGoalList items={enteredGoal} onDelete={deleteGoalHandler} />
    );
  }

  return (
    <div>
      <section id='goal-form'>
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id='goals'>{content}</section>
    </div>
  );
};

export default App;
