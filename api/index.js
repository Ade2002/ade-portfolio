import { useState } from "react";
import { Request } from "../util";
export const baseUrl = "https://apiacadon.atc.com.ng/";

const FetchAll = () => {
  const [fetchTestimonials, setFetchTestimonials] = useState([]);
  const getTestimonials = Request("GET", `https://testimonial.p.rapidapi.com/api`).then(
    (responseData) => {
      setFetchTestimonials(responseData.courses);
    },
  );

  return { getTestimonials, fetchTestimonials };
};
export default FetchAll;
