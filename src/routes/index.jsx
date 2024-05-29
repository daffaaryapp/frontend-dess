//import react router dom
import { Routes, Route } from "react-router-dom";

//import private routes
import PrivateRoutes from "./PrivateRoutes";

//======================================================
// view admin
//======================================================

//import view login
import Login from "../views/Auth/Login";

//import viuew forbidden
import Forbidden from "../views/Auth/Forbidden";

//import view dashboard
import Dashboard from "../views/Admin/Dashboard/Index";

//import view permissions
import PermissionsIndex from "../views/Admin/Permissions/Index";

//import view roles index
import RolesIndex from "../views/Admin/Roles/Index";

export default function RoutesIndex() {
  return (
    <Routes>
      {/* route "/login" */}
      <Route path="/login" element={<Login />} />

      {/* route "/forbidden" */}
      <Route path="/forbidden" element={<Forbidden />} />

      {/* private route "/admin/dashboard" */}
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        }
      />

      {/* private route "/admin/permissions" */}
      <Route
        path="/admin/permissions"
        element={
          <PrivateRoutes>
            <PermissionsIndex />
          </PrivateRoutes>
        }
      />

      {/* private route "/admin/roles" */}
      <Route
        path="/admin/roles"
        element={
          <PrivateRoutes>
            <RolesIndex />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}