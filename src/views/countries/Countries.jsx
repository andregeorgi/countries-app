import React, { useEffect, useState } from "react";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import { Container, Grid, Button } from "@mui/material";

const Countries = ({ clearRegionPickerHandler, selectedRegion }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://restcountries.com/v3.1/region/${selectedRegion}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => setLoading(false));
  }, [selectedRegion]);

  return (
    <Container fixed>
      {loading ? (
        <div className="progress">
          <LinearProgress color="primary" />
        </div>
      ) : (
        <Grid container spacing={3} column={12} sx={{ margin: "20px 0" }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Button variant="contained" color="primary">
              Pick another region
            </Button>
          </Grid>
          {data.map((country) => {
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              key={country.name.common}
            ></Grid>;
          })}
        </Grid>
      )}
    </Container>
  );
};

export default Countries;
