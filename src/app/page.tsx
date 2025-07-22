import Image from "next/image";
import SignupPage from "./signup/page";
import LoginPage from "./login/page";
import AddPage from "./Creat/page";
import ActiveTasksPage from "./Active-Tasks/page";
import DeleteTask from "./Delete/page";

import InactiveTask from "./Inactive-Tasks/page";

export default function Home() {
  return <LoginPage />;
}
