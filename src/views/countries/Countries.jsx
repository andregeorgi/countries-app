import React, { useEffect, useState } from "react";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import { Container, Grid, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

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
            <Button
              onClick={() => clearRegionPickerHandler()}
              variant="contained"
              color="primary"
            >
              Pick another region
            </Button>
          </Grid>
          {data.map((country) => (
            <Grid item xs={12} sm={12} md={6} lg={6} key={country.name.common}>
              <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                  component="img"
                  image={country.flags.png}
                  alt={country.flags.alt}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {country.name.common}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`Population: ${country.population} `}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`Capital: ${country.capital} `}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Countries;
