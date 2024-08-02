import React, { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
  Grid,
  CircularProgress,
  Snackbar
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import MuiAlert from '@mui/material/Alert';
import { appointments } from "../../constants/constants";

const AppointmentPage = () => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [patientName, setPatientName] = useState("");
  const [countryCode, setCountryCode] = useState("+92");
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleAppointmentSelect = (appointment) => {
    setSelectedAppointment(appointment);
    setSelectedTime("");
  };

  const handleTimeSelect = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setOpenSnackbar(true);
    }, 2000);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Card elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" component="h1" color='#00796b' gutterBottom align="center">
          Book an Appointment
        </Typography>
        <Typography variant="h6" component="h1" gutterBottom>
          Select Hospital/Clinic
        </Typography>
        <hr />
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            {appointments.map((appointment) => (
              <Card
                key={appointment.id}
                sx={{
                  mb: 2,
                  p: 1,
                  border: "1px solid green",
                  cursor: "pointer",
                  transition: "0.3s",
                  backgroundColor:
                    selectedAppointment?.id === appointment.id
                      ? alpha("#00c853", 0.1)
                      : "white",
                  "&:hover": {
                    backgroundColor: alpha("#00c853", 0.2),
                  },
                }}
                onClick={() => handleAppointmentSelect(appointment)}
              >
                <CardContent>
                  <Typography variant="h6">{appointment.vanue}</Typography>
                  <Typography>Fee: {appointment.fee}</Typography>
                  <p className="font-semibold">Availabilities:</p>
                  <ul className="flex list-disc list-inside">
                    {appointment.availableTimes.map((timeSlot, index) => (
                      <li key={index}>
                        &nbsp;
                        {timeSlot.time}{" "}
                        {timeSlot.isAvailable ? "(Available)" : "(Unavailable)"}
                        &nbsp; &nbsp;
                      </li>
                    ))}
                  </ul>
                  <Typography>Type: {appointment.type}</Typography>
                  <Typography>Location: {appointment.location}</Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
          {selectedAppointment && (
            <Grid item xs={12} md={12}>
              <form onSubmit={handleSubmit}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Selected Appointment: {selectedAppointment.vanue}
                </Typography>
                <FormControl fullWidth margin="normal">
                  <TextField
                    type="date"
                    label="Select Date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </FormControl>
                <FormControl fullWidth margin="normal">
                  <Select
                    value={selectedTime}
                    onChange={handleTimeSelect}
                    displayEmpty
                    required
                  >
                    <MenuItem value="" disabled>
                      Select a time
                    </MenuItem>
                    {selectedAppointment.availableTimes.map(
                      (timeSlot, index) => (
                        <MenuItem
                          key={index}
                          value={timeSlot.time}
                          disabled={!timeSlot.isAvailable}
                        >
                          {timeSlot.time}{" "}
                          {timeSlot.isAvailable ? "" : "(Unavailable)"}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                  <TextField
                    type="tel"
                    label="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <Select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          variant="outlined"
                        >
                          <MenuItem value="+91">+91</MenuItem>
                          <MenuItem value="+1">+1</MenuItem>
                          <MenuItem value="+44">+44</MenuItem>
                          <MenuItem value="+92">+92</MenuItem>
                        </Select>
                      ),
                    }}
                    required
                  />
                </FormControl>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Patient Name</InputLabel>
                  <TextField
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    required
                  />
                </FormControl>
                <Button
                  type="submit"
                  variant="contained"
                  color="#00796b"
                  fullWidth
                  disabled={loading}
                >
                  {loading ? (
                    <CircularProgress size={24} />
                  ) : selectedAppointment.type === "video" ? (
                    "Book Video Consultation"
                  ) : (
                    "Book Appointment"
                  )}
                </Button>
              </form>
            </Grid>
          )}
        </Grid>
      </Card>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Appointment booked successfully!
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default AppointmentPage;
