import React, { useState } from 'react';

const HabitForm = ({ handleSubmit }) => {
  // State for the form fields
  const [formData, setFormData] = useState({
    title: "New Habit",
    description: "",
    type: "Health"
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
        await handleSubmit(formData);
    } catch (error) {
        console.error("Form submission error:", error);
        setError(error.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>
          Title:
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Description:
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Type:
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="Health">Health</option>
            <option value="Intelligence">Intelligence</option>
            <option value="Wisdom">Wisdom</option>
            <option value="Strength">Strength</option>
            <option value="Charisma">Charisma</option>
          </select>
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default HabitForm;
