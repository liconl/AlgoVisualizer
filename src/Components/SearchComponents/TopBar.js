import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { Algorithm } from "./Enums";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import BarChartIcon from "@material-ui/icons/BarChart";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#bd4287",
    //#d5322a
  },
  title: {
    marginRight: "1rem",
    color: theme.palette.primary.contrastText,
  },

  itemContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "1em",
  },
  menu: {
    textAlign: "center",
    color: theme.palette.primary.contrastText,
    fontWeight: "bold",
    outline: "2px solid white",
  },
  btn: {
    textAlign: "center",
    height: 35,
    marginLeft: "5px",
    marginRight: "5px",
    border: 0,
    borderRadius: 3,
    fontWeight: "bold",
    color: theme.palette.primary.contrastText,
  },
  runBtn: {
    background: "linear-gradient(8deg, #2ACDD5 10%, #2b7ad4 70%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
  },
  time: {
    marginLeft: "3rem",
    color: theme.palette.primary.contrastText,
  },
  titleSort: {
    right: "5%",
    position: "absolute",
    top: "20%",
    color: "white",
  },
}));

export default function TopBar(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const t0 = performance.now();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAlgoSelection = (algo) => {
    props.setAlgo(algo);
    handleClose();
  };

  const classes = useStyles();
  const t1 = performance.now();
  return (
    <AppBar position="static">
      <Toolbar className={classes.header}>
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          <Typography className={classes.title} variant="h4">
            <SearchIcon
              style={{
                fontSize: "28px",
                marginRight: "2px",
              }}
            />
            Search Algorithms
          </Typography>
        </Link>
        <div className={classes.itemContainer}>
          <Button
            className={classes.menu}
            aria-controls="algorithms-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Algorithms
            <ExpandMoreIcon />
          </Button>
          <Menu
            id="algorithms-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {" "}
            <MenuItem onClick={() => handleAlgoSelection(Algorithm.DIJIKSTRA)}>
              {Algorithm.DIJIKSTRA}
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleAlgoSelection(Algorithm.ASTAR_8);
              }}
            >
              A *
            </MenuItem>
            <MenuItem onClick={() => handleAlgoSelection(Algorithm.DFS)}>
              {Algorithm.DFS}
            </MenuItem>
            <MenuItem onClick={() => handleAlgoSelection(Algorithm.BFS)}>
              {Algorithm.BFS}
            </MenuItem>
            <MenuItem
              onClick={() => handleAlgoSelection(Algorithm.GREEDY_BEST_FS)}
            >
              {Algorithm.GREEDY_BEST_FS}
            </MenuItem>
          </Menu>
        </div>
        <div className={classes.itemContainer}>
          <Button className={classes.btn} onClick={() => props.clearGrid()}>
            Clear Grid
          </Button>

          <Button
            className={`${classes.btn} ${classes.runBtn}`}
            onClick={props.runAnimatedAlgo}
          >
            {`Run ${props.selectedAlgoName}`}
          </Button>
        </div>
        <Button
          className={classes.btn}
          onClick={() => window.location.reload()}
        >
          Cancel
        </Button>
        <Link style={{ color: "white" }} to="/sorting">
          <Typography className={classes.titleSort} variant="h4">
            <BarChartIcon
              style={{
                fontSize: "28px",
              }}
            />
            Sorting Algorithms
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
