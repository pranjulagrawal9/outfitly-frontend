"use client";

import { LogOut, User, Heart, Pen } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/features/user/userSlice";
import { useRouter } from "next/navigation";

export default function ProfileDropdown() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user);

  function handleLogout() {
    localStorage.removeItem("jwt");
    dispatch(removeUser());
    router.replace("/login");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://cdn-icons-png.flaticon.com/512/552/552848.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="italic">
          {user?.username}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:font-bold">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem className="hover:font-bold">
          <Heart className="mr-2 h-4 w-4" />
          <span>My Wishlist</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push("/myorders")}
          className="hover:font-bold"
        >
          <Pen className="mr-2 h-4 w-4" />
          <span>My Orders</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleLogout}
          className="font-bold text-appPrimary"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
