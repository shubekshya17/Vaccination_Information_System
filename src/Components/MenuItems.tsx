import { Link } from "react-router-dom";

const token = localStorage.getItem("token");
const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/Home";
};

const MenuItems = [
  {
    key: "1",
    label: <Link to="/">Home</Link>,
    name: "/",
  },
  {
    key: "2",
    label: <Link to="/Health">Health</Link>,
    name: "Health",
  },
  {
    key: "3",
    label: <Link to="/List">Form</Link>,
    name: "List",
  },
  {
    key: "4",
    label: <Link to="/CustomerService">Customer Service</Link>,
    name: "CustomerService",
  },
  {
    key: "5",
    label: <Link to="/Login">Admin</Link>,
    name: "Login",
  },
];

if (token) {
  MenuItems.push(
    {
      key: "6",
      label: <Link to="/AdminUserList">Users</Link>,
      name: "AdminUserList",
    },
    {
      key: "7",
      label: <Link to="/VaccinationInfo">Vaccination Info</Link>,
      name: "VaccinationInfo",
    },
    {
      key: "8",
      label: (
        <Link to="#" onClick={handleLogout}>
          Logout
        </Link>
      ),
      name: "Logout",
    }
  );
}
export { MenuItems };
