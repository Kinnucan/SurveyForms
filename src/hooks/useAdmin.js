import { useMemo } from "react";
import { useGetAdminDataQuery } from "../api";

const useAdmin = (email) => {
  // Get Admin data
  const { data, isLoading, isError, isSuccess } = useGetAdminDataQuery(email);

  const isAdmin = useMemo(() => {
    if (!isLoading && data) return data["Items"][0]["Admin"]["BOOL"];
    return false;
  }, [data, isLoading]);

  return {
    isAdmin,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useAdmin;
