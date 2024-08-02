import React from 'react';
import { Card, CardContent, Grid, Typography, LinearProgress, IconButton, Box } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import TherapistCard from './TherapistCard';

const reviewsData = {
  totalReviews: 130,
  averageRating: 5,
  waitTime: '8 mins',
  avgTimeToPatient: '18 mins',
  patientSatisfaction: 4.9,
  diagnosis: 4.95,
  staffBehaviour: 4.95,
  clinicEnvironment: 5
};

function ReviewProgress({ label, value }) {
  return (
    <Box display="flex" flexDirection="column" mb={2}>
      <Box display="flex" alignItems="center" mb={1}>
        <Typography variant="body2" flex={1}>
          {label}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {`${value}/5`}
        </Typography>
      </Box>
      <LinearProgress
        variant="query"
        value={(value / 5) * 100}
        sx={{ height: 10, borderRadius: 5, bgcolor: 'green' }}
      />
    </Box>
  );
}

function DoctorDetails({ therapist, onBack }) {
  return (
    <div>
      <IconButton onClick={() => onBack()}>
        <ArrowBack />
      </IconButton>
      <TherapistCard
        name={therapist.name}
        profile_image={therapist.profile_image}
        isNRMCVarified={therapist.isNRMCVarified}
        title={therapist.title}
        qualification={therapist.qualification}
        rating={therapist.rating}
        experience={therapist.experience}
        satisfaction={therapist.satisfaction}
        consultations={therapist.consultations}
      />
      <Card sx={{ mt: 2 }}>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {reviewsData.totalReviews} Reviews
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {reviewsData.averageRating}/5 Average rating based on {reviewsData.totalReviews} reviews.
          </Typography>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={6}>
              <Typography variant="body2" color="textSecondary">Wait Time</Typography>
              <Typography variant="body1">{reviewsData.waitTime}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="textSecondary">Avg. Time to Patient</Typography>
              <Typography variant="body1">{reviewsData.avgTimeToPatient}</Typography>
            </Grid>
          </Grid>
          <Box mt={2}>
            <ReviewProgress label="Patient Satisfaction" value={reviewsData.patientSatisfaction} />
            <ReviewProgress label="Diagnosis" value={reviewsData.diagnosis} />
            <ReviewProgress label="Staff Behaviour" value={reviewsData.staffBehaviour} />
            <ReviewProgress label="Clinic Environment" value={reviewsData.clinicEnvironment} />
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default DoctorDetails;
