

1
Create the Register and Login Pages

2
Step 1: Develop the RegisterPage component

3
Step 2: Develop the login page component

4
Step 3: Create routes in App.js

5
Step 4: Push changes to GitHub
Step 3: Create routes in App.js
The App.js file contains the main Express application.

Tasks
Go to App.js and import RegisterPagee.js LoginPage.js.
Create routes for both RegisterPage and LoginPage components under <Routes></Routes>
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
function App() {
  const navigate = useNavigate();
  return (
        <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/app" element={<MainPage />} />
          <Route path="/app/login" element={<LoginPage/>} />
          <Route path="/app/register" element={<RegisterPage />} />
        </Routes>
        </>
  );
}
export default App;
Copied!

