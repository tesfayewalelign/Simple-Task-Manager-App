"use client";
import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Separator from "../ui/Separator";
import Checkbox from "../ui/Checkbox";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-screen min-h-screen overflow-hidden">
      <div
        className="
          flex items-center justify-center w-full min-h-screen overflow-hidden
          bg-[url(https://c.animaapp.com/md3i41oxgVsZYm/img/31-list-of-wallpaper-computer-light-blue-1.png)]
          bg-cover bg-center
          p-4 md:p-8 lg:p-12
        "
      >
        <Card
          className="
                  flex flex-col md:flex-row flex-wrap  
                  w-full max-w-[960px] bg-white rounded-[28px] shadow-lg overflow-hidden
                "
        >
          <div
            className="
            flex flex-col justify-center items-center md:items-start
            text-center md:text-left
            font-bold text-3xl md:text-4xl
            text-black
            w-full md:w-auto md:max-w-[300px]  /* allow auto width and max */
            p-8 md:p-12
          "
          >
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

          <div className="flex flex-col w-full max-w-[350px] gap-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Welcome Back
            </h2>
            <p className="text-[#292c31cc] text-base md:text-lg">
              Enter your credentials to login to taskify.
            </p>
            <div className="flex flex-col w-full gap-4">
              <Input
                className="w-full px-4 py-3 bg-[#f9f9f9] rounded-[10px] border border-[#d1d1d1] block sm:hidden"
                placeholder="Phone number, username or email"
                type="email"
              />
              <Input
                className="w-full px-4 py-3 bg-[#f9f9f9] rounded-[10px] border border-[#d1d1d1] hidden sm:block"
                placeholder="Email"
                type="email"
              />
              <Input
                className="w-full px-4 py-3 bg-[#f9f9f9] rounded-[10px] border border-[#d1d1d1]"
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
              <label
                htmlFor="show-password"
                className="cursor-pointer text-black text-sm"
              >
                Show password
              </label>
            </div>
            <Button
              className="h-12 w-full bg-[#ec4c7d] hover:bg-[#d43e6b] rounded-lg text-white text-lg font-semibold"
              onClick={() => router.push("/Dashboard")}
            >
              Log In
            </Button>
            <p className="text-center text-black text-sm md:text-base">
              Don’t have an account?{" "}
              <Button
                variant="link"
                className="p-0 font-semibold text-[#292c31] underline"
                onClick={() => router.push("/signup")}
              >
                Sign Up
              </Button>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
