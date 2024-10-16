"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  CircleUser,
  Menu,
  Package2,
  Search,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div>
      <header className="md:fixed lg:fixed top-0 left-0 right-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50 sm:justify-between md: justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Image
              src="/ferlion-labs-logo.png"
              alt="Ferilion Logo"
              width={48}
              height={48}
            />
            <span className="sr-only">Ferilion</span>
          </Link>
        </div>

        {/* Navigation Section */}
        <nav className="hidden md:flex md:flex-1 justify-center gap-6 text-lg font-bold md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/"
            className={`text-foreground transition-colors ${pathname === '/' ? 'font-bold text-red-500' : 'text-muted-foreground'} hover:text-foreground`}
          >
            Home
          </Link>
          <Link
            href="/aboutus"
            className={`text-muted-foreground transition-colors ${pathname === '/aboutus' ? 'font-bold text-red-500' : ''} hover:text-foreground`}
          >
            About Us
          </Link>
          <Link
            href="/courses"
            className={`text-muted-foreground transition-colors ${pathname === '/courses' ? 'font-bold text-red-500' : ''} hover:text-foreground`}
          >
            Courses
          </Link>
          <Link
            href="/services"
            className={`text-muted-foreground transition-colors ${pathname === '/services' ? 'font-bold text-red-500' : ''} hover:text-foreground`}
          >
            Our Services
          </Link>
          <Link
            href="/alumnis"
            className={`text-muted-foreground transition-colors ${pathname === '/alumnis' ? 'font-bold text-red-500' : ''} hover:text-foreground`}
          >
            Alumni
          </Link>
          <Link
            href="/contact"
            className={`text-muted-foreground transition-colors ${pathname === '/contact' ? 'font-bold text-red-500' : ''} hover:text-foreground`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Search Box Section */}
        <div className="flex items-center justify-end">
          <form className="sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 sm:w-[100px] md:w-[100px] lg:w-[200px]"
              />
            </div>
          </form>
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-bold md:text-base"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Ferilion</span>
              </Link>
              <Link
                href="/"
                className={`text-foreground transition-colors ${pathname === '/' ? 'font-bold text-red-500' : 'text-muted-foreground'} hover:text-foreground`}
              >
                Home
              </Link>
              <Link
                href="/aboutus"
                className={`text-muted-foreground transition-colors ${pathname === '/aboutus' ? 'font-bold text-red-500' : ''} hover:text-foreground`}
              >
                About Us
              </Link>
              <Link
                href="/courses"
                className={`text-muted-foreground transition-colors ${pathname === '/courses' ? 'font-bold text-red-500' : ''} hover:text-foreground`}
              >
                Courses
              </Link>
              <Link
                href="/services"
                className={`text-muted-foreground transition-colors ${pathname === '/services' ? 'font-bold text-red-500' : ''} hover:text-foreground`}
              >
                Our Services
              </Link>
              <Link
                href="/alumnis"
                className={`text-muted-foreground transition-colors ${pathname === '/alumnis' ? 'font-bold text-red-500' : ''} hover:text-foreground`}
              >
                Alumni
              </Link>
              <Link
                href="/contact"
                className={`text-muted-foreground transition-colors ${pathname === '/contact' ? 'font-bold text-red-500' : ''} hover:text-foreground`}
              >
                Contact Us
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
};

export default Navigation;
