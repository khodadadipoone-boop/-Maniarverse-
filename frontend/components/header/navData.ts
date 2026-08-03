import { IconType } from "react-icons";
import { FaHome } from "react-icons/fa";
import {
  HiOutlineUsers,
  HiOutlineClipboardDocumentList,
  HiOutlineChartBarSquare,
  HiOutlineChatBubbleLeftRight,
  HiOutlineBookOpen,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

interface NavItem {
  name: string;
  href: string;
  icon: IconType;
}

export const items: NavItem[] = [
  {
    name: "Home",
    href: "/",
    icon: FaHome,
  },
  {
    name: "Children",
    href: "/children",
    icon: HiOutlineUsers,
  },
  {
    name: "Plans",
    href: "/plans",
    icon: HiOutlineClipboardDocumentList,
  },
  {
    name: "Reports",
    href: "/reports",
    icon: HiOutlineChartBarSquare,
  },
  {
    name: "Messages",
    href: "/messages",
    icon: HiOutlineChatBubbleLeftRight,
  },
  {
    name: "Resources",
    href: "/resources",
    icon: HiOutlineBookOpen,
  },
  {
    name: "Family Settings",
    href: "/family-settings",
    icon: HiOutlineCog6Tooth,
  },
];
