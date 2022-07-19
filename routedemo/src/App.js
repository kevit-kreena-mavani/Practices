import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Product from "./pages/products";
import Welcome from "./pages/welcome";

function App() {
  return (
    <div>
      <MainHeader></MainHeader>

      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome/*" element={<Welcome />}>
          <Route
            path="new-user"
            element={<p>Welcome , New User !!!</p>}
          ></Route>
        </Route>
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productID" element={<ProductDetail />} />
      </Routes>

      {/*     ============================= REACT_ROUTER VERSION 5 ==================  
      <Switch>
        <Route path = "/">
          <Redirect to ="/welcome">
        </Route>
        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>
        <Route path="/product" exact>
          <Product></Product>
        </Route>
        <Route path="/product/:productID">
          <ProductDetail></ProductDetail>
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
