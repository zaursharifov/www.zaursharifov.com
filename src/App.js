import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./style/app.scss";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
    </div>
  );
}
