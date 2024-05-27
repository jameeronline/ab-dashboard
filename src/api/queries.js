import { getAbsherData } from "./dashboard";
import { useQuery } from "@tanstack/react-query";

export const useAbsherData = () => {
  return useQuery({
    queryKey: ["ab-data"],
    queryFn: getAbsherData,
  });
};
