import { NavLink } from "react-router-dom";
import { TSidebarItems, TUserPath } from "../types/routesAndSidebar";

export const generateSidebarItems = (items: TUserPath[], userRole: string) => {
  const sidebarItems = items.reduce((acc: TSidebarItems[], item) => {
    if (item.label && item.element) {
      acc.push({
        key: item.label,
        icon: item.icon,
        label: <NavLink to={`/${userRole}/${item.path}`}>{item.label}</NavLink>,
      });
    }

    if (item.label && item.children) {
      acc.push({
        key: item.label,
        icon: item.icon,
        label: item.label,
        children: item.children.map((ele) => ({
          key: ele.label!,
          label: <NavLink to={`/${userRole}/${ele.path}`}>{ele.label}</NavLink>,
        })),
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};
