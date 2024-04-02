import React, { useEffect, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import ProfileCard from "../cards/ProfileCard";
import { ContentState } from "../../context/ContentProvider";
import axios from "axios";
const Profile = () => {
  const { allUsers, setAllUsers } = ContentState();
  const [page, setPage] = useState(1);

  const handleProfile = (id) => {
    console.log(id);
  };

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= allUsers.length / 20 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <div>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
        {allUsers?.slice(page * 20 - 20, page * 20).map((user) => (
          <Box
            key={user._id}
            onClick={() => handleProfile(user._id)}
            display={"flex"}
            justifyContent={"center"}
          >
            <ProfileCard user={user} />
          </Box>
        ))}
      </SimpleGrid>
      {allUsers?.length > 0 && (
        <div className="pagination">
          <Box
            as="span"
            display={"flex"}
            width={"30px"}
            height={"40px"}
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? "" : "pagination__disable"}
          >
            ◀
          </Box>

          <Box
            as="span"
            display={page === 1 ? "none" : "flex"}
            width={"30px"}
            height={"40px"}
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            ...
          </Box>

          {[...Array(allUsers.length / 20)].map((_, i) => {
            if (i + 1 >= page && i + 1 < page + 10)
              return (
                <Box
                  as={"span"}
                  display={"flex"}
                  width={"30px"}
                  height={"40px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  cursor={"pointer"}
                  key={i}
                  className={page === i + 1 ? "pagination__selected" : ""}
                  onClick={() => selectPageHandler(i + 1)}
                >
                  {i + 1}
                </Box>
              );
          })}
          <Box
            as="span"
            display={page === allUsers.length / 20 ? "none" : "flex"}
            width={"30px"}
            height={"40px"}
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            ...
          </Box>

          <Box
            as="span"
            display={"flex"}
            width={"30px"}
            height={"40px"}
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
            onClick={() => selectPageHandler(page + 1)}
            className={page < allUsers.length / 20 ? "" : "pagination__disable"}
          >
            ▶
          </Box>
        </div>
      )}
    </div>
  );
};

export default Profile;
