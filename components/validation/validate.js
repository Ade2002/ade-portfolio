export default function validate(values) {
  let errors = {};
  if (!values.full_name.trim()) {
    errors.full_name = "Full name is required*";
  } else if (values.full_name.length < 5) {
    errors.full_name = "Full name is required*";
  }
  //Email
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.projectDetails.trim()) {
    errors.projectDetails = "What's your project details*";
  } else if (values.projectDetails.length < 5) {
    errors.projectDetails = "What's your project details?";
  }

  return errors;
}
