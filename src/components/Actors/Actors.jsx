import React, { useState } from "react";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {
  useGetActorQuery,
  useGetMoviesByActorIdQuery,
} from "../../services/TMDB";
import useStyles from "./styles";
import { MovieList, Pagination } from "..";

export default function Actors() {
  const history = useHistory();
  const { id } = useParams();
  const { data, isFetching, error } = useGetActorQuery(id);
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const { data: movies } = useGetMoviesByActorIdQuery({ id, page });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => history.goBack()}
          color="primary"
        >
          Go back
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <img
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w780/${data.profile_path}`}
            alt={data.name}
          />
        </Grid>
        <Grid
          item
          lg={7}
          xl={8}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" gutterBottom>
            {data.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant="body2" align="justify" paragraph>
            {data?.biography || "Sorry, no biography yet..."}
          </Typography>
          <Box className={classes.btns}>
            <Button
              variant="contained"
              target="_blank"
              href={`https://www.imdb.com/name/${data?.imdb_id}`}
            >
              IMDB
            </Button>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => history.goBack()}
            >
              Back
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin="2rem 0">
        <Typography variant="h2" align="center" gutterBottom>
          Movies
        </Typography>
        {movies && <MovieList movies={movies} numberOfMovies={12} />}
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={data.total_pages}
        />
      </Box>
    </>
  );
}
