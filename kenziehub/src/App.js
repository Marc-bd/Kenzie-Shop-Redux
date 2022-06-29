import logo from "./logo.svg";
import "./App.css";
import ThemeHeader from "./components/Header";
import CardProduct from "./components/CardProduct";
import Cart from "./components/Cart";
import Main from "./components/MainContain";

function App() {
  return (
    <div className="App">
      <ThemeHeader />
      <Main />
    </div>
  );
}

export default App;
