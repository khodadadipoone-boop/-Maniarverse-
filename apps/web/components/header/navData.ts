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
    href: "/dashboard",
    icon: FaHome,
  },
  {
    name: "Children",
    href: "/dashboard/children",
    icon: HiOutlineUsers,
  },
  {
    name: "Plans",
    href: "/dashboard/plans",
    icon: HiOutlineClipboardDocumentList,
  },
  {
    name: "Reports",
    href: "/dashboard/reports",
    icon: HiOutlineChartBarSquare,
  },
  {
    name: "Messages",
    href: "/dashboard/messages",
    icon: HiOutlineChatBubbleLeftRight,
  },
  {
    name: "Resources",
    href: "/dashboard/resources",
    icon: HiOutlineBookOpen,
  },
  {
    name: "Family Settings",
    href: "/dashboard/family-settings",
    icon: HiOutlineCog6Tooth,
  },
];
