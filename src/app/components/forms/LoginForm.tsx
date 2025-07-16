"use client";
import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Separator from "../ui/Separator";
import Checkbox from "../ui/Checkbox";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  



  return (
    <div className="bg-[#fcfcfc] w-full max-w-[1440px] min-h-screen flex items-center justify-center px-4 md:px-0">
      <div className="relative w-full min-h-screen bg-[url(https://c.animaapp.com/md3i41oxgVsZYm/img/31-list-of-wallpaper-computer-light-blue-1.png)] bg-cover bg-center">
        <img
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          alt="Rectangle"
          src="https://c.animaapp.com/md3i41oxgVsZYm/img/rectangle-27.png"
          draggable={false}
        />

        <Card className="relative flex flex-col md:flex-row max-w-[960px] w-full bg-white rounded-[28px] px-6 py-8 md:px-24 md:py-16 gap-8 md:gap-16 items-center mx-auto mt-20 md:mt-32">

        
          <div className="flex flex-col justify-center items-center md:items-start w-full md:w-[328px] h-full text-center md:text-left font-title-page text-black text-3xl md:text-4xl font-bold">
            Taskify
          </div>

          <Separator
            orientation="vertical"
            className="hidden md:flex self-stretch w-px bg-gray-300"
          />
          <Separator
            orientation="horizontal"
            className="flex md:hidden h-px w-full bg-gray-300"
          />

        
          <div className="flex flex-col w-full md:w-[392px] gap-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Welcome Back
            </h2>

            <p className="text-[#292c31cc] text-base md:text-lg">
              Enter your credentials to login to taskify.
            </p>

            <div className="flex flex-col w-full gap-4">
              <Input
                className="px-6 py-4 bg-[#f9f9f9] rounded-[10px] border border-[#d1d1d1]"
                placeholder="Email"
                type="email"
              />
              <Input
                className="px-6 py-4 bg-[#f9f9f9] rounded-[10px] border border-[#d1d1d1]"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
              />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="show-password"
                checked={showPassword}
                onCheckedChange={(checked) => setShowPassword(!!checked)}
                className="w-5 h-5"
              />
              <label htmlFor="show-password" className="cursor-pointer text-black text-sm">
                Show password
              </label>
            </div>

            <Button className="h-14 w-full bg-[#ec4c7d] hover:bg-[#d43e6b] rounded-lg text-white text-xl font-semibold">
              Log In
            </Button>

            <p className="text-center text-black text-sm md:text-base w-full">
              Don’t have an account?{" "}
              <Button variant="link" className="p-0 font-semibold text-[#292c31] underline">
                Sign Up
              </Button>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
