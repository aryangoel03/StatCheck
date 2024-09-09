import React, { useState, useEffect } from 'react';
import { addDate, getDate, addHabit, completeHabit, deleteHabit } from '../api/api';
import { Link } from 'react-router-dom';
import DailyHabits from "../components/DateData";
import HabitForm from '../components/HabitForm';

const Home = () => {
  const [date, setDate] = useState(new Date(new Date().setHours(0, 0, 0, 0)));
  const [data, setData] = useState(null);
  const [changing, setChanging] = useState(false);

  const handleAddHabit = async (habitInfo) => {
    try {
        setChanging(true);
        await addHabit(habitInfo);
    } catch (error) {
        console.error("Adding habit failed: ", error.message);
        throw error;
    } finally {
      setChanging(false);
    }
  }

  const handleCheckboxChange = async (habitId, completed) => {
    try {
        setChanging(true);
        await completeHabit(habitId, completed); // Wait for the API call to complete
    } catch (error) {
        console.error('Error completing habit:', error); // Log the error to help with debugging
    } finally {
        setChanging(false);
    }
  };

  const handleDelete = async ( habitId ) => {
    try {
      setChanging(true);
      await deleteHabit(habitId);
    } catch(error) {
      console.error('Error deleting habit', error);
    } finally {
      setChanging(false);
    }
  }

  useEffect(() => {
    const fetchDate = async () => {
      const fetchedData = await getDate(date);
      setData(fetchedData);
    }
    fetchDate();
  }, [date, changing]);

  return (
    <div className='home-page'>
      <h1>Your Habits :)</h1>
      <DailyHabits date={date} data={data} handleCheckboxChange={handleCheckboxChange} handleDelete={handleDelete}/>
      <HabitForm handleSubmit={handleAddHabit} />
    </div>
  );
};

export default Home;
