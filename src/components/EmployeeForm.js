import React, { useState } from 'react';
import { Typography, Grid, TextField, Button, Container, Box } from '@mui/material';

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, designation, location, salary });
  };

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Employee Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Designation"
                variant="outlined"
                fullWidth
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Location"
                variant="outlined"
                fullWidth
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Salary"
                variant="outlined"
                type="number"
                fullWidth
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default EmployeeForm;
