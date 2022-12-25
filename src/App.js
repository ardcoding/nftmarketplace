import React from "react";
import Homepage from "./pages/homepage";
import { Route, Routes } from "react-router-dom";
import "./pages/page.css"
import Introduction from "./pages/introduction";
import Collection from "./pages/collection";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" exact element={<Homepage/>}/>
      <Route path="/introduction" exact element={<Introduction/>}/>
      <Route path="/collection" exact element={<Collection/>}/>
      </Routes>
    </div>
  );
}
export default App;
