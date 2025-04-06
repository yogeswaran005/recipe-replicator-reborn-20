
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  
  return (
    <header className="bg-black text-white">
      <div className="container-custom py-4 flex justify-between items-center">
        <div>
          <Link to="/" className="text-2xl font-bold">FOODIE CRAFT</Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-red-500 hover:text-red-400">Home</Link>
          <Link to="/categories" className="text-white hover:text-gray-300">Categories</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          {user && <Link to="/favorites" className="text-white hover:text-gray-300">Favorites</Link>}
        </nav>
        <div className="flex items-center space-x-2">
          {!user ? (
            <>
              <Button variant="ghost" className="text-white hover:text-gray-300" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white" asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8 cursor-pointer">
                  <AvatarImage src={user.avatar || ""} alt={user.name || "User"} />
                  <AvatarFallback>{user.name?.charAt(0) || "U"}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/favorites">Favorites</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
