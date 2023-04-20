import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";

import useStyles from "./styles";

import { Actors, MovieInformation, Movies, NavBar, Profile } from "./";

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
        </Switch>
        <Switch>
          <Route exact path={["/", "/approved"]}>
            <Movies />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
