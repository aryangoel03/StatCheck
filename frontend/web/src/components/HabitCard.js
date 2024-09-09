import React from "react";
import '../App.css';

function HabitCard({ habit, handleCheckboxChange, handleDelete }) {
    return (
        <div className="habit-card">
            <div className="habit-header">
                <h3 className="habit-title">{habit.title}</h3>
                <button className="delete-habit" onClick={() => handleDelete(habit.habitId)}>✖</button>
            </div>
            <div className="habit-content">
                <p className="habit-description">{habit.description}</p>
                <p className="habit-type">{habit.type}</p>
                <input
                    type="checkbox"
                    className="habit-checkbox"
                    checked={habit.completed}
                    onChange={() => handleCheckboxChange(habit._id, habit.completed)}
                />
            </div>
        </div>
    );
}

export default HabitCard;
