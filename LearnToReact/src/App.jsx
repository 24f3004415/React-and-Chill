import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from "./context/UserContext"; // Make sure you're importing correctly
import Home from './Components/Home';
import NavBar2 from './Components/NavBar2';
import Profile from './Components/Profile';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import MiniDrawer from './Components/MiniDrawer';
import Contact from './Components/Contact';
import JobList from './Components/Day-3/JobList';
import CardContain from './Components/Day-1/CardContain';
import ContactList from './Components/Day-4/ContactList';
import Stopwatch from './Components/Day-5/Stopwatch';
import Jokeapi from './Components/Day-6/Jokeapi';
import BlogList from './Components/Day-7/BlogList';
import { BlogProvider } from './context/BlogContext';

function App() {
  return (
    <ThemeProvider> {/* Wrap the whole app with ThemeProvider */}
      <ThemeApp /> {/* Render the ThemeApp inside ThemeProvider */}
    </ThemeProvider>
  );
}

function ThemeApp() {
  // Now use the `useTheme` hook inside the component wrapped by ThemeProvider
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        style={{
          background: theme === "light" ? "#fff" : "#000",
          color: theme === "light" ? "#000" : "#fff",
          padding: "10px",
          marginTop: "20px"
        }}
      >
        Change theme
      </button>


      <BlogProvider>
        <BlogList></BlogList>
      </BlogProvider>


      <p>Current theme: {theme}</p>

      <NavBar2 />

      <div>
        <h1>Simple theme</h1>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/job' element={<JobList />} />
        <Route path='/card' element={<CardContain />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/Login' element={<LogIn />} />
        <Route path='/MiniDrawer' element={<MiniDrawer />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/ContactList' element={<ContactList />} />
        <Route path='/Joke' element={<Jokeapi />} />
      </Routes>

      {/* Stopwatch Component */}
      <Stopwatch />
    </Router>
  );
}

export default App;
