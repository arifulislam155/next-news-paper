import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const Navbar = () => {
  return (
    <header className="py-4 bg-white shadow-md text-gray-900 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8">
        <div className="text-xl font-bold">
          <Link href="/">Daily News</Link>
        </div>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink href="/news" className="hover:text-gray-600">
                News
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="dark:bg-gray-900 dark:text-white">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <ul className="text-gray-600 shadow-md rounded py-4 px-5 space-y-2">
                    <li>
                      <NavigationMenuLink
                        href="/services/web-developemnt"
                        className="hover:text-gray-600"
                      >
                        Web Development
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/web-developemnt"
                        className="hover:text-gray-600"
                      >
                        Mobile Apps
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/web-developemnt"
                        className="hover:text-gray-600"
                      >
                        Search Engine Optimization
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
};

export default Navbar;
