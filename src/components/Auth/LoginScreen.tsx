import React from "react";
import { loginAzure } from "./AuthFunctions";
import API from "@/services/API/API";
import toast from "react-hot-toast";
import BrandTitle from "@/components/BrandTitle/BrandTitle";
import TextInput from "../UI/Input/TextInput";
import Button from "../UI/Button/Button";
import DotEnv from "@/utils/DotEnv";
import "./LoginScreen.scss";

const LoginScreen: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const { username, password } = data as { username: string; password: string };

    if (!username || !password) {
      toast.error("Please provide username and password!");
      return;
    }

    API.post("login/ldap", { username, password })
      .then((res) => {
        if (res.data) {
          window.location.replace(res.data);
        }
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || "Error occured during log in.");
      });
  };

  return (
    <div className="login-screen-container">
      <BrandTitle text={`Log in into ${DotEnv.appName}`} />

      <form
        onSubmit={handleSubmit}
      >
          <label htmlFor="username">
            Windows username
          </label>
          <TextInput name="username" />

          <label htmlFor="password">
            Password
          </label>
          <TextInput name="password" type="password" />

          <Button
            type="submit"
          >
              Login
          </Button>
      </form>

      <Button
        className="azure-login"
        onClick={loginAzure}
      >
        Single click login
      </Button>
    </div>
  );
};

export default LoginScreen;
