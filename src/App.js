import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Planets from "./components/Planets";
import People from "./components/People";
import { ReactQueryDevtools } from "react-query-devtools";

function App() {
  const [page, setPage] = useState("planets");
  return (
    <>
      <div className="App">
        <h1>Star wars info</h1>
        <Navbar setPage={setPage} />
        <div className="content"></div>
        {page === "planets" ? <Planets /> : <People />}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
