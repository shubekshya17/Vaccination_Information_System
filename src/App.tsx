import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LayoutStyle from "./Components/Layout";
import Home from "./Components/Home";
import Health from "./Components/Health";
import FormPage from "./Components/Form";
import CustomerService from "./Components/CustomerService";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutStyle />}>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Health" element={<Health />} />
          <Route path="/Form" element={<FormPage />} />
          <Route path="/CustomerService" element={<CustomerService />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
