import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import NewItem from "./pages/newItem/NewItem";
import "./App.scss";
import { productInputs, userInputs } from "./formSource";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<NewItem inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route
              path="new"
              element={
                <NewItem inputs={productInputs} title="Add New Product" />
              }
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
