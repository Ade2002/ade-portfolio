import { useState } from "react";
import { Request } from "../util";
export const baseUrl = "https://apiacadon.atc.com.ng/";

const FetchAll = () => {
  const [fetchCourses, setFetchCourses] = useState([]);
  const getCourses = Request("GET", `${baseUrl}courses`).then(
    (responseData) => {
      setFetchCourses(responseData.courses);
    },
  );

  return { getCourses, fetchCourses };
};
export default FetchAll;
