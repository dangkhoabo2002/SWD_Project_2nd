import "./App.css";
import AdminReservation from "./components/admin";
import UserManagement from "./components/user";
import Menu from "./components/menu.js";
import TableReservation from "./components/tableReservation";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <AdminReservation />
      <Routes>
        <Route path="/" element={<TableReservation />}></Route>
        <Route path="/users" element={<UserManagement />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
      </Routes>
    </div>
  );
}

export default App;
