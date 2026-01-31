import MenuPizzeria from "./components/menu";
import "./App.css";

function App() {


  return (
    <div style={
      {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        width: "100vw",
      }
    }>
      <h1 style={
        {
          textAlign: "center",
          color: "red",
          fontSize: "2.5rem",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        }
      }>
        🍕Vincenzo's Pizzeria🍕
      </h1>
      <MenuPizzeria />
    </div>
  )
}

export default App
