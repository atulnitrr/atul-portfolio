import { useEffect } from "react";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { useState } from "react";

const useGetResourceLinks = (keyField) => {
  const { appInitialState } = useContext(AppContext);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(appInitialState[keyField]);
  }, [keyField]);

  return { links };
};

export default useGetResourceLinks;
