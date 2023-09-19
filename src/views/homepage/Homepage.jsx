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

  const clearRegionPickerHandler = () => {
    setSelectedRegion(null);
  };

  return (
    <div>
      <Navbar />
      {selectedRegion ? (
        <Countries
          clearRegionPickerHandler={clearRegionPickerHandler}
          selectedRegion={selectedRegion}
        />
      ) : (
        <Region onRegionPickerHandler={onRegionPickerHandler} />
      )}
    </div>
  );
};

export default Homepage;
