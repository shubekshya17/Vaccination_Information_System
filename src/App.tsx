import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LayoutStyle from "./Components/Layout";
import Home from "./Components/Home";
import Health from "./Components/Health";
import CustomerService from "./Components/CustomerService";
import List from "./Components/UserForm/List";
import FullDescription from "./Components/FullDescription";
import VaccinationInfoList from "./Components/VaccinationInfo/VaccinationInfoList";
import Login from "./Components/Login";
import AdminUserList from "./Components/Admin/UserList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutStyle />}>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Health" element={<Health />} />
          <Route path="/List" element={<List />} />
          <Route path="/AdminUserList" element={<AdminUserList />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CustomerService" element={<CustomerService />} />
          <Route path="/FullDescription" element={<FullDescription />} />
          <Route path="/VaccinationInfo" element={<VaccinationInfoList />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;


