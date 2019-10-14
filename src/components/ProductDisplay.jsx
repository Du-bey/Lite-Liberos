import React from "react";
import { Grid, GridList, GridListTile, Typography } from "@material-ui/core";
import image from "./images/LiteLiberosLogo.jpeg";

class ProductDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <GridList cellHeight={180} cols={2}>
          <GridListTile style={{ border: "solid 1px black" }}>
            <img
              src={image}
              alt="this is an image"
              style={{
                height: "180px",
                width: "180px",
                borderRight: "solid 1px black"
              }}
            />
          </GridListTile>
          <GridListTile style={{ border: "solid 1px black" }}>
            <img
              src={image}
              alt="this is an image"
              style={{
                height: "180px",
                width: "180px",
                borderRight: "solid 1px black"
              }}
            />
          </GridListTile>
          <GridListTile style={{ border: "solid 1px black" }}>
            <img
              src={image}
              alt="this is an image"
              style={{
                height: "180px",
                width: "180px",
                borderRight: "solid 1px black"
              }}
            />
          </GridListTile>
          <GridListTile style={{ border: "solid 1px black" }}>
            <img
              src={image}
              alt="this is an image"
              style={{
                height: "180px",
                width: "180px",
                borderRight: "solid 1px black"
              }}
            />
          </GridListTile>
          <GridListTile style={{ border: "solid 1px black" }}>
            <img
              src={image}
              alt="this is an image"
              style={{
                height: "180px",
                width: "180px",
                borderRight: "solid 1px black"
              }}
            />
          </GridListTile>
          <GridListTile style={{ border: "solid 1px black" }}>
            <img
              src={image}
              alt="this is an image"
              style={{
                height: "180px",
                width: "180px",
                borderRight: "solid 1px black"
              }}
            />
          </GridListTile>
          <GridListTile style={{ border: "solid 1px black" }}>
            <img
              src={image}
              alt="this is an image"
              style={{
                height: "180px",
                width: "180px",
                borderRight: "solid 1px black"
              }}
            />
          </GridListTile>
          <GridListTile style={{ border: "solid 1px black" }}>
            <img
              src={image}
              alt="this is an image"
              style={{
                height: "180px",
                width: "180px",
                borderRight: "solid 1px black"
              }}
            />
          </GridListTile>
        </GridList>
      </div>
    );
  }
}

export default ProductDisplay;
