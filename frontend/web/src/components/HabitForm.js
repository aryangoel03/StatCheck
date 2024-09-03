import React, { useState } from 'react';

const HabitForm = ({ handleSubmit }) => {
  // State for the form fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('Health');

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = {
//       title,
//       description,
//       type,
//     };
//     console.log('Form Data:', formData);
//     // Here you can handle the form data, like sending it to a server
//   };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Type:
          <select value={type} onChange={(e) => setType(e.target.value)}>
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
