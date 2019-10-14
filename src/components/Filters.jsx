import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Slider,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

const AirbnbSlider = withStyles({
  root: {
    color: "#3a8589",
    height: 3,
    padding: "13px 0"
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    marginTop: -12,
    marginLeft: -13,
    boxShadow: "#ebebeb 0px 2px 2px",
    "&:focus,&:hover,&$active": {
      boxShadow: "#ccc 0px 2px 3px 1px"
    },
    "& .bar": {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 3
  },
  rail: {
    color: "#d8d8d8",
    opacity: 1,
    height: 3
  }
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

export default function Filters() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.secondaryHeading}>
            Select Range
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <AirbnbSlider
            ThumbComponent={AirbnbThumbComponent}
            getAriaLabel={index =>
              index === 0 ? "Minimum price" : "Maximum price"
            }
            defaultValue={[20, 40]}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.secondaryHeading}>
            Select Year
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormControl component="fieldset" className={classes.formControl}>
            {/* <FormLabel component="legend">Gender</FormLabel> */}
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value="kuchh nahi"
              onChange={handleChange}
            >
              <FormControlLabel
                value="1st Year"
                control={<Radio />}
                label="1st year"
              />
              <FormControlLabel
                value="2nd year"
                control={<Radio />}
                label="2nd year"
              />
              <FormControlLabel
                value="3rd year"
                control={<Radio />}
                label="3rd year"
              />
              <FormControlLabel
                value="4nd year"
                control={<Radio />}
                label="4nd year"
              />
              <FormControlLabel
                value="5rd year"
                control={<Radio />}
                label="5rd year"
              />
            </RadioGroup>
          </FormControl>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.secondaryHeading}>
            Select Branch
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormControl component="fieldset" className={classes.formControl}>
            {/* <FormLabel component="legend">Gender</FormLabel> */}
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value="kuchh nahi"
              onChange={handleChange}
            >
              <FormControlLabel
                value="1st Year"
                control={<Radio />}
                label="CSE"
              />
              <FormControlLabel
                value="2nd year"
                control={<Radio />}
                label="ECE"
              />
              <FormControlLabel
                value="3rd year"
                control={<Radio />}
                label="EEE"
              />
              <FormControlLabel value="" control={<Radio />} label="ENI" />
              <FormControlLabel
                value="5rd year"
                control={<Radio />}
                label="MECH"
              />
              <FormControlLabel
                value="1st Year"
                control={<Radio />}
                label="MANU"
              />
              <FormControlLabel
                value="2nd year"
                control={<Radio />}
                label="CIVIL"
              />
              <FormControlLabel
                value="3rd year"
                control={<Radio />}
                label="CHEMICAL"
              />
              <FormControlLabel
                value=""
                control={<Radio />}
                label="ECONOMICS"
              />
              <FormControlLabel
                value="1st Year"
                control={<Radio />}
                label="MATHS"
              />
              <FormControlLabel
                value="2nd year"
                control={<Radio />}
                label="PHYSICS"
              />
              <FormControlLabel
                value="3rd year"
                control={<Radio />}
                label="CHEMISTRY"
              />
              <FormControlLabel
                value="ENI"
                control={<Radio />}
                label="BIOLOGY"
              />
              <FormControlLabel
                value="5rd year"
                control={<Radio />}
                label="PHARM"
              />
            </RadioGroup>
          </FormControl>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.secondaryHeading}>
            Select Type*
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormControl component="fieldset" className={classes.formControl}>
            {/* <FormLabel component="legend">Gender</FormLabel> */}
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value="kuchh nahi"
              onChange={handleChange}
            >
              <FormControlLabel
                value="1st Year"
                control={<Radio />}
                label="Fiction"
              />
              <FormControlLabel
                value="2nd year"
                control={<Radio />}
                label="Course Books"
              />
              <FormControlLabel
                value="3rd year"
                control={<Radio />}
                label="Competitive Exams Material"
              />
              <FormControlLabel
                value="4nd year"
                control={<Radio />}
                label="Miscellaneous"
              />
            </RadioGroup>
          </FormControl>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
