import { createContext, useState, useContext } from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import FileUpload from "./components/Fileupload";
import ShowImages from "./components/ShowImages";

function App() {
  return (
    <URLProvider>
      <Router />
    </URLProvider>
  );
}

const URLContext = createContext();

function URLProvider({ children }) {
  const value = useState([]);
  return <URLContext.Provider value={value}>{children}</URLContext.Provider>;
}

export const useImageURLs = () => {
  const value = useContext(URLContext);
  if (value === undefined) throw new Error("Must be inside context");

  return value;
};

function Navigation() {
  return (
    <div className="header-nav">
      <h1>Project Name</h1>
      <navigation>
        <ul>
          <li>
            <Link to="/">Page 1</Link>
          </li>
          <li>
            <Link to="/two">Page 2</Link>
          </li>
        </ul>
        <Outlet />
      </navigation>
    </div>
  );
}

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<FileUpload />} />
          <Route path="/two" element={<ShowImages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
