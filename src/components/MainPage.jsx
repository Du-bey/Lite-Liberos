import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { red } from "@material-ui/core/colors";
import TopNav from "./TopNav";
import Buy from "./Buy";
import Sell from "./Sell";

const useStyles = makeStyles(theme => ({
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div styles={{ height: "100vh" }}>
      <Grid
        container
        spacing={1}
        style={{ height: "100vh", background: "#333333" }}
      >
        <Grid item xs={12} style={{ height: "10vh" }}>
          <Paper square style={{ height: "10vh" }}>
            <TopNav />
          </Paper>
        </Grid>
        <Grid item xs={12} style={{ height: "5vh" }}>
          <Paper square style={{ height: "5vh" }}>
            BUY
          </Paper>
        </Grid>
        <Grid item xs={12} style={{ height: "32.5vh" }}>
          <Paper
            className={classes.paper}
            style={{ height: "32.5vh", overflow: "scroll" }}
          >
            <Buy />
          </Paper>
        </Grid>
        <Grid item xs={12} style={{ height: "5vh" }}>
          <Paper square style={{ height: "5vh" }}>
            SELL
          </Paper>
        </Grid>
        <Grid item xs={12} style={{ height: "32.5vh" }}>
          <Paper className={classes.paper} style={{ height: "32.5vh" }}>
            <Sell />
          </Paper>
        </Grid>
        <Grid item xs={12} style={{ height: "18vh" }}>
          <Paper square style={{ height: "18vh" }}>
            BOttomNav
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
