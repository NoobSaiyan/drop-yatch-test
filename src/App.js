import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div
      className="h-screen w-screen"
      style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}
    >
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
