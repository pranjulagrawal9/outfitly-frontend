import * as Yup from "yup";

export const signupValidationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name should be minimum 2 letters").required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*()_+{}\[\]:;<>,.?~\\-]).*$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    )
    .required("Password is required"),
});
