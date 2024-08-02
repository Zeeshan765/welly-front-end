import React, { useCallback, useEffect, useState } from "react";
import TherapistCard from "../sections/services/TherapistCard";
import { therapistData } from "../constants/constants";
import DoctorDetails from "../sections/services/DoctorDetails";
import { Get } from '../actions/apiActions';
import { API_URLS } from '../constants/API_URLS';

function ServicesPage() {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [searchTherapist, setSearchTherapist] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const handleSearch = () => {
    const filtered = therapistData.filter((therapist) => {
      return (
        therapist.location
          .toLowerCase()
          .includes(searchLocation.toLowerCase()) &&
        therapist.city.toLowerCase().includes(searchCity.toLowerCase()) &&
        therapist.name.toLowerCase().includes(searchTherapist.toLowerCase())
      );
    });
    setFilteredData(filtered);
  };









// Get Doctor Data


const getDoctors = useCallback(() => {
  try {
    Get(
      {},
      API_URLS.getAllDoctor,
      (response) => {
        setFilteredData(response)
      },
      (error) => {
        console.log('error', error)
      }
    )
  } catch (error) {
    console.log('error', error)
  }
}, [])

useEffect(() => {
  getDoctors()
}, [getDoctors])





console.log('filteredData', filteredData)















  return (
    <div className="min-h-screen bg-gray-200 p-4">
      {/* Search filters */}
      <div className="flex flex-col sm:flex-row sm:justify-center sm:flex-wrap sm:space-x-4 space-y-4 sm:space-y-0 mb-4">
        <input
          type="text"
          placeholder="Location"
          className="p-2 rounded-md border border-gray-300"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          className="p-2 rounded-md border border-gray-300"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Therapist"
          className="p-2 rounded-md border border-gray-300"
          value={searchTherapist}
          onChange={(e) => setSearchTherapist(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-teal-700 text-white px-4 py-2 rounded-md flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
              clipRule="evenodd"
            />
          </svg>
          Search
        </button>
      </div>

      <div className="flex flex-col items-center">
        {!selectedTherapist &&
          filteredData?.user?.map((therapist, index) => (
            <TherapistCard
              key={index}
              first_name={therapist.first_name}
              last_name={therapist.last_name}
              profile_image={therapist.profile_image}
              isNRMCVarified={true}
              title={'Senior Therapist'}
              qualification={therapist.qualification}
              rating={'4.9'}
              experience={therapist.experience}
              satisfaction={'90'}
              // consultations={therapist.consultations}
              index={index}
              onSelected={(index) => setSelectedTherapist(index)}
            />
          ))}
      </div>

      {selectedTherapist && (
        <DoctorDetails
          therapist={filteredData?.user[selectedTherapist]}
          onBack={() => setSelectedTherapist(null)}
        />
      )}
    </div>
  );
}

export default ServicesPage;
