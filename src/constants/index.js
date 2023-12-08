import { MdDashboard } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";

const routes = [
  {
    label: "Dashboard",
    icon: MdDashboard,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Asset",
    icon: GiTakeMyMoney,
    href: "/asset",
    color: "text-violet-500",
  },
];

export { routes };
