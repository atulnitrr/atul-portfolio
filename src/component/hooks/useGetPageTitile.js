import { useEffect } from "react";

const useGetPageTitle = (title) => {
  useEffect(() => {
    document.title = `atulnitrr | ${title}`;
  }, [title]);
};

export default useGetPageTitle;
