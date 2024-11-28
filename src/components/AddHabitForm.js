import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!habitName) return; 
    onAddHabit({ id: Date.now().toString(), habitName, complete: false });
    setHabitName("");
  };
  return (
    //TODO: add a form to add a new habit
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="New Habit" value={habitName} onChange={(e) => setHabitName(e.target.value)}></input>
      <button type="submit">Add Habit</button>
    </form>
  );
}
