/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/TableList.jsx";
import Maps from "views/Maps.jsx";
import UserPage from "views/UserPage.jsx";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app", 
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/Inventory",
    name: "Inventory",
    icon: "business_briefcase-24",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/Account",
    name: "Account",
    icon: "users_circle-08",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/Orders",
    name: "Orders",
    icon: "business_money-coins",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/Settings",
    name: "Settings",
    icon: "loader_gear",
    component: Icons,
    layout: "/admin"
  },
  {
    
    path: "/HR_Management",
    name: "HR Management",
    icon: "loader_gear",
    component: Icons,
    layout: "/admin",
    dropdownIcon: "arrows-1_minimal-down",
    sub_menu: [
      {
        name: "Employee",
        path: "/Employee",
        icon: "loader_gear",
        component: Icons,
        layout: "/admin"
      },
      {
        name: "Departments",
        path: "/Departments",
        icon: "files_box",
        component: Icons,
        layout: "/admin"
      },
      {
        name: "Payroll",
        path: "/Payroll",
        icon: "loader_gear",
        component: Icons,
        layout: "/admin"
      },
    ]

  },
  {
    path: "/icons",
    name: "Icons",
    icon: "design_image",
    component: Icons,
    layout: "/admin"
  },
 
  {
    path: "/maps",
    name: "Maps",
    icon: "location_map-big",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "ui-1_bell-53",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin"
  },
  {
    path: "/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "design-2_ruler-pencil",
    component: Typography,
    layout: "/admin"
  }
];
export default dashRoutes;
