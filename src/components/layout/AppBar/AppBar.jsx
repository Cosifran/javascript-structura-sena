import * as React from "react";
//import mui components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
//import react fuctions
import {useContext} from "react";
//import context
import layoutContext from "../../../context/layoutContext";

export default function ButtonAppBar() {
  const layoutContexts = useContext(layoutContext);
  const {toggleDrawerFn} = layoutContexts;
  return (
    <>
      <div className="row g-0">
        <div className="col-12">
          <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{mr: 2}}
                  onClick={toggleDrawerFn(true)}>
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  component="div"
                  className="text-center"
                  sx={{flexGrow: 1}}>
                  Resolución a problemas algorítmicos aplicando estructuras de
                  almacenamiento
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
      </div>
    </>
  );
}
