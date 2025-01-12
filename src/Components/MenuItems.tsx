import { Link } from "react-router-dom";
export const MenuItems = [
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
    label: <Link to="/Form">Form</Link>,
    name: "FormPage",
  },
  {
    key: "4",
    label: <Link to="/CustomerService">Customer Service</Link>,
    name: "CustomerService",
  },
];
