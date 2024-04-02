import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    
      <Box
        height={"50px"}
        background={"blue.300"}
        display={"flex"}
        position={"sticky"}
        top={0}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} ml={"30px"} alignItems={"center"} gap={"200px"}>
          <Link to="/Profile">
            <Text cursor={"pointer"} fontWeight={"600"} fontSize={"20px"}>
              All Users
            </Text>
          </Link>
        </Box>
        <Box display={"flex"} mr={"30px"} alignItems={"center"} gap={"200px"}>
          <Link to="/team">
            <Text cursor={"pointer"} fontWeight={"600"} fontSize={"20px"}>
              All teams
            </Text>
          </Link>
        </Box>
      </Box>
   
  );
};

export default NavBar;
