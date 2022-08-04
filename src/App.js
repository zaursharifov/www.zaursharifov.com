import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Cursor from "./page_components/Cursor";
import "./style/app.scss";

export default function App() {
  return (
    <>
      <Cursor />

      <div className="container">
        <Navbar />
        <Sidebar />

        <a href="/">Tikla</a>
        <button>BTN TUKLA</button>
      </div>
    </>
  );
}
