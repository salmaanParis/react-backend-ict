import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
import EmployeeForm from './components/EmployeeForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;



