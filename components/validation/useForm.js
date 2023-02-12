import { useState, useEffect } from "react";

const useForm = () => {
  const [values, setValues] = useState({
    full_name: "",
    email: "",
    projectDetails: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      name: value,
    });
  };
  return { handleChange, values };
};

export default useForm;
