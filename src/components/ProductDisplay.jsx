import React from "react";
import { Grid, GridList, GridListTile, Typography } from "@material-ui/core";
import fot from "./images/fundamentalsofthermo.jpg";
import ita from "./images/introtoalgo.jpg";
import luc from "./images/letusc.jpg";
import psapdic from "./images/problemsolvingandprogdesigninc.jpg";
import ta from "./images/thealchemist.jpg";
import tmwshf from "./images/themonkwhosoldhisferrari.jpg";
import { CardMedia, Paper, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SellButton from "./SellButton";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 120,
    height: 150
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

export default function ProductDisplay() {
  const classes = useStyles();
  return (
    <div>
      <GridList cellHeight={180} cols={2}>
        <GridListTile style={{ border: "solid 1px black" }}>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      src={luc}
                      alt="this is an image"
                      style={{
                        height: "150px",
                        width: "120px",
                        borderRight: "solid 1px black"
                      }}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Title: Let Us C
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Seller Name: Abc Xyz
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID: 1030114
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ cursor: "pointer" }}>
                        Click <a href="#">here</a> to contact
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">$19.00</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </GridListTile>
        <GridListTile style={{ border: "solid 1px black" }}>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      src={ta}
                      alt="this is an image"
                      style={{
                        height: "150px",
                        width: "120px",
                        borderRight: "solid 1px black"
                      }}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Title: The Alchemist by Paulo Coelho
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Seller Name: Abc Xyz
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID: 1030115
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ cursor: "pointer" }}>
                        Click <a href="#">here</a> to contact
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">$19.00</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </GridListTile>
        <GridListTile style={{ border: "solid 1px black" }}>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      src={fot}
                      alt="this is an image"
                      style={{
                        height: "150px",
                        width: "120px",
                        borderRight: "solid 1px black"
                      }}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Title: Fundamentals Of Thermodynamics
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Seller Name: Abc Xyz
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID: 1030116
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ cursor: "pointer" }}>
                        Click <a href="#">here</a> to contact
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">$19.00</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </GridListTile>
        <GridListTile style={{ border: "solid 1px black" }}>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      src={ita}
                      alt="this is an image"
                      style={{
                        height: "150px",
                        width: "120px",
                        borderRight: "solid 1px black"
                      }}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Title: Introduction To Algorithms
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Seller Name: Abc Xyz
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID: 1030117
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ cursor: "pointer" }}>
                        Click <a href="#">here</a> to contact
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">$19.00</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </GridListTile>
        <GridListTile style={{ border: "solid 1px black" }}>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      src={tmwshf}
                      alt="this is an image"
                      style={{
                        height: "150px",
                        width: "120px",
                        borderRight: "solid 1px black"
                      }}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Title: The Monk Who Sold his Ferrari by Robin Sharma
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Seller Name: Abc Xyz
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID: 1030118
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ cursor: "pointer" }}>
                        Click <a href="#">here</a> to contact
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">$19.00</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </GridListTile>
        <GridListTile style={{ border: "solid 1px black" }}>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      src={psapdic}
                      alt="this is an image"
                      style={{
                        height: "150px",
                        width: "120px",
                        borderRight: "solid 1px black"
                      }}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Title: Problem Solving and Program Design in C
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Seller Name: Abc Xyz
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID: 1030119
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ cursor: "pointer" }}>
                        Click <a href="#">here</a> to contact
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">$19.00</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </GridListTile>
        <GridListTile style={{ border: "solid 1px black" }}>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      src={luc}
                      alt="this is an image"
                      style={{
                        height: "150px",
                        width: "120px",
                        borderRight: "solid 1px black"
                      }}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Title: Let Us C
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Seller Name: Abc Xyz
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID: 1030114
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ cursor: "pointer" }}>
                        Click <a href="#">here</a> to contact
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">$19.00</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </GridListTile>
        <GridListTile style={{ border: "solid 1px black" }}>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      src={ta}
                      alt="this is an image"
                      style={{
                        height: "150px",
                        width: "120px",
                        borderRight: "solid 1px black"
                      }}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Title: The Alchemist by Paulo Coelho
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Seller Name: Abc Xyz
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID: 1030115
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ cursor: "pointer" }}>
                        Click <a href="#">here</a> to contact
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">$19.00</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </GridListTile>
        {/* <GridListTile style={{ border: "solid 1px black" }}>
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
          </GridListTile> */}
      </GridList>
      {/* <SellButton /> */}
    </div>
  );
}

//export default ProductDisplay;
