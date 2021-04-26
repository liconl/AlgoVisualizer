import { Row } from "antd";
import Typography from "@material-ui/core/Typography";
import React from "react";
import AlgorithmDropDown from "./AlgorithmDropDown";
import RandomizeButton from "./RandomizeButton";
import StartButton from "./StartButton";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import BarChartIcon from "@material-ui/icons/BarChart";
import SearchIcon from "@material-ui/icons/Search";
import CancelButton from "./CancelButton";

const useStyles = makeStyles((theme) => ({
  title: {
    marginRight: "1rem",
    color: theme.palette.primary.contrastText,
  },
  btn: {
    paddingTop: "2em",
  },
}));

const HomeHeader = ({
  algorithms,
  onAlgorithmChange,
  currentAlgorithm,
  onSpeedChange,
  onInputSizeChanged,
  onRandomize,
  onStart,
  isVisualizing,
}) => {
  const openUrl = (url) => {
    window.open(url, "_blank")?.focus();
  };
  const classes = useStyles();
  return (
    <Row
      style={{
        background: "#63659c",
        color: "white",
        padding: "10px 0px 16px 0px",
        width: "100%",
      }}
      align="middle"
      justify="space-around"
    >
      <Link to="/sorting">
        <Typography variant="h4" className={classes.title}>
          <BarChartIcon
            style={{
              fontSize: "28px",
            }}
          />
          Sorting Algorithms
        </Typography>
      </Link>
      <AlgorithmDropDown
        currentAlgorithm={currentAlgorithm}
        algorithms={algorithms}
        onAlgorithmChange={(algo) => onAlgorithmChange(algo)}
      />
      <RandomizeButton className={classes.btn} onClick={onRandomize} />
      <StartButton className={classes.btn} onClick={onStart} />
      <CancelButton />
      <Link to="/">
        <Typography variant="h4" className={classes.title}>
          <SearchIcon
            style={{
              fontSize: "28px",
              marginRight: "2px",
            }}
          />
          Searching Algorithms
        </Typography>
      </Link>
    </Row>
  );
};

export default HomeHeader;
