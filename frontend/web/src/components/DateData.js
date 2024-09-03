import React, { useState, useEffect } from 'react';

const DailyHabits = ({ date, habits }) => {
    return (
        <div>
            <h3>Date: {new Date(date).toLocaleDateString()}</h3>
            <ul>
                {habits.map((habit, index) => (
                  <li key={index}>
                    <p>Title: {habit.title}</p>
                    <p>Description: {habit.description}</p>
                    <p>Type: {habit.type}</p>
                    <p>Completed: {habit.completed ? 'Yes' : 'No'}</p>
                  </li>
                ))}
            </ul>
        </div>
      );
}

export default DailyHabits;