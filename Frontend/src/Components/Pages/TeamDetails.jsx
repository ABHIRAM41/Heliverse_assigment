import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import { ContentState } from "../../context/ContentProvider";
import axios from "axios";
import ProfileCard from "../cards/ProfileCard";

const TeamDetails = () => {
  const { allTeams, setAllTeams } = ContentState();
  const [members, setMembers] = useState();
  const handleMembers = async (id) => {
    const result = await axios.get(`/api/team/${id}`);
    if (!result.data) return;
    setMembers(result.data);
    console.log(result.data);
  };
  return (
    <Box display={"flex"}>
      <Box
        width={"300px"}
        display={"flex"}
        flexDirection="column"
        gap={"10px"}
        p={"1%"}
        height={"100vh"}
        bg={"blue.100"}
      >
        {allTeams?.map((team) => (
          <Box
            key={team._id}
            bg={"white"}
            display={"flex"}
            alignItems={"center"}
            borderRadius={"md"}
            px={"10%"}
            height={"30px"}
            cursor={"pointer"}
            onClick={() => handleMembers(team._id)}
          >
            {team.teamName}
          </Box>
        ))}
      </Box>
      <Box>
        <SimpleGrid columns={{ base: 1, xl: 3 }} spacing={5}>
          {members?.teamMembers.map((m) => (
            <Box>
              <ProfileCard user={m} />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default TeamDetails;
