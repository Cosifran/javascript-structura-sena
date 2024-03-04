//import mui components
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
//import react fuctions
import {useContext, useState, useEffect} from "react";
//import context
import layoutContext from "../../../context/layoutContext";
//import constant
import {linkRoute} from "../../../constant/constant";

export default function TemporaryDrawer() {
  const layoutContexts = useContext(layoutContext);
  const {openDrawer, toggleDrawerFn} = layoutContexts;

  const list = (anchor) => (
    <Box
      sx={{width: 350}}
      role="presentation"
      onClick={toggleDrawerFn(false)}
      onKeyDown={toggleDrawerFn(false)}>
      <List>
        {linkRoute.map((routes) => (
          <ListItem disablePadding key={routes.id}>
            <ListItemButton to={routes.to}>
              <p className="mb-0">{routes.title}</p>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer anchor={"left"} open={openDrawer} onClose={toggleDrawerFn(false)}>
        <p className="fs-3 text-center fw-bold mt-3">Lista de ejercicios</p>
        {list("left")}
      </Drawer>
    </>
  );
}
