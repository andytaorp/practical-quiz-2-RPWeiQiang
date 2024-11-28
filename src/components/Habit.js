import React from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */
export default function Habit({habit,onDeleteHabit,onToggleHabit}) {
    const habitStyle = {
        textDecoration: habit.complete ? "line-through" : "",
    }
    return( <li>

        <i className={!habit.complete?"fa-regular fa-square":"fa-solid fa-square-check"}  onClick={() => onToggleHabit(habit.id)}></i> 
        <div style={habitStyle}>
        {habit.habitName}
        </div>
        <button type="button" onClick={() => onDeleteHabit(habit.id)}>Delete</button>
    </li>
    )
   
}
