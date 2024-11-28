import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault()
    const item={
      
      id:Date.now(),
      habitName,
      complete:false,
    };
    onAddHabit(item)
    setHabitName("")
  
  };

  return (
    //TODO: add a form to add a new habit
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="New Habit" value={habitName} onChange={(e) => setHabitName(e.target.value)}></input>
      <button type="submit">Add Habit</button>
    </form>
  );
}
