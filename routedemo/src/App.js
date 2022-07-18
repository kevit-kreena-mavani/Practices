import { Route } from "react-router-dom";
import "./App.css";
import Product from "./components/products";
import Welcome from "./components/welcome";

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome></Welcome>
      </Route>
      <Route path="/product">
        <Product></Product>
      </Route>
    </div>
  );
}

export default App;
