import React from "react";
import { List } from "../Data/Data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {List.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea sx={{height:'400px',width:'400px'}}>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.img}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;