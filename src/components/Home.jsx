import React from "react";
import { Container, Button, Grid, ButtonBase } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Container
          maxWidth="lg"
          style={{
            marginTop: "5vh",
            backgroundColor: "#123456",
            padding: "5vh"
          }}
        >
          <Grid container spacing={5}>
            <Grid item xs={3}>
              <AccountCircleIcon style={{ fontSize: "25vh" }} />
            </Grid>
            <Grid item xs={6}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ marginBottom: "2vh", height: "5vh", padding: "2vh" }}
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ marginTop: "2vh", height: "5vh", padding: "2vh" }}
                >
                  Register
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <AccountCircleIcon style={{ fontSize: "25vh" }} />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              Item Image 1
            </Grid>
            <Grid item xs={3}>
              Item Image 2
            </Grid>
            <Grid item xs={3}>
              Item Image 3
            </Grid>
            <Grid item xs={3}>
              Item Image 4
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="lg">
          <Container maxWidth="md">
            Item image and description which is most sold
          </Container>
          <Container maxWidth="md">
            Item image and description which is most bought
          </Container>
        </Container>
      </div>
    );
  }
}

export default Home;
