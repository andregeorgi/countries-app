import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Countries from "../../views/countries/Countries";
import Region from "../../components/Region/Region";

const Homepage = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [findText, setFindText] = useState("");

  const onRegionPickerHandler = (region) => {
    setSelectedRegion(region);
  };

  const clearRegionPickerHandler = () => {
    setSelectedRegion(null);
  };

  const handleSearch = (text) => {
    setFindText(text);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      {selectedRegion ? (
        <Countries
          clearRegionPickerHandler={clearRegionPickerHandler}
          selectedRegion={selectedRegion}
          findText={findText}
        />
      ) : (
        <Region onRegionPickerHandler={onRegionPickerHandler} />
      )}
    </div>
  );
};

export default Homepage;
