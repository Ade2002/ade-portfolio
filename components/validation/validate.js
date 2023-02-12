export default function validate(values) {
  let errors = {};
  if (!values.full_name.trim()) {
    errors.full_name = "Full name is required*";
  }
}
