import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import Countries from "../../views/countries/Countries";
import Region from "../../components/Region/Region";

const Homepage = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const onRegionPickerHandler = (region) => {
    setSelectedRegion(region);
  };

  return (
    <div>
      <Navbar />
      {selectedRegion ? (
        <Countries />
      ) : (
        <Region onRegionPickerHandler={onRegionPickerHandler} />
      )}
    </div>
  );
};

export default Homepage;
