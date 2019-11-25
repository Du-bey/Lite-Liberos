import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import BuyerLeaderboard from "./buyerLeaderboard";
import SellerLeaderBoard from "./SellerLeaderBoard";
import TopNav from "./TopNav";
const useStyles = makeStyles(theme => ({
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
export default function Leaderboard() {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ height: "100vh" }}>
      <Grid
        container
        spacing={1}
        style={{ height: "100vh", background: "#333333" }}
      >
        <Grid item xs={12} style={{ height: "10vh" }}>
          <Paper className={classes.paper} style={{ height: "10vh" }}>
            <TopNav />
          </Paper>
        </Grid>
        <Grid item xs={12} style={{ height: "10vh" }}>
          <Paper className={classes.paper} style={{ height: "10vh" }}>
            Leaderboard
          </Paper>
        </Grid>
        <Grid item xs={6} style={{ height: "60vh" }}>
          <Paper
            className={classes.paper}
            style={{ height: "60vh", overflow: "scroll" }}
          >
            <SellerLeaderBoard />
          </Paper>
        </Grid>
        <Grid item xs={6} style={{ height: "60vh" }}>
          <Paper
            className={classes.paper}
            style={{ height: "60vh", overflow: "scroll" }}
          >
            <BuyerLeaderboard />
          </Paper>
        </Grid>
        <Grid item xs={12} style={{ height: "18vh" }}>
          <Paper className={classes.paper} style={{ height: "18vh" }}>
            Bottom Navigation
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
