import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Avatar,
  Button,
  keyframes,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const AboutUs = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundImage:
            "url(https://static.marham.pk/assets/images/about_us/about_us_banner.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: `${fadeIn} 2s ease-in-out`,
          color: "white",
          width: "95%",
          height: "60vh",
          marginTop: "50px",
          margin: "50px",
          overflowX: "hidden",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            animation: `${fadeIn} 2s ease-in-out`,
          }}
        >
          About Us
        </Typography>
        <Typography
          sx={{
            animation: `${fadeIn} 2s ease-in-out`,
          }}
        >
          Welly Psicolog A - Find, Book & Consult Therapists
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "50px",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Problems we are solving
        </Typography>
        <Typography variant="body" fontWeight="bold">
          70% patients suffers severely because they are unable to connect with
          doctor timely due to:
        </Typography>

        {/* 
         1. Lack of awareness about the availability of doctors -> https://static.marham.pk/assets/images/about_us/lack_of_information.png
          2. poor Accessibility -> https://static.marham.pk/assets/images/about_us/lack_of_trust.png
          3. No Gp Triage -> https://static.marham.pk/assets/images/about_us/no_gp_triage.png
         */}
        <Card
          style={{
            width: "60%",
            marginTop: "20px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "80%",
                  margin: "auto",
                }}
              >
                <img
                  src="https://static.marham.pk/assets/images/about_us/lack_of_information.png"
                  alt="Lack of Information"
                />
                <Typography variant="h6" color="#194E78">
                  Lack of Information
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "80%",
                  margin: "auto",
                }}
              >
                <img
                  src="https://static.marham.pk/assets/images/about_us/poor_accessibility.png"
                  alt="Poor Accessibility"
                />
                <Typography variant="h6" color="#194E78">
                  Poor Accessibility
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "80%",
                  margin: "auto",
                }}
              >
                <img
                  src="https://static.marham.pk/assets/images/about_us/no_gp_triage.png"
                  alt="No GP Triage"
                />
                <Typography variant="h6" color="#194E78">
                  No GP Triage
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
        <Card
          style={{
            width: "60%",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardHeader title="Our Values" />
          </div>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "80%",
                    margin: "auto",
                  }}
                >
                  <img
                    src="https://static.marham.pk/assets/images/about_us/Selflessness.svg"
                    alt="selflesness"
                  />
                  <Typography variant="h5" color="#194E78">
                    Selflessness
                  </Typography>
                  <Typography>- Patients & Marham First</Typography>
                  <Typography>- Humble with teammates</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "80%",
                    margin: "auto",
                  }}
                >
                  <img
                    src="https://static.marham.pk/assets/images/about_us/Kindness.svg"
                    alt="selflesness"
                  />
                  <Typography variant="h5" color="#194E78">
                    Kindness
                  </Typography>
                  <Typography>- Good listening ability</Typography>
                  <Typography>- Calm in stressful situations</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "80%",
                    margin: "auto",
                  }}
                >
                  <img
                    src="https://static.marham.pk/assets/images/about_us/Kindness.svg"
                    alt="selflesness"
                  />
                  <Typography variant="h5" color="#194E78">
                    Passion
                  </Typography>
                  <Typography>- Strive for excellence</Typography>
                  <Typography>- Start to Aim big</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "80%",
                    margin: "auto",
                  }}
                >
                  <img
                    src="https://static.marham.pk/assets/images/about_us/Passion.svg"
                    alt="selflesness"
                  />
                  <Typography variant="h5" color="#194E78">
                    Integrity
                  </Typography>
                  <Typography>- Strive for excellence</Typography>
                  <Typography>- Start to Aim big</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "80%",
                    margin: "auto",
                  }}
                >
                  <img
                    src="https://static.marham.pk/assets/images/about_us/Passion.svg"
                    alt="selflesness"
                  />
                  <Typography variant="h5" color="#194E78">
                    Speed
                  </Typography>
                  <Typography>- Be Ambitious</Typography>
                  <Typography>- Re-think estimates</Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Our mission */}
        <Card
          style={{
            width: "60%",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardHeader title="Our Mission" />
          </div>
          <CardContent>
            <Typography>
              Our mission is to provide a platform where patients can easily
              find and book the right doctor and consult them without any
              hassle. We aim to provide a platform where patients can easily
              find and book the right doctor and consult them without any
              hassle.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default AboutUs;
