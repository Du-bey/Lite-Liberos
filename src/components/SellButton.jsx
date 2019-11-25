import React from "react";
import { Button, Typography, Link } from "@material-ui/core";
import "./sellButton.css";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

class SellButton extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          {" "}
          <Button className="pavBhaji">
            <Typography inline>sell</Typography>
            <LocalShippingIcon></LocalShippingIcon>
          </Button>
        </Link>
      </div>
    );
  }
}

export default SellButton;
