import clsx from "clsx";
import { NavLink } from "react-router-dom";

import { Home, Item, My, Search } from "@/assets/svgs/layouts";

const menuData = [
  {
    name: "홈",
    icon: Home,
    to: "/",
  },
  {
    name: "검색",
    icon: Search,
    to: "/search",
  },
  {
    name: "입찰물품",
    icon: Item,
    to: "/items",
  },
  {
    name: "마이",
    icon: My,
    to: "/my",
  },
];

const Footer = () => {
  const navClassName = ({ isActive }: { isActive: boolean }) => {
    return clsx(
      "flex flex-col items-center justify-center gap-1 text-[12px] w-full h-full",
      isActive ? "text-black fill-black" : "text-[#A3A3A3] fill-[#A3A3A3]"
    );
  };
  return (
    <div className="fixed bottom-0 w-full max-w-[375px] bg-white border-t border-[#E5E5E5] z-50">
      <div className="flex justify-around items-center h-20">
        {menuData.map(item => {
          const IconComponent = item.icon;
          return (
            <NavLink key={item.name} to={item.to} className={navClassName}>
              <IconComponent className="w-6 h-6" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
