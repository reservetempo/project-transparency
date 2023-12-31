import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Signin from "./components/Signin";
import Directory from "./components/Directory"
import NotFound from "./components/NotFound";
import { useEffect, useState } from "react";
import makeFetchRequest from "./utils/make-fetch-request";
import { getDirectory } from "./service/handleGet";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/:dir0?/:dir1?/:dir2?/:dir3?/:dir4?/:dir5?/:dir6?/:dir7?/:dir8?/:dir9?" element={<Directory />}/>
            <Route path="/notfound" element={<NotFound />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
