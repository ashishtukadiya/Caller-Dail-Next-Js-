import {
  Button,
  Card,
  Checkbox,
  Divider,
  IconButton,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";
import Image from "next/image";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import IconService from "@/utils/Icons";

const Login = () => {
  const router = useRouter();
  const [savedEmail, setSavedEmail] = useState("");
  const [savedPassword, setSavedPassword] = useState("");
  const [savedRememberMe, setSavedRememberMe] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSavedEmail(localStorage.getItem("savedEmail") || "");
      setSavedPassword(localStorage.getItem("savedPassword") || "");
      setSavedRememberMe(localStorage.getItem("rememberMe") === "true");
    }
  }, []);

  const validationSchema = yup.object({
    email: yup
      .string()
      .trim()
      .required("Please enter your valid email or phone number")
      .test(
        "valid-email",
        "Invalid email or phone number format",
        (value) =>
          yup.string().trim().email().isValidSync(value) ||
          /^\d{10}$/g.test(value)
      ),
    password: yup
      .string()
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#!@$%^&*()+=])/,
        `Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be between 8 and 15 characters long.`
      )
      .min(8)
      .max(15)
      .required("Password is required"),
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      email: savedEmail,
      password: savedPassword,
      rememberMe: savedRememberMe,
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      // Simulate authentication process
      const isAuthenticated = values.email && values.password; // Replace this with your actual authentication logic

      if (isAuthenticated) {
        if (values.rememberMe) {
          localStorage.setItem("savedEmail", values.email);
          localStorage.setItem("savedPassword", values.password);
          localStorage.setItem("rememberMe", "true");
        } else {
          localStorage.removeItem("savedEmail");
          localStorage.removeItem("savedPassword");
          localStorage.removeItem("rememberMe");
        }

        localStorage.setItem("email", values.email);
        localStorage.setItem("password", values.password);
        router.push("/homepage");
      } else {
        // Handle login failure (optional)
        alert("Invalid email or password");
      }
    },
  });

  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="w-[50%] !rounded-xl">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-6 p-10">
            <div className="flex flex-col gap-5 justify-center items-center">
              {/* <img
                src={
                  "https://astppbilling.org/wp-content/uploads/2023/03/ASTPP-logo-01.png"
                }
                width={100}
                height={100}
                alt="Icon"
              /> */}
              <Typography>ASTPP</Typography>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Typography className="">Welcome Back !</Typography>

              <Typography className="flex items-center">
                Sign In to Continue with ASTPP
              </Typography>
            </div>
            <div className="flex flex-col gap-3">
              <TextField
                placeholder="Email"
                type="email"
                value={formik.values.email}
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="error-message">{formik.errors.email}</div>
              ) : null}

              <TextField
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOutlinedIcon />
                        ) : (
                          <VisibilityOffOutlinedIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="error-message">{formik.errors.password}</div>
              ) : null}
              <div className="flex justify-between">
                <div className="flex flex-row gap-2 items-center">
                  <Checkbox
                    name="rememberMe"
                    checked={formik.values.rememberMe}
                    onChange={formik.handleChange}
                  />
                  <Typography>Remember me</Typography>
                </div>
                <Typography
                  className="cursor-pointer flex justify-center items-center"
                  // onClick={handleClick}
                >
                  Forget Password?
                </Typography>
              </div>

              <Button
                variant="outlined"
                className="!bg-[#22007c] !text-white"
                type="submit"
              >
                Sign In
              </Button>

              <Divider className="flex items-center justify-center">Or</Divider>

              <Button
                variant="outlined"
                className="border-inherit !text-black"
                type="submit"
                startIcon={
                  <Image src={IconService.googleIcon} alt="google" width={40} height={40}/>
                }
              >
                Sign in with Google
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
