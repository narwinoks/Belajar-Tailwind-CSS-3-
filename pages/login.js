import React from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import Label from "../components/Label";
import Guest from "../layouts/Guest";

export default function Login() {
  return (
    <div>
      {/* <h1 className="">Login</h1> */}
      <form>
        <div className="mb-6">
          <Label forInput="email">email</Label>
          <Input name="email" id="email" type="email" placeholder="email" />
        </div>
        <div className="mb-6">
          <Label forInput="password">password</Label>
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="***"
          />
        </div>
        <div className="mb-6 flex justify-between">
          <Checkbox
            label={"Remember Me"}
            forInput="remember"
            name="remember"
            id="remember"
          />
          <a href="">Forgot Password</a>
        </div>
        <Button>Login</Button>
      </form>
    </div>
  );
}

Login.getLayout = (page) => (
  <Guest header="Login" title="Login" children={page} />
);
