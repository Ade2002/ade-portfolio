import { useState, useEffect } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    full_name: "",
    email: "",
    projectDetails: "",
  });
  const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      name: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting
  };
  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
