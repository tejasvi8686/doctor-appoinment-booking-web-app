import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";

const Header = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={180} height={80} />
        </Link>

        <ul className="md:flex gap-8 hidden">
          {Menu.map((item) => (
            <li
              key={item.id}
              className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out"
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
