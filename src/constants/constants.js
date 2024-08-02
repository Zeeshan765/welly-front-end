export const therapistData = [
  {
    id: 1,
    profile_image: "https://via.placeholder.com/150",
    name: "Dr. John Doe",
    isNRMCVarified: true,
    title: "Senior Therapist",
    qualification: "PhD in Physiotherapy",
    rating: 4.5,
    experience: 10,
    satisfaction: 90,
    consultations: [
      {
        type: "Video Call",
        fee: "Rs. 500",
        availability: true,
        location: "143 St, Mian Chanun",
      },
      {
        type: "On-Site Consultation",
        fee: "Rs. 1000",
        availability: false,
        location: "123 Main St, City",
      },
      {
        type: "Home Visit",
        fee: "Rs. 1500",
        availability: true,
        location: "Client's Address",
      },
    ],
  },
  {
    id: 2,
    profile_image: "https://via.placeholder.com/150",
    name: "Dr. Jane Doe",
    isNRMCVarified: false,
    title: "Junior Therapist",
    qualification: "Masters in Physiotherapy",
    rating: 4.0,
    experience: 5,
    satisfaction: 80,
    consultations: [
      {
        type: "Video Call",
        fee: "Rs. 300",
        availability: true,
        location: "143 St, Mian Chanun",
      },
      {
        type: "On-Site Consultation",
        fee: "Rs. 800",
        availability: true,
        location: "123 Main St, City",
      },
      {
        type: "Home Visit",
        fee: "Rs. 1200",
        availability: false,
        location: "Client's Address",
      },
    ],
  },
  {
    id: 3,
    profile_image: "https://via.placeholder.com/150",
    name: "Dr. James Doe",
    isNRMCVarified: true,
    title: "Therapist",
    qualification: "Bachelors in Physiotherapy",
    rating: 3.5,
    experience: 2,
    satisfaction: 70,
    consultations: [
      {
        type: "Video Call",
        fee: "Rs. 200",
        availability: true,
        location: "143 St, Mian Chanun",
      },
      {
        type: "On-Site Consultation",
        fee: "Rs. 600",
        availability: true,
        location: "123 Main St, City",
      },
      {
        type: "Home Visit",
        fee: "Rs. 1000",
        availability: true,
        location: "Client's Address",
      },
    ],
  },
];

export const appointments = [
  {
    id: 1,
    vanue: "Video Call",
    fee: "Rs. 500",
    type: "online",
    availableTimes: [
      {
        time: "10:00 AM",
        isAvailable: true,
      },
      {
        time: "11:00 AM",
        isAvailable: true,
      },
      {
        time: "12:00 PM",
        isAvailable: false,
      },
      {
        time: "01:00 PM",
        isAvailable: true,
      },
    ],
    location: "Online",
  },
  {
    id: 2,
    vanue: "On-Site Consultation",
    fee: "Rs. 1000",
    type: "offline",
    availableTimes: [
      {
        time: "10:00 AM",
        isAvailable: true,
      },
      {
        time: "11:00 AM",
        isAvailable: true,
      },
      {
        time: "12:00 PM",
        isAvailable: false,
      },
      {
        time: "01:00 PM",
        isAvailable: true,
      },
    ],
    location: "123 Main St, City",
  },
  {
    id: 3,
    vanue: "Home Visit",
    fee: "Rs. 1500",
    type: "offline",
    availableTimes: [
      {
        time: "10:00 AM",
        isAvailable: true,
      },
      {
        time: "11:00 AM",
        isAvailable: true,
      },
      {
        time: "12:00 PM",
        isAvailable: false,
      },
      {
        time: "01:00 PM",
        isAvailable: true,
      },
    ],
    location: "Client's Address",
  },
];
