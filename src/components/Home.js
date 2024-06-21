import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import EmployeeCard from './EmployeeCard';

const Home = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      {employees.map(employee => (
        <Grid item xs={12} sm={6} md={4} key={employee.id}>
          <EmployeeCard employee={employee} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;




