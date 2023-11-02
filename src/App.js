import "./App.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Switch from "react-router-dom/Switch";
import Route from "react-router-dom/Route";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route path="/product/:productID" component={ProductDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
