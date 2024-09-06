import React, { useState, useEffect } from 'react';
import { addDate, getDate, addHabit } from '../api/api';
import { Link } from 'react-router-dom';
import DailyHabits from "../components/DateData";
import HabitForm from '../components/HabitForm';

const Home = () => {

  const [data, setData] = useState(null);
  const [date, setDate] = useState(new Date(new Date().setHours(0, 0, 0, 0)));
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    const fetchDate = async() => {
      try {
        const fetchedData = await getDate(date);
        setData(fetchedData);
      }
      catch(error) {
      }
    };
    fetchDate();
  }, [adding]);

  const handleAddHabit = async (habitInfo) => {
    try {
        setAdding(true);
        await addHabit(habitInfo);
        setAdding(false);
    } catch (error) {
        console.error("Adding habit failed: ", error.message);
        throw error;
    }
}

  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      {data ? (<><DailyHabits date={data.date} habits={data.habits} /><HabitForm handleSubmit={handleAddHabit} /></>) : (<p>date</p>)}
    </div>
  );
};

export default Home;
