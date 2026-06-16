import type { Route } from "./+types/home";
import  App  from "~/component/MoodSelector";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <App />;
}

// React Exam — Mood Tracker
// Build a simple Mood Tracker application using React.
// Your app should allow users to record their mood during the day and view their mood history.

// Requirements:
// Create separate components:
// MoodSelector
// MoodHistory
// MoodItem
// Summary
// Use useState to manage application data.
// Display mood options:
// 😄 Happy
// 😐 Neutral
// 😢 Sad
// 😴 Sleepy
// When a mood is selected:
// Add it to the history

// Example history:

// 😄 Happy
// 😢 Sad
// 😴 Sleepy
// 😄 Happy
// Create MoodItem as a reusable component.
// Pass data between components using props.
// Show a summary section:
// Total moods recorded
// Last selected mood

// Example:

// Total moods: 4
// Last mood: 😄 Happy
// If there is no mood recorded, show:
// No moods recorded
// Rules:
// Each component must be in a separate file.
// Use only useState for state management.
// Do not use external libraries.
// Do not use localStorage.
// Bonus (Optional):

// Add a Clear History button.

// Good luck
