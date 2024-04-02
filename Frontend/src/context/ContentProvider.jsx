import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ContentContext = createContext();

const ContentProvider = ({ children }) => {

    const [allUsers, setAllUsers]=useState();
    const [allTeams, setAllTeams] = useState();

  return (
    <ContentContext.Provider
      value={{ allUsers, setAllUsers, allTeams, setAllTeams }}
    >
      {children}
    </ContentContext.Provider>
  );
};
export const ContentState = () => {
  return useContext(ContentContext);
};

export default ContentProvider;
