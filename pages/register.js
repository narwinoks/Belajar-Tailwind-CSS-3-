import Link from "next/link";
import React from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import Label from "../components/Label";
import Select from "../components/Select";
import Guest from "../layouts/Guest";

export default function Register() {
  return (
    <div>
      {/* <h1 className="">Register</h1> */}
      <form>
        <div className="mb-6">
          <Label forInput="name">Name</Label>
          <Input name="name" id="name" type="text" placeholder="john" />
        </div>
        <div className="mb-6">
          <Label forInput="email">email</Label>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="john@gmail.com"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          <div className="mb-6">
            <Label forInput="password">password</Label>
            <Input
              name="password"
              id="password"
              type="password"
              placeholder="***"
            />
          </div>
          <div className="mb-6">
            <Label forInput="password">Password Confirmation</Label>
            <Input
              name="password_confirmation"
              id="password_confirmation"
              type="password"
              placeholder="***"
            />
          </div>
        </div>
        <div className="mb-6">
          <Label forInput="gender">Gender</Label>
          <Select>
            <option value="">Male</option>
            <option value="">Female</option>
          </Select>
        </div>
        <div className="mb-6 flex justify-between">
          <Checkbox
            label={"Agree Privation"}
            name="agree"
            forInput="agree"
            id="agree"
          />
        </div>
        <div className="flex items-center justify-between">
          <Button>Register</Button>
          <span>
            Already Have Account ?{" "}
            <Link
              href="/login"
              className="underline decoration-indigo-600 text-indigo-500 font-medium"
            >
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

Register.getLayout = (page) => (
  <Guest
    cardClassName="lg:w-2/5"
    header="Register"
    title="Register"
    children={page}
  />
);
