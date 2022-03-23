import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoutesEnum } from "../components/Menu/menu";
import ContactList from "../module/contactList";

const PageRoutes = () => (
  <Router>
    <Routes>
      <Route path={RoutesEnum.HOME} element={<ContactList />} />
      <Route path={RoutesEnum.PRODUCT_MANAGEMENT} element={<ContactList />} />
      <Route path={RoutesEnum.CONTACTS} element={<ContactList />} />
      <Route path={RoutesEnum.REPORTS} element={<ContactList />} />
      <Route path={RoutesEnum.ORDERS} element={<ContactList />} />
      <Route path={RoutesEnum.APPS} element={<ContactList />} />
      <Route path={RoutesEnum.INTEGRATIONS} element={<></>} />
    </Routes>
  </Router>
);

export default PageRoutes;
