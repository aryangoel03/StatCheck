import React, { useState, useEffect } from 'react';
import { completeHabit, getDate } from '../api/api';
import HabitCard from './HabitCard';

const DailyHabits = ({ date, data, handleCheckboxChange, handleDelete }) => {
    return (
        <div>
            <h3>Date: {date.toLocaleDateString()}</h3>
            <ul>
                {data ? data.habits.map(habit => (
                  <HabitCard habit={habit} handleCheckboxChange={handleCheckboxChange} handleDelete={handleDelete}/>
                )
                ) : <p>Couldn't get habits</p>}
            </ul>
        </div>
    );
}

export default DailyHabits;
