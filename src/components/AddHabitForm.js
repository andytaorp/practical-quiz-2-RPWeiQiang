import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault()
    const item={
      id:habitName,
      habitName,
      complete:false,
    };
    onAddHabit(item)
    setHabitName("")
  
  };

  return (
    //TODO: add a form to add a new habit
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add habit" value={habitName} onChange={(e) => setHabitName(e.target.value)}></input>
      <button type="submit">Add</button>
    </form>
  );
}
