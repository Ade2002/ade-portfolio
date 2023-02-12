import { useState, useEffect } from "react";

const useForm = () => {
  const [values, setValues] = useState({
    full_name: "",
    email: "",
    projectDetails: "",
  });
};
