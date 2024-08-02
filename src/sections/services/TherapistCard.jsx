// TherapistCard.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

const TherapistCard = ({
  profile_image,
 first_name,
 last_name,
  isNRMCVarified,
  title,
  qualification,
  rating,
  experience,
  satisfaction,
  consultations,
  onSelected,
  index,
}) => {
  const navigate = useNavigate()
  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden w-full mb-4'>
      {/* Row 1 */}
      <div className='grid grid-cols-1 md:grid-cols-12 gap-4 p-6'>
        {/* Profile Image */}
        <div className='md:col-span-1 flex justify-center md:justify-start'>
          <img
            className='w-24 h-24 rounded-full object-cover'
            src={
              profile_image
                ? profile_image
                : 'https://staticconnect.marham.pk/assets/doctors/18011/dr-asdaq-asim-dentist-lahore-27_170X170.PNG'
            }
            alt='Profile'
          />
        </div>

        {/* Therapist Details */}
        <div className='md:col-span-9'>
          <h2
            className='text-2xl font-semibold text-gray-800 cursor-pointer'
            onClick={() => onSelected(index)}
          >
           {first_name} {last_name}
          </h2>
          {isNRMCVarified && (
            <p className='text-green-600 font-semibold'>NRMC Verified</p>
          )}
          <p className='text-gray-600'>{title}</p>
          <p className='text-gray-600'>{qualification[0]}</p>
          <div className='flex space-x-4 mt-2'>
            <div className='flex flex-col'>
              <p className='text-gray-600'>Rating:</p>
              <p className='text-gray-600'>{rating}</p>
            </div>
            <div className='flex flex-col'>
              <p className='text-gray-600'>Experience: </p>
              <p className='text-gray-600'>{experience[0]} years</p>
            </div>
            <div className='flex flex-col'>
              <p className='text-gray-600'>Satisfaction: </p>
              <p className='text-gray-600'>{satisfaction}%</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className='md:col-span-2 flex flex-col justify-center space-y-2'>
          <button
            className='bg-teal-700 text-white px-4 py-2 rounded-md'
            onClick={() => navigate('/appointments')}
          >
            Book Appointment
          </button>
          <button className='bg-gray-500 text-white px-4 py-2 rounded-md'>
            View Profile
          </button>
        </div>
      </div>

      {/* Row 2 - Consultation Modes */}
      <div className='p-6'>
        {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {[1,2,3].map((consultation, index) => (
            <ConsultationCard key={index} {...consultation} />
          ))}
        </div> */}
      </div>
    </div>
  )
}

const ConsultationCard = ({ type, fee, availability, location }) => {
  const locationInfo = type.toLowerCase().includes('video')
    ? 'Online'
    : location

  return (
    <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
      <h3 className='text-lg font-semibold text-gray-800'>{type}</h3>
      <p className='text-gray-600'>Fee: {fee}</p>
      <p
        className={`text-gray-600 ${
          availability ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {availability ? 'Available' : 'Not Available'}
      </p>
      <p className='text-gray-600'>Location: {locationInfo}</p>
    </div>
  )
}

export default TherapistCard
