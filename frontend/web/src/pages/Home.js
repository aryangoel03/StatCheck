import React, { useState, useEffect } from 'react';
import { addDate, getDate } from '../api/api';
import { Link } from 'react-router-dom';
import DailyHabits from "../components/DateData";

const Home = () => {

  const [data, setData] = useState(null);
  const [date, setDate] = useState(new Date(new Date().setHours(0, 0, 0, 0)));

  useEffect(() => {
    const fetchDate = async() => {
      const data = await getDate(date);
      setData(data);
    };
    fetchDate();
  });

  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      {data ? (<DailyHabits date={data.date} habits={data.habits}/>) : (<p>date</p>)}
    </div>
  );
};

export default Home;
