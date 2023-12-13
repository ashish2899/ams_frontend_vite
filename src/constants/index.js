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

// temprary asset list
const assetList = [
  {
    name: "Asset 1",
    description: "This is asset 1",
    purchase_cost: 139000,
    purchase_date: "2022-01-01",
    status: "Available",
  },
  {
    name: "Asset 2",
    description: "This is asset 2",
    purchase_cost: 139000,
    purchase_date: "2022-01-01",
    status: "Available",
  },
  {
    name: "Asset 3",
    description: "This is asset 3",
    purchase_cost: 139000,
    purchase_date: "2022-01-01",
    status: "Available",
  },
  {
    name: "Asset 4",
    description: "This is asset 4",
    purchase_cost: 139000,
    purchase_date: "2022-01-01",
    status: "Available",
  },
  {
    name: "Asset 5",
    description: "This is asset 5",
    purchase_cost: 139000,
    purchase_date: "2022-01-01",
    status: "Available",
  },
];

export { routes, assetList };
