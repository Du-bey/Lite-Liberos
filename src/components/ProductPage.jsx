import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { sizing } from "@material-ui/system";
import ProductDisplay from "./ProductDisplay";
import TopNav from "./TopNav";
import Filters from "./Filters";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ height: "100vh", background: "#333333" }}>
        <Grid container spacing={1} style={{ height: "100vh" }}>
          <Grid item xs={12} style={{ height: "10vh" }}>
            <Paper square style={{ height: "10vh" }}>
              <TopNav />
            </Paper>
          </Grid>
          <Grid item xs={2} style={{ height: "70vh" }}>
            <Paper style={{ height: "70vh", overflow: "scroll" }}>
              <Filters />
            </Paper>
          </Grid>
          <Grid item xs={8} style={{ height: "70vh" }}>
            <Paper style={{ height: "70vh", overflow: "scroll" }}>
              <ProductDisplay />
            </Paper>
          </Grid>
          <Grid item xs={2} style={{ height: "70vh" }}>
            <Paper style={{ height: "70vh" }}>Advertisements</Paper>
          </Grid>
          <Grid item xs={12} style={{ height: "18vh" }}>
            <Paper square style={{ height: "18vh" }}>
              BottomNav
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ProductPage;
