import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const ProfileCard = ({ user }) => {
  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        m={3}
        width={"350px"}
        height={"250px"}
        bg="blue.100"
        borderRadius={"md"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          my={5}
        >
          <Image src={user.avatar} />
        </Box>
        <Box display={"flex"} justifyContent={"center"} gap={"10px"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"4px"}
            fontWeight={"bold"}
          >
            <Text>Name: </Text>
            <Text>Email: </Text>
            <Text>Gender: </Text>
            <Text>Domain: </Text>
            <Text>available: </Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"4px"}>
            <Text>
              {user.first_name} {user.last_name}{" "}
            </Text>
            <Text>{user.email} </Text>
            <Text>{user.gender} </Text>
            <Text>{user.domain} </Text>
            <Text>{user.available ? "Yes" : "No"} </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileCard;

